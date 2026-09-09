import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import CartButton from "@/components/CartButton";
import { CATEGORIES } from "@/lib/categories";

export default function Header() {
  const [loomOpen, setLoomOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const submitSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    setLoomOpen(false);
    navigate(q ? `/shop?search=${encodeURIComponent(q)}` : "/shop");
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="mm-container flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLoomOpen(true)}
              className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-foreground transition hover:opacity-60"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
              <span className="hidden sm:inline">Menu</span>
            </button>
            <Link
              to="/"
              className="mm-display text-lg tracking-[0.25em] sm:text-xl"
            >
              MODE MARKET
            </Link>
          </div>

          <nav className="hidden items-center gap-7 lg:flex">
            {CATEGORIES.map((c) => (
              <Link
                key={c.name}
                to={c.href}
                className={`mm-eyebrow mm-underline transition hover:text-foreground ${
                  c.gold ? "text-gold" : "text-muted-foreground"
                }`}
              >
                {c.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setLoomOpen(true)}
              className="flex items-center gap-2 px-2 py-2 transition hover:opacity-60"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
              <span className="hidden text-[11px] uppercase tracking-[0.2em] md:inline">
                Search
              </span>
            </button>
            <CartButton />
          </div>
        </div>
      </header>

      <AnimatePresence>
        {loomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-background/95 backdrop-blur-2xl"
          >
            <div className="mm-container flex h-16 items-center justify-between">
              <span className="mm-display text-lg tracking-[0.25em]">
                MODE MARKET
              </span>
              <button
                onClick={() => setLoomOpen(false)}
                className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] transition hover:opacity-60"
                aria-label="Close menu"
              >
                <span>Close</span>
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mm-container flex flex-col gap-12 pt-8 lg:flex-row lg:items-start lg:justify-between lg:pt-20">
              <nav className="flex flex-col gap-2 lg:gap-3">
                {CATEGORIES.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                  >
                    <Link
                      to={c.href}
                      onClick={() => setLoomOpen(false)}
                      className={`mm-display text-4xl leading-[1.05] transition hover:italic sm:text-6xl lg:text-7xl ${
                        c.gold ? "text-gold" : "text-foreground"
                      }`}
                    >
                      {c.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="lg:max-w-sm lg:pt-3">
                <form
                  onSubmit={submitSearch}
                  className="flex items-center gap-3 border-b border-foreground pb-3"
                >
                  <Search className="h-5 w-5" />
                  <input
                    autoFocus
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search the archive…"
                    className="w-full bg-transparent text-base outline-none placeholder:text-muted-foreground"
                  />
                </form>
                <p className="mm-eyebrow mt-4">
                  Search women, men, kids, shoes & accessories
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
