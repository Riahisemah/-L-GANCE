import React from "react";
import CollectionView from "@/components/CollectionView";
import { useProducts } from "@/hooks/useProducts";

export default function Women() {
  const { products, loading } = useProducts({ category: "women" }, 100);
  return (
    <CollectionView
      eyebrow="Femme"
      title="L'Élégance Féminine"
      subtitle="Pièces intemporelles, drapées avec précision pour la femme moderne."
      products={products}
      loading={loading}
    />
  );
}
