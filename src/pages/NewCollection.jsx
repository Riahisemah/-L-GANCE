import React from "react";
import CollectionView from "@/components/CollectionView";
import { useProducts } from "@/hooks/useProducts";

export default function NewCollection() {
  const { products, loading } = useProducts({ is_new: true }, 100);
  return (
    <CollectionView
      eyebrow="Saison 2026"
      title="Nouvelle Collection"
      subtitle="Les pièces les plus récentes de notre atelier — éditions limitées et matières d'exception."
      products={products}
      loading={loading}
    />
  );
}
