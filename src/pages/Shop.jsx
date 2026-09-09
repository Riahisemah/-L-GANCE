import React from "react";
import CollectionView from "@/components/CollectionView";
import { useProducts } from "@/hooks/useProducts";

export default function Shop() {
  const { products, loading } = useProducts({}, 100);
  return (
    <CollectionView
      eyebrow="La Boutique"
      title="Toute la Collection"
      subtitle="Prêt-à-porter premium pour femme et homme, conçu dans l'atelier ÉLÉGANCE."
      products={products}
      loading={loading}
    />
  );
}
