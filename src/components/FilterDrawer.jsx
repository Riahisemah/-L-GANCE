import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function FilterDrawer(props) {
  const {
    open,
    onClose,
    categories,
    activeCategory,
    onSelectCategory,
    priceMin,
    setPriceMin,
    priceMax,
    setPriceMax,
    inStockOnly,
    setInStockOnly,
    availableColors,
    selectedColors,
    toggleColor,
    availableSizes,
    selectedSizes,
    toggleSize,
    activeFilterCount,
    onClear,
  } = props;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              type: "tween",
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed left-0 top-0 z-50 flex h-full w-[88%] max-w-sm flex-col bg-background shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <h2 className="mm-display text-2xl">Filters</h2>
              <button
                onClick={onClose}
                aria-label="Close filters"
                className="transition hover:opacity-60"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 space-y-8 overflow-y-auto px-6 py-6">
              <section>
                <h3 className="mm-eyebrow mb-3">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => onSelectCategory(null)}
                    className={`block text-sm transition ${!activeCategory ? "font-medium underline" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    All Pieces
                  </button>
                  {categories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => onSelectCategory(c)}
                      className={`block text-sm transition ${activeCategory?.id === c.id ? "font-medium underline" : "text-muted-foreground hover:text-foreground"}`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="mm-eyebrow mb-3">Price (TND)</h3>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="0"
                    value={priceMin}
                    onChange={(e) => setPriceMin(e.target.value)}
                    placeholder="Min"
                    className="w-full border border-border px-3 py-2 text-sm outline-none focus:border-foreground"
                  />
                  <span className="text-muted-foreground">—</span>
                  <input
                    type="number"
                    min="0"
                    value={priceMax}
                    onChange={(e) => setPriceMax(e.target.value)}
                    placeholder="Max"
                    className="w-full border border-border px-3 py-2 text-sm outline-none focus:border-foreground"
                  />
                </div>
              </section>

              <section>
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="h-4 w-4 accent-foreground"
                  />
                  <span className="text-sm">In stock only</span>
                </label>
              </section>

              {availableColors.length > 0 && (
                <section>
                  <h3 className="mm-eyebrow mb-3">Color</h3>
                  <div className="flex flex-wrap gap-2.5">
                    {availableColors.map((c) => {
                      const active = selectedColors.has(c.name);
                      return (
                        <button
                          key={c.name}
                          onClick={() => toggleColor(c.name)}
                          title={c.name}
                          className={`h-8 w-8 rounded-full border ${active ? "ring-2 ring-foreground ring-offset-2" : "border-border"}`}
                          style={{ backgroundColor: c.code }}
                        />
                      );
                    })}
                  </div>
                </section>
              )}

              {availableSizes.length > 0 && (
                <section>
                  <h3 className="mm-eyebrow mb-3">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {availableSizes.map((sz) => {
                      const active = selectedSizes.has(sz);
                      return (
                        <button
                          key={sz}
                          onClick={() => toggleSize(sz)}
                          className={`min-w-10 border px-3 py-2 text-xs uppercase tracking-wider transition ${active ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground hover:border-foreground"}`}
                        >
                          {sz}
                        </button>
                      );
                    })}
                  </div>
                </section>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-border px-6 py-4">
              <button onClick={onClear} className="mm-eyebrow underline">
                Clear all ({activeFilterCount})
              </button>
              <button
                onClick={onClose}
                className="bg-foreground px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-background transition hover:opacity-90"
              >
                Show results
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
