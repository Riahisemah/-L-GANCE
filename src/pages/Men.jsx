import React from "react";
import CollectionView from "@/components/CollectionView";
import { useProducts } from "@/hooks/useProducts";

export default function Men() {
  const { products, loading } = useProducts({ category: "men" }, 100);
  return (
    <CollectionView
      eyebrow="Homme"
      title="Le Raffinement Masculin"
      subtitle="L'art du vestiaire masculin, entre tradition tailleur et lignes contemporaines."
      products={products}
      loading={loading}
    />
  );
}
