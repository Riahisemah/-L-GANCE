import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 4000);
  };

  return (
    <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32 bg-secondary">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-[11px] uppercase tracking-luxe text-accent mb-5">
          L'Atelier
        </p>
        <h2 className="font-heading text-4xl md:text-6xl font-light mb-6 leading-tight">
          Rejoignez la Maison
        </h2>
        <p className="text-muted-foreground mb-10 max-w-md mx-auto">
          Recevez nos collections en avant-première, les ventes privées et les
          histoires de notre atelier.
        </p>
        <form
          onSubmit={submit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse e-mail"
            className="flex-1 bg-transparent border-b border-foreground/30 focus:border-foreground px-1 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            className="bg-foreground text-background px-8 py-3 text-[11px] uppercase tracking-luxe-sm hover:bg-accent transition-colors duration-500 whitespace-nowrap"
          >
            {done ? (
              <span className="flex items-center gap-2 justify-center">
                <Check size={14} /> Inscrit
              </span>
            ) : (
              "S'inscrire"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
