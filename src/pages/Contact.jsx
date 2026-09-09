import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { WHATSAPP_DISPLAY } from "@/lib/config";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-16 pt-16 md:pt-24 pb-12 text-center">
        <Reveal>
          <p className="text-[11px] uppercase tracking-luxe text-accent mb-5">
            Restons en contact
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-5">
            Contactez la Maison
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Une question, une demande sur-mesure, un conseil de styling ? Notre
            atelier vous répond.
          </p>
        </Reveal>
      </section>

      <div className="px-6 md:px-12 lg:px-16 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Info */}
          <Reveal>
            <div className="space-y-8">
              <InfoItem
                icon={MapPin}
                title="Boutique"
                lines={["Avenue Habib Bourguiba", "Tunis 1000, Tunisie"]}
              />
              <InfoItem
                icon={Phone}
                title="Téléphone"
                lines={[WHATSAPP_DISPLAY]}
              />
              <InfoItem
                icon={Mail}
                title="E-mail"
                lines={["contact@elegance.tn"]}
              />
              <InfoItem
                icon={Clock}
                title="Horaires"
                lines={["Lun — Sam : 10h — 20h", "Dimanche : sur rendez-vous"]}
              />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={submit} className="space-y-6">
              <div>
                <label className="text-[11px] uppercase tracking-luxe-sm text-muted-foreground mb-2 block">
                  Nom
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-luxe-sm text-muted-foreground mb-2 block">
                  E-mail
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-luxe-sm text-muted-foreground mb-2 block">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-foreground text-background px-10 py-4 text-[11px] uppercase tracking-luxe-sm hover:bg-accent transition-colors duration-500"
              >
                {sent ? (
                  <>
                    <Check size={14} /> Message envoyé
                  </>
                ) : (
                  <>
                    <Send size={14} /> Envoyer le message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ icon: Icon, title, lines }) {
  return (
    <div className="flex gap-5">
      <div className="w-12 h-12 shrink-0 border border-border flex items-center justify-center text-accent">
        <Icon size={18} strokeWidth={1.25} />
      </div>
      <div>
        <h3 className="text-[11px] uppercase tracking-luxe-sm mb-2">{title}</h3>
        {lines.map((l, i) => (
          <p key={i} className="text-muted-foreground text-sm">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}
