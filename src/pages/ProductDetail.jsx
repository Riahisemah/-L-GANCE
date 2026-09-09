import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Minus, Plus, Check, ArrowLeft, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useProducts } from "@/hooks/useProducts";
import { getProductById } from "@/data/products";
import { whatsappLink, WHATSAPP_DISPLAY } from "@/lib/config";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImg, setActiveImg] = useState(0);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setActiveImg(0);
    setSize(null);
    setColor(null);
    setQty(1);

    const timer = setTimeout(() => {
      if (!active) return;
      setProduct(getProductById(id));
      setLoading(false);
    }, 150);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, [id]);

  const { products: related } = useProducts(
    product ? { category: product.category } : {},
    5,
  );
  const relatedFiltered = related.filter((p) => p.id !== id).slice(0, 4);

  if (loading) {
    return (
      <div className="pt-32 px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-[3/4] bg-secondary animate-pulse" />
          <div className="space-y-4 pt-8">
            <div className="h-10 bg-secondary animate-pulse" />
            <div className="h-6 w-1/3 bg-secondary animate-pulse" />
            <div className="h-32 bg-secondary animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-40 px-6 text-center">
        <p className="text-muted-foreground mb-6">Produit introuvable.</p>
        <Link
          to="/shop"
          className="text-[11px] uppercase tracking-luxe-sm border-b border-foreground pb-1"
        >
          Retour à la boutique
        </Link>
      </div>
    );
  }

  const hasDiscount =
    product.discount_price && product.discount_price < product.price;
  const finalPrice = product.discount_price || product.price;

  const handleAdd = () => {
    addItem(product, { size, color, quantity: qty });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const handleWhatsApp = () => {
    const msg = `Bonjour ÉLÉGANCE, je souhaite commander :\n\n${product.name}\nTaille: ${size}\nCouleur: ${color}\nQuantité: ${qty}\nPrix: ${finalPrice.toLocaleString("fr-TN")} TND`;
    window.open(whatsappLink(msg), "_blank");
  };

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="px-6 md:px-12 lg:px-16 py-6">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-luxe-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={14} /> Retour
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 px-6 md:px-12 lg:px-16 pb-20">
        {/* Gallery */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="aspect-[3/4] overflow-hidden bg-secondary mb-4">
            <motion.img
              key={activeImg}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={product.images?.[activeImg]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {product.images?.length > 1 && (
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-20 h-24 overflow-hidden border transition-all ${
                    activeImg === i
                      ? "border-foreground"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="lg:pt-4">
          <Reveal>
            {product.subcategory && (
              <p className="text-[11px] uppercase tracking-luxe text-accent mb-4">
                {product.subcategory}
              </p>
            )}
            <h1 className="font-heading text-4xl md:text-5xl font-light mb-6 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-heading text-3xl font-light">
                {finalPrice.toLocaleString("fr-TN")} TND
              </span>
              {hasDiscount && (
                <span className="text-lg text-muted-foreground line-through">
                  {product.price.toLocaleString("fr-TN")} TND
                </span>
              )}
            </div>

            {product.description && (
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
                {product.description}
              </p>
            )}

            {product.material && (
              <p className="text-sm text-muted-foreground mb-8">
                <span className="text-foreground">Matière:</span>{" "}
                {product.material}
              </p>
            )}

            {/* Sizes */}
            {product.sizes?.length > 0 && (
              <div className="mb-8">
                <p className="text-[11px] uppercase tracking-luxe-sm mb-4">
                  Taille
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`min-w-[48px] h-12 px-4 border text-sm transition-all ${
                        size === s
                          ? "border-foreground bg-foreground text-background"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Colors */}
            {product.colors?.length > 0 && (
              <div className="mb-8">
                <p className="text-[11px] uppercase tracking-luxe-sm mb-4">
                  Couleur
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      className={`px-4 h-10 border text-sm transition-all ${
                        color === c
                          ? "border-foreground bg-secondary"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-[11px] uppercase tracking-luxe-sm mb-4">
                Quantité
              </p>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-12 h-12 flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Diminuer"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-sm">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Augmenter"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 max-w-md">
              <button
                onClick={handleAdd}
                className="h-14 bg-foreground text-background text-[11px] uppercase tracking-luxe-sm hover:bg-accent transition-colors duration-500 flex items-center justify-center gap-2"
              >
                {added ? (
                  <>
                    <Check size={16} /> Ajouté au panier
                  </>
                ) : (
                  "Ajouter au Panier"
                )}
              </button>
              <button
                onClick={handleWhatsApp}
                className="h-14 border border-foreground text-foreground text-[11px] uppercase tracking-luxe-sm hover:bg-foreground hover:text-background transition-colors duration-500 flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} /> Commander via WhatsApp
              </button>
              <p className="text-xs text-muted-foreground text-center mt-2">
                Service concierge · {WHATSAPP_DISPLAY}
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Related */}
      {relatedFiltered.length > 0 && (
        <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28 bg-secondary">
          <div className="text-center mb-12">
            <Reveal>
              <p className="text-[11px] uppercase tracking-luxe text-accent mb-4">
                Vous aimerez aussi
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-light">
                Pièces Associées
              </h2>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10">
            {relatedFiltered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
