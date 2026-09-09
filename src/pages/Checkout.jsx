import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Lock } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { whatsappLink } from "@/lib/config";
import Reveal from "@/components/Reveal";

const SHIPPING_COST = 12;
const TUNISIAN_CITIES = [
  "Tunis",
  "Ariana",
  "Ben Arous",
  "Manouba",
  "Nabeul",
  "Bizerte",
  "Sousse",
  "Monastir",
  "Mahdia",
  "Sfax",
  "Kairouan",
  "Kasserine",
  "Sidi Bouzid",
  "Gabès",
  "Medenine",
  "Tataouine",
  "Gafsa",
  "Tozeur",
  "Kebili",
  "Jendouba",
  "Le Kef",
  "Siliana",
  "Beja",
  "Zaghouan",
];

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState("info");
  const [submitting, setSubmitting] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [form, setForm] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    shipping_address: "",
    city: "Tunis",
    postal_code: "",
    notes: "",
    payment_method: "cod",
  });

  const total = subtotal + (items.length > 0 ? SHIPPING_COST : 0);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const placeOrder = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // No backend in local mode: the order is confirmed client-side and
      // recapped via WhatsApp/email by the concierge team.
      const newOrderId =
        (typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(16).slice(2)}`);
      setOrderId(newOrderId);
      setStep("done");
      clearCart();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const orderViaWhatsApp = () => {
    const lines = items
      .map(
        (i) =>
          `• ${i.name} (${i.size}, ${i.color}) x${i.quantity} — ${(i.price * i.quantity).toLocaleString("fr-TN")} TND`,
      )
      .join("\n");
    const msg = `Bonjour ÉLÉGANCE, je souhaite commander :\n\n${lines}\n\nTotal: ${total.toLocaleString("fr-TN")} TND\n\nNom: ${form.customer_name}\nTél: ${form.customer_phone}\nAdresse: ${form.shipping_address}, ${form.city}`;
    window.open(whatsappLink(msg), "_blank");
  };

  // Confirmation screen
  if (step === "done") {
    return (
      <div className="pt-32 pb-20 px-6 min-h-[80vh] flex items-center justify-center">
        <Reveal className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-8">
            <Check size={28} className="text-accent" strokeWidth={1.5} />
          </div>
          <p className="text-[11px] uppercase tracking-luxe text-accent mb-4">
            Commande confirmée
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-light mb-5">
            Merci pour votre confiance
          </h1>
          <p className="text-muted-foreground mb-2">
            Votre commande{" "}
            <span className="text-foreground font-medium">
              #{orderId?.slice(-8).toUpperCase()}
            </span>{" "}
            a bien été reçue.
          </p>
          <p className="text-muted-foreground mb-10">
            Notre équipe vous contactera sous peu pour confirmer la livraison.
          </p>
          <Link
            to="/"
            className="inline-flex bg-foreground text-background px-10 py-4 text-[11px] uppercase tracking-luxe-sm hover:bg-accent transition-colors"
          >
            Retour à l'accueil
          </Link>
        </Reveal>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-20 px-6 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-heading text-4xl font-light mb-4">
          Votre panier est vide
        </h1>
        <Link
          to="/shop"
          className="text-[11px] uppercase tracking-luxe-sm border-b border-foreground pb-1"
        >
          Découvrir la boutique
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 px-6 md:px-12 lg:px-16 min-h-screen bg-secondary/30">
      {/* Progress */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-border z-40">
        <div
          className="h-full bg-accent transition-all duration-700"
          style={{ width: "100%" }}
        />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Reveal>
            <p className="text-[11px] uppercase tracking-luxe text-accent mb-4">
              Finalisation
            </p>
            <h1 className="font-heading text-4xl md:text-6xl font-light">
              Commande
            </h1>
          </Reveal>
        </div>

        <form
          onSubmit={placeOrder}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8"
        >
          {/* Form */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-background p-6 md:p-8">
              <h2 className="font-heading text-2xl font-light mb-6">
                Informations de livraison
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field
                  label="Nom complet"
                  required
                  value={form.customer_name}
                  onChange={(v) => update("customer_name", v)}
                />
                <Field
                  label="Téléphone"
                  required
                  type="tel"
                  value={form.customer_phone}
                  onChange={(v) => update("customer_phone", v)}
                />
                <Field
                  label="E-mail"
                  type="email"
                  value={form.customer_email}
                  onChange={(v) => update("customer_email", v)}
                />
                <Field
                  label="Code postal"
                  value={form.postal_code}
                  onChange={(v) => update("postal_code", v)}
                />
                <div className="md:col-span-2">
                  <Field
                    label="Adresse"
                    required
                    value={form.shipping_address}
                    onChange={(v) => update("shipping_address", v)}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-[11px] uppercase tracking-luxe-sm text-muted-foreground mb-2 block">
                    Ville
                  </label>
                  <select
                    value={form.city}
                    onChange={(e) => update("city", e.target.value)}
                    className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-foreground transition-colors"
                  >
                    {TUNISIAN_CITIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-[11px] uppercase tracking-luxe-sm text-muted-foreground mb-2 block">
                    Notes (optionnel)
                  </label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    rows={2}
                    className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-foreground transition-colors resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="bg-background p-6 md:p-8">
              <h2 className="font-heading text-2xl font-light mb-6">
                Mode de paiement
              </h2>
              <div className="space-y-3">
                <PaymentOption
                  value="cod"
                  current={form.payment_method}
                  onSelect={(v) => update("payment_method", v)}
                  title="Paiement à la livraison"
                  desc="Payez en espèces à la réception de votre commande."
                />
                <PaymentOption
                  value="whatsapp"
                  current={form.payment_method}
                  onSelect={(v) => update("payment_method", v)}
                  title="Commande via WhatsApp"
                  desc="Finalisez votre commande avec notre concierge."
                />
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-2">
            <div className="bg-background p-6 md:p-8 sticky top-28">
              <h2 className="font-heading text-2xl font-light mb-6">
                Votre commande
              </h2>
              <div className="space-y-4 pb-6 border-b border-border max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.key} className="flex gap-3">
                    <div className="w-14 h-18 bg-secondary shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 text-sm">
                      <p className="font-heading text-base font-light leading-tight">
                        {item.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.size} · {item.color} · x{item.quantity}
                      </p>
                    </div>
                    <span className="text-sm">
                      {(item.price * item.quantity).toLocaleString("fr-TN")} TND
                    </span>
                  </div>
                ))}
              </div>
              <div className="space-y-3 py-6 border-b border-border text-sm">
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

              {form.payment_method === "whatsapp" ? (
                <button
                  type="button"
                  onClick={orderViaWhatsApp}
                  className="w-full h-14 border border-foreground text-foreground text-[11px] uppercase tracking-luxe-sm hover:bg-foreground hover:text-background transition-colors duration-500"
                >
                  Commander via WhatsApp
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-14 bg-foreground text-background text-[11px] uppercase tracking-luxe-sm hover:bg-accent transition-colors duration-500 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {submitting ? "Traitement..." : "Confirmer la commande"}
                </button>
              )}
              <p className="text-xs text-muted-foreground text-center mt-4 flex items-center justify-center gap-1.5">
                <Lock size={12} /> Paiement sécurisé · Livraison 2-4 jours
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", required }) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-luxe-sm text-muted-foreground mb-2 block">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-foreground transition-colors"
      />
    </div>
  );
}

function PaymentOption({ value, current, onSelect, title, desc }) {
  const active = current === value;
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={`w-full text-left p-4 border transition-all ${active ? "border-foreground bg-secondary/40" : "border-border hover:border-foreground/50"}`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`w-4 h-4 rounded-full border mt-1 shrink-0 flex items-center justify-center ${active ? "border-foreground" : "border-border"}`}
        >
          {active && <div className="w-2 h-2 rounded-full bg-foreground" />}
        </div>
        <div>
          <p className="font-medium text-sm">{title}</p>
          <p className="text-xs text-muted-foreground mt-1">{desc}</p>
        </div>
      </div>
    </button>
  );
}
