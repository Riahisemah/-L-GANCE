import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Femme", path: "/women" },
  { label: "Homme", path: "/men" },
  { label: "Nouvelle Collection", path: "/new" },
  { label: "Boutique", path: "/shop" },
  { label: "À propos", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const onHome = location.pathname === "/";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
          scrolled || !onHome
            ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
            : "bg-transparent",
        )}
      >
        <div className="px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Mobile menu button */}
            <button
              className="lg:hidden text-foreground p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Menu"
            >
              <Menu size={22} strokeWidth={1.25} />
            </button>

            {/* Left nav (desktop) */}
            <nav className="hidden lg:flex items-center gap-8 flex-1">
              {NAV_LINKS.slice(0, 3).map((link) => (
                <NavLink key={link.path} {...link} dark={onHome && !scrolled} />
              ))}
            </nav>

            {/* Logo */}
            <Link
              to="/"
              className={cn(
                "font-heading tracking-luxe-sm text-2xl md:text-3xl font-light transition-colors",
                onHome && !scrolled ? "text-background" : "text-foreground",
              )}
              style={{
                animation: "kerning 1.6s cubic-bezier(0.22,1,0.36,1) both",
              }}
            >
              ÉLÉGANCE
            </Link>

            {/* Right nav + cart (desktop) */}
            <div className="hidden lg:flex items-center gap-8 flex-1 justify-end">
              {NAV_LINKS.slice(3).map((link) => (
                <NavLink key={link.path} {...link} dark={onHome && !scrolled} />
              ))}
              <button
                onClick={() => navigate("/cart")}
                className={cn(
                  "relative p-1 transition-colors",
                  onHome && !scrolled ? "text-background" : "text-foreground",
                )}
                aria-label="Panier"
              >
                <ShoppingBag size={22} strokeWidth={1.25} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-accent text-background text-[10px] font-medium min-w-[16px] h-[16px] rounded-full flex items-center justify-center px-1">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile cart */}
            <button
              onClick={() => navigate("/cart")}
              className={cn(
                "lg:hidden relative p-2 -mr-2 transition-colors",
                onHome && !scrolled ? "text-background" : "text-foreground",
              )}
              aria-label="Panier"
            >
              <ShoppingBag size={22} strokeWidth={1.25} />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 bg-accent text-background text-[10px] font-medium min-w-[16px] h-[16px] rounded-full flex items-center justify-center px-1">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden transition-all duration-500",
          mobileOpen ? "visible" : "invisible",
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-foreground/40 transition-opacity duration-500",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-background px-8 py-8 flex flex-col transition-transform duration-500",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between mb-12">
            <span className="font-heading tracking-luxe-sm text-xl">
              ÉLÉGANCE
            </span>
            <button onClick={() => setMobileOpen(false)} aria-label="Fermer">
              <X size={22} strokeWidth={1.25} />
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-heading text-3xl font-light py-3 border-b border-border/50 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-8 text-sm text-muted-foreground tracking-luxe-sm">
            MAISON · TUNIS
          </div>
        </div>
      </div>
    </>
  );
}

function NavLink({ label, path, dark }) {
  return (
    <Link
      to={path}
      className={cn(
        "relative text-[11px] uppercase tracking-luxe-sm font-medium pb-1 group transition-colors",
        dark
          ? "text-background/90 hover:text-background"
          : "text-foreground/80 hover:text-foreground",
      )}
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-500 group-hover:w-full" />
    </Link>
  );
}
