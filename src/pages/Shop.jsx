import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useShop, SORTS } from "@/hooks/useShop";
import ProductGrid from "@/components/ProductGrid";
import FilterDrawer from "@/components/FilterDrawer";
import { SlidersHorizontal, ChevronDown } from "lucide-react";

const SORT_KEYS = Object.keys(SORTS);

function extractColors(p) {
  const out = [];
  for (const o of p?.options || []) {
    const choices = (o.choicesSettings?.choices || []).filter((c) => c.visible !== false);
    if (choices.some((c) => c.colorCode)) {
      choices.forEach((c) => c.colorCode && out.push({ name: c.name, code: c.colorCode }));
    }
  }
  return out;
}
function extractSizes(p) {
  for (const o of p?.options || []) {
    if (/size|taille/i.test(o.name)) {
      return (o.choicesSettings?.choices || [])
        .filter((c) => c.visible !== false)
        .map((c) => c.name);
    }
  }
  return [];
}

export default function Shop() {
  const s = useShop({ pageSize: 100 });
  const [searchParams, setSearchParams] = useSearchParams();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [priceMin, setPriceMin] = useState("");
  const [priceMax, setPriceMax] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [selectedColors, setSelectedColors] = useState(new Set());
  const [selectedSizes, setSelectedSizes] = useState(new Set());

  // Apply category from URL once categories are available
  useEffect(() => {
    const catName = searchParams.get("category");
    if (catName && s.categories.length) {
      const match = s.categories.find((c) => c.name.toLowerCase() === catName.toLowerCase());
      if (match && (!s.activeCategory || s.activeCategory.id !== match.id)) s.setActiveCategory(match);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, s.categories]);

  // Initialise search from URL on mount
  useEffect(() => {
    const q = searchParams.get("search") || "";
    setSearchInput(q);
    s.setFilters((prev) => ({ ...prev, search: q }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Debounce search -> server filter
  useEffect(() => {
    const t = setTimeout(() => s.setFilters((prev) => ({ ...prev, search: searchInput })), 300);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput]);

  // Debounce price/stock -> server filter
  useEffect(() => {
    const t = setTimeout(() => {
      s.setFilters((prev) => ({
        ...prev,
        minPrice: priceMin === "" ? undefined : Number(priceMin),
        maxPrice: priceMax === "" ? undefined : Number(priceMax),
        inStockOnly: inStockOnly || undefined,
      }));
    }, 300);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priceMin, priceMax, inStockOnly]);

  const availableColors = useMemo(() => {
    const map = new Map();
    (s.products || []).forEach((p) => extractColors(p).forEach((c) => map.set(c.name, c)));
    return Array.from(map.values());
  }, [s.products]);

  const availableSizes = useMemo(() => {
    const set = new Set();
    (s.products || []).forEach((p) => extractSizes(p).forEach((sz) => set.add(sz)));
    return Array.from(set);
  }, [s.products]);

  const visibleProducts = useMemo(() => {
    let list = s.products || [];
    if (selectedColors.size) list = list.filter((p) => extractColors(p).some((c) => selectedColors.has(c.name)));
    if (selectedSizes.size) list = list.filter((p) => extractSizes(p).some((sz) => selectedSizes.has(sz)));
    return list;
  }, [s.products, selectedColors, selectedSizes]);

  const activeFilterCount =
    (priceMin ? 1 : 0) + (priceMax ? 1 : 0) + (inStockOnly ? 1 : 0) + selectedColors.size + selectedSizes.size + (s.activeCategory ? 1 : 0);

  const clearAll = () => {
    setPriceMin("");
    setPriceMax("");
    setInStockOnly(false);
    setSelectedColors(new Set());
    setSelectedSizes(new Set());
    s.setActiveCategory(null);
    setSearchParams({});
  };

  const title = s.activeCategory ? s.activeCategory.name : "All Pieces";

  return (
    <div className="mm-container py-8 lg:py-12">
      <div className="flex flex-col gap-2 border-b border-border pb-8">
        <p className="mm-eyebrow">The Archive</p>
        <h1 className="mm-display text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
      </div>

      <div className="sticky top-16 z-30 -mx-5 mt-6 bg-background/85 px-5 py-3 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDrawerOpen(true)}
              className="flex items-center gap-2 border border-foreground px-4 py-2.5 text-[11px] uppercase tracking-[0.2em] transition hover:bg-foreground hover:text-background"
            >
              <SlidersHorizontal className="h-3.5 w-3.5" /> Filters
              {activeFilterCount > 0 && (
                <span className="ml-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-foreground px-1 text-[10px] text-background">
                  {activeFilterCount}
                </span>
              )}
            </button>
            <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{visibleProducts.length} pieces</span>
          </div>
          <div className="flex flex-1 items-center gap-3 lg:max-w-md">
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search the archive…"
              className="w-full border-b border-border bg-transparent py-2 text-sm outline-none focus:border-foreground"
            />
            <div className="relative shrink-0">
              <select
                value={s.sort}
                onChange={(e) => s.setSort(e.target.value)}
                className="appearance-none border border-border bg-background py-2.5 pl-3 pr-8 text-[11px] uppercase tracking-[0.18em] outline-none"
              >
                {SORT_KEYS.map((k) => (
                  <option key={k} value={k}>{SORTS[k].label}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>

      {s.error ? (
        <div className="flex flex-col items-center py-24 text-center">
          <p className="mm-display text-3xl">{s.error}</p>
          <button onClick={s.retry} className="mm-eyebrow mt-4 underline">Try again</button>
        </div>
      ) : (
        <div className="mt-8">
          <ProductGrid
            products={visibleProducts}
            loading={s.loading}
            emptyMessage={searchInput || activeFilterCount ? "No pieces match your filters." : "No products yet."}
            emptyHint={searchInput || activeFilterCount ? "Try adjusting your filters or search." : "Check back soon — new arrivals landing weekly."}
          />
          {s.hasMore && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={s.loadMore}
                disabled={s.loadingMore}
                className="border border-foreground px-8 py-3 text-[11px] uppercase tracking-[0.2em] transition hover:bg-foreground hover:text-background disabled:opacity-50"
              >
                {s.loadingMore ? "Loading…" : "Load more"}
              </button>
            </div>
          )}
        </div>
      )}

      <FilterDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        categories={s.categories}
        activeCategory={s.activeCategory}
        onSelectCategory={(c) => {
          s.setActiveCategory(c);
          setSearchParams(c ? { category: c.name } : {});
        }}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        priceMax={priceMax}
        setPriceMax={setPriceMax}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
        availableColors={availableColors}
        selectedColors={selectedColors}
        toggleColor={(name) =>
          setSelectedColors((prev) => {
            const n = new Set(prev);
            n.has(name) ? n.delete(name) : n.add(name);
            return n;
          })
        }
        availableSizes={availableSizes}
        selectedSizes={selectedSizes}
        toggleSize={(name) =>
          setSelectedSizes((prev) => {
            const n = new Set(prev);
            n.has(name) ? n.delete(name) : n.add(name);
            return n;
          })
        }
        activeFilterCount={activeFilterCount}
        onClear={clearAll}
      />
    </div>
  );
}