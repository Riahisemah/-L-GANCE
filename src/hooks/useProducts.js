import { useState, useEffect } from "react";
import { getProducts } from "@/data/products";

export function useProducts(filter = {}, limit = 100) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const key = JSON.stringify(filter) + limit;

  useEffect(() => {
    let active = true;
    setLoading(true);

    // Simulate an async fetch so loading states/skeletons still work,
    // even though the data comes from the local catalog.
    const timer = setTimeout(() => {
      if (!active) return;
      setProducts(getProducts(filter, limit));
      setLoading(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 150);

    return () => {
      active = false;
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return { products, loading };
}
