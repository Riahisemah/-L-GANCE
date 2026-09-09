import { Link } from "react-router-dom";
import { useProductCard } from "@/hooks/useProductCard";
import { useCart } from "@/context/CartContext";
import { Image } from "@/components/ui/image";
import { Plus } from "lucide-react";

export default function ProductCard({ product }) {
  const { addToCart, loading } = useCart();
  const {
    isSoldOut,
    leftBadges,
    promoBadge,
    priceDisplay,
    compareAtDisplay,
    colors,
    optionLabel,
    isQuickAddable,
    image,
    hoverImage,
  } = useProductCard(product);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    if (isQuickAddable && !loading) addToCart(product.id);
  };

  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        {image && (
          <Image
            src={image}
            alt={product.name || "Product"}
            fittingType="fill"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
          />
        )}
        {hoverImage && (
          <Image
            src={hoverImage}
            alt=""
            fittingType="fill"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}

        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {promoBadge && (
            <span className="mm-chip bg-gold px-2.5 py-1 text-gold-foreground">
              {promoBadge.label}
            </span>
          )}
        </div>
        <div className="absolute right-3 top-3 flex flex-col items-end gap-1.5">
          {leftBadges.map((b) => (
            <span
              key={b.type}
              className="mm-chip border border-border bg-background/90 px-2.5 py-1 text-foreground"
            >
              {b.label}
            </span>
          ))}
        </div>

        {isSoldOut && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/55 backdrop-blur-[2px]">
            <span className="mm-chip border border-foreground px-4 py-1.5">
              Sold Out
            </span>
          </div>
        )}

        {isQuickAddable && !isSoldOut && (
          <button
            onClick={handleQuickAdd}
            disabled={loading}
            className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 bg-foreground py-3 text-[11px] uppercase tracking-[0.2em] text-background opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 disabled:opacity-50"
          >
            <Plus className="h-3.5 w-3.5" /> Quick Add
          </button>
        )}
      </div>

      <div className="pt-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-medium leading-snug transition group-hover:underline">
            {product.name}
          </h3>
          <div className="flex shrink-0 items-baseline gap-2">
            {compareAtDisplay && (
              <span className="text-xs text-muted-foreground line-through">
                {compareAtDisplay}
              </span>
            )}
            <span className="text-sm font-medium">{priceDisplay}</span>
          </div>
        </div>
        <div className="mt-1.5 flex items-center justify-between">
          <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
            {optionLabel || "Ready to ship"}
          </p>
          {colors.length > 0 && (
            <div className="flex items-center gap-1">
              {colors.slice(0, 5).map((c) => (
                <span
                  key={c}
                  className="h-3 w-3 rounded-full border border-border"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
