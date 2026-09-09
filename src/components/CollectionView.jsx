import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";

export default function CollectionView({
  title,
  subtitle,
  eyebrow,
  products,
  loading,
}) {
  const [sort, setSort] = useState("featured");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    let list = [...products];
    if (category !== "all") list = list.filter((p) => p.category === category);
    if (sort === "price-asc")
      list.sort(
        (a, b) => (a.discount_price || a.price) - (b.discount_price || b.price),
      );
    if (sort === "price-desc")
      list.sort(
        (a, b) => (b.discount_price || b.price) - (a.discount_price || a.price),
      );
    if (sort === "new")
      list.sort((a, b) => new Date(b.created_date) - new Date(a.created_date));
    return list;
  }, [products, sort, category]);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-16 pt-16 md:pt-24 pb-12 text-center">
        <Reveal>
          {eyebrow && (
            <p className="text-[11px] uppercase tracking-luxe text-accent mb-5">
              {eyebrow}
            </p>
          )}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-5">
            {title}
          </h1>
          {subtitle && (
            <p className="text-muted-foreground max-w-xl mx-auto">{subtitle}</p>
          )}
        </Reveal>
      </section>

      {/* Toolbar */}
      <div className="px-6 md:px-12 lg:px-16 pb-10 border-b border-border">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-6 text-[11px] uppercase tracking-luxe-sm">
            {["all", "women", "men"].map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`pb-1 border-b transition-colors ${
                  category === c
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {c === "all" ? "Tout" : c === "women" ? "Femme" : "Homme"}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-luxe-sm text-muted-foreground">
            <span>Trier</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent border-b border-border pb-1 outline-none cursor-pointer text-foreground"
            >
              <option value="featured">Sélection</option>
              <option value="new">Nouveautés</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="px-6 md:px-12 lg:px-16 py-12 md:py-16">
        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[3/4] bg-secondary animate-pulse"
              />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-20">
            Aucun produit pour le moment.
          </p>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10 md:gap-y-16">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
