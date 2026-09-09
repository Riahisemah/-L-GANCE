import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductCard({ product, index = 0 }) {
  const hasDiscount =
    product.discount_price && product.discount_price < product.price;
  const img = product.images?.[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.9,
        delay: (index % 3) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden bg-secondary aspect-[3/4] mb-5">
          {img && (
            <img
              src={img}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
            />
          )}
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {product.is_new && (
              <span className="bg-background/90 text-foreground text-[10px] tracking-luxe-sm px-3 py-1 uppercase">
                Nouveau
              </span>
            )}
            {hasDiscount && (
              <span className="bg-accent text-background text-[10px] tracking-luxe-sm px-3 py-1 uppercase">
                Promo
              </span>
            )}
          </div>
          {/* Quick view overlay */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
            <div className="bg-background/95 text-foreground text-center text-[11px] tracking-luxe-sm uppercase py-3">
              Voir le produit
            </div>
          </div>
        </div>

        <div className="space-y-1">
          {product.subcategory && (
            <p className="text-[10px] uppercase tracking-luxe-sm text-muted-foreground">
              {product.subcategory}
            </p>
          )}
          <h3 className="font-heading text-xl font-light leading-snug">
            {product.name}
          </h3>
          <div className="flex items-baseline gap-2">
            {hasDiscount ? (
              <>
                <span className="text-accent font-medium">
                  {product.discount_price.toLocaleString("fr-TN")} TND
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  {product.price.toLocaleString("fr-TN")} TND
                </span>
              </>
            ) : (
              <span className="font-medium">
                {product.price.toLocaleString("fr-TN")} TND
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
