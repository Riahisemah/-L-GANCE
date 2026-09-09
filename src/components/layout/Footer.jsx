import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background px-6 md:px-12 lg:px-16 pt-24 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-20">
          <div className="md:col-span-1">
            <h3 className="font-heading text-3xl font-light tracking-luxe-sm mb-4">
              ÉLÉGANCE
            </h3>
            <p className="text-sm text-background/60 leading-relaxed max-w-xs">
              Maison de textile de luxe. Prêt-à-porter premium, conçu en Tunisie
              pour le monde.
            </p>
          </div>

          <FooterCol
            title="Boutique"
            links={[
              { label: "Femme", path: "/women" },
              { label: "Homme", path: "/men" },
              { label: "Nouvelle Collection", path: "/new" },
              { label: "Toute la boutique", path: "/shop" },
            ]}
          />
          <FooterCol
            title="Maison"
            links={[
              { label: "À propos", path: "/about" },
              { label: "Contact", path: "/contact" },
              { label: "Panier", path: "/cart" },
              { label: "Commander", path: "/checkout" },
            ]}
          />

          <div>
            <h4 className="text-[11px] uppercase tracking-luxe-sm text-background/50 mb-5">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Avenue Habib Bourguiba</li>
              <li>Tunis, Tunisie</li>
              <li className="pt-2">+216 26653690</li>
              <li>contact@elegance.tn</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="text-background/60 hover:text-accent transition-colors"
              >
                <Instagram size={18} strokeWidth={1.25} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-background/60 hover:text-accent transition-colors"
              >
                <Facebook size={18} strokeWidth={1.25} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40 tracking-luxe-sm">
            © 2026 ÉLÉGANCE — TOUS DROITS RÉSERVÉS
          </p>
          <div className="flex gap-6 text-xs text-background/40 tracking-luxe-sm">
            <span>LIVRAISON NATIONALE</span>
            <span>PAIEMENT SÉCURISÉ</span>
            <span>CONÇU À TUNIS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-[11px] uppercase tracking-luxe-sm text-background/50 mb-5">
        {title}
      </h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              to={l.path}
              className="text-sm text-background/70 hover:text-accent transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
