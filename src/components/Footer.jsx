import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { CATEGORIES } from "@/lib/categories";

const HELP = [
  { name: "Shipping & Delivery", href: "/shop" },
  { name: "Returns & Exchanges", href: "/shop" },
  { name: "Size Guide", href: "/shop" },
  { name: "Contact Us", href: "/shop" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mm-container grid grid-cols-2 gap-10 py-16 md:grid-cols-4 lg:grid-cols-5">
        <div className="col-span-2 lg:col-span-2">
          <Link to="/" className="mm-display text-2xl tracking-[0.25em]">
            MODE MARKET
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            A curated fashion archive for women, men and children. Structured
            silhouettes, considered materials, and a search-first marketplace
            built for the modern wardrobe.
          </p>
          <div className="mt-6 flex items-center gap-4 text-muted-foreground">
            <a
              href="#"
              aria-label="Instagram"
              className="transition hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="transition hover:text-foreground"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="transition hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mm-eyebrow mb-4">Shop</h4>
          <ul className="space-y-2.5 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.name}>
                <Link
                  to={c.href}
                  className="text-muted-foreground transition hover:text-foreground"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mm-eyebrow mb-4">Help</h4>
          <ul className="space-y-2.5 text-sm">
            {HELP.map((c) => (
              <li key={c.name}>
                <Link
                  to={c.href}
                  className="text-muted-foreground transition hover:text-foreground"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mm-eyebrow mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link
                to="/shop"
                className="text-muted-foreground transition hover:text-foreground"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="text-muted-foreground transition hover:text-foreground"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="text-muted-foreground transition hover:text-foreground"
              >
                Sustainability
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                className="text-muted-foreground transition hover:text-foreground"
              >
                WhatsApp Order
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mm-container flex flex-col items-center justify-between gap-3 py-6 text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row">
          <span>
            © {new Date().getFullYear()} Mode Market. All rights reserved.
          </span>
          <span>Prices in TND · Tunisian Dinar</span>
        </div>
      </div>
    </footer>
  );
}
