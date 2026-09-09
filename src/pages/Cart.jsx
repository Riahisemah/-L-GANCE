import React from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, X, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Reveal from "@/components/Reveal";

const SHIPPING_COST = 12;

export default function Cart() {
  const { items, removeItem, updateQuantity, subtotal, itemCount } = useCart();
  const total = subtotal + (items.length > 0 ? SHIPPING_COST : 0);

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-20 px-6 text-center min-h-[70vh] flex flex-col items-center justify-center">
        <ShoppingBag
          size={40}
          strokeWidth={1}
          className="text-muted-foreground mb-6"
        />
        <h1 className="font-heading text-4xl md:text-5xl font-light mb-4">
          Votre panier est vide
        </h1>
        <p className="text-muted-foreground mb-10 max-w-sm">
          Découvrez nos collections et laissez-vous tenter par l'élégance.
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 bg-foreground text-background px-10 py-4 text-[11px] uppercase tracking-luxe-sm hover:bg-accent transition-colors"
        >
          Découvrir la boutique <ArrowRight size={14} />
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 px-6 md:px-12 lg:px-16">
      <div className="text-center mb-12">
        <Reveal>
          <p className="text-[11px] uppercase tracking-luxe text-accent mb-4">
            Votre sélection
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-light">
            Panier
          </h1>
          <p className="text-muted-foreground mt-3">
            {itemCount} article{itemCount > 1 ? "s" : ""}
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Items */}
        <div className="lg:col-span-2 space-y-8">
          {items.map((item) => (
            <div
              key={item.key}
              className="flex gap-5 pb-8 border-b border-border"
            >
              <Link to={`/product/${item.product_id}`} className="shrink-0">
                <div className="w-28 h-36 md:w-32 md:h-40 bg-secondary overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between gap-4">
                  <div>
                    <Link
                      to={`/product/${item.product_id}`}
                      className="font-heading text-xl md:text-2xl font-light hover:text-accent transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-muted-foreground mt-1 space-x-2">
                      {item.size && <span>Taille: {item.size}</span>}
                      {item.color && <span>· Couleur: {item.color}</span>}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.key)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Retirer"
                  >
                    <X size={18} strokeWidth={1.25} />
                  </button>
                </div>
                <div className="flex items-end justify-between mt-auto pt-4">
                  <div className="inline-flex items-center border border-border">
                    <button
                      onClick={() =>
                        updateQuantity(item.key, item.quantity - 1)
                      }
                      className="w-9 h-9 flex items-center justify-center hover:bg-secondary transition-colors"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="w-9 text-center text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.key, item.quantity + 1)
                      }
                      className="w-9 h-9 flex items-center justify-center hover:bg-secondary transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                  <span className="font-medium">
                    {(item.price * item.quantity).toLocaleString("fr-TN")} TND
                  </span>
                </div>
              </div>
            </div>
          ))}
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-luxe-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Continuer mes achats
          </Link>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-secondary p-8 sticky top-28">
            <h2 className="font-heading text-2xl font-light mb-6">
              Récapitulatif
            </h2>
            <div className="space-y-3 text-sm pb-6 border-b border-border">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sous-total</span>
                <span>{subtotal.toLocaleString("fr-TN")} TND</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Livraison</span>
                <span>{SHIPPING_COST} TND</span>
              </div>
            </div>
            <div className="flex justify-between items-baseline py-6">
              <span className="font-heading text-xl font-light">Total</span>
              <span className="font-heading text-2xl font-light">
                {total.toLocaleString("fr-TN")} TND
              </span>
            </div>
            <Link
              to="/checkout"
              className="block w-full text-center bg-foreground text-background py-4 text-[11px] uppercase tracking-luxe-sm hover:bg-accent transition-colors duration-500"
            >
              Passer la commande
            </Link>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Paiement à la livraison disponible
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
