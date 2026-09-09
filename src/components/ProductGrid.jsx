import ProductCard from "@/components/ProductCard";

function CardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-[3/4] bg-muted" />
      <div className="mt-3 h-3.5 w-3/4 bg-muted" />
      <div className="mt-2 h-3 w-1/3 bg-muted" />
    </div>
  );
}

export default function ProductGrid({
  products,
  loading,
  emptyMessage = "No products yet.",
  emptyHint,
}) {
  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col items-center py-24 text-center">
        <p className="mm-display text-3xl">{emptyMessage}</p>
        {emptyHint && <p className="mm-eyebrow mt-3">{emptyHint}</p>}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
