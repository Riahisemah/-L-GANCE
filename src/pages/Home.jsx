import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import ProductCard from "@/components/ProductCard";
import Newsletter from "@/components/Newsletter";
import Reveal from "@/components/Reveal";

const HERO_SLIDES = [
  {
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1800&q=80",
    label: "Femme",
    sub: "Manteau Trench",
  },
  {
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1800&q=80",
    label: "Homme",
    sub: "Costume Laine",
  },
  {
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1800&q=80",
    label: "Soirée",
    sub: "Robe Soie",
  },
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
  "https://images.unsplash.com/photo-1551803091-e20673f15770?w=800&q=80",
  "https://images.unsplash.com/photo-1583496661160-fb5886a13d1a?w=800&q=80",
  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
  "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
  "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80",
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 200]);
  const heroTextY = useTransform(scrollY, [0, 800], [0, -120]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  const { products: bestsellers } = useProducts({ is_bestseller: true }, 4);
  const { products: newArrivals } = useProducts({ is_new: true }, 4);

  useEffect(() => {
    const t = setInterval(
      () => setSlide((s) => (s + 1) % HERO_SLIDES.length),
      5500,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden bg-foreground">
        {HERO_SLIDES.map((s, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: slide === i ? 1 : 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={s.image}
              alt={s.sub}
              style={{ y: slide === i ? heroY : 0 }}
              className="w-full h-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-transparent to-foreground/50" />
          </motion.div>
        ))}

        {/* Hero content */}
        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative h-full flex flex-col items-center justify-center text-center px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[11px] uppercase tracking-luxe text-background/70 mb-6"
          >
            {HERO_SLIDES[slide].label} — {HERO_SLIDES[slide].sub}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-background text-6xl md:text-8xl lg:text-9xl font-light leading-[0.95] tracking-tight"
          >
            Nouvelle
            <br />
            Collection 2026
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-10"
          >
            <Link
              to="/new"
              className="group inline-flex items-center gap-3 border border-background/40 text-background px-10 py-4 text-[11px] uppercase tracking-luxe-sm hover:bg-background hover:text-foreground transition-all duration-500"
            >
              Découvrir la collection
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Slide counter */}
        <div className="absolute bottom-8 left-6 md:left-12 lg:left-16 text-background">
          <span className="font-heading text-2xl font-light">
            {String(slide + 1).padStart(2, "0")}
          </span>
          <span className="text-background/50 text-sm ml-2">
            / {String(HERO_SLIDES.length).padStart(2, "0")}
          </span>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 right-6 md:right-12 lg:right-16 text-background/60 text-[10px] uppercase tracking-luxe-sm"
        >
          Défiler
        </motion.div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="text-center mb-16">
          <Reveal>
            <p className="text-[11px] uppercase tracking-luxe text-accent mb-4">
              L'Atelier
            </p>
            <h2 className="font-heading text-4xl md:text-6xl font-light">
              Nos Univers
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <CategoryBlock
            to="/women"
            image={HERO_SLIDES[0].image}
            title="Femme"
            subtitle="L'élégance au quotidien"
          />
          <CategoryBlock
            to="/men"
            image={HERO_SLIDES[1].image}
            title="Homme"
            subtitle="Le raffinement moderne"
          />
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28 bg-secondary">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <Reveal>
            <p className="text-[11px] uppercase tracking-luxe text-accent mb-4">
              Les plus convoités
            </p>
            <h2 className="font-heading text-4xl md:text-6xl font-light">
              Best-Sellers
            </h2>
          </Reveal>
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-luxe-sm hover:text-accent transition-colors"
          >
            Tout voir{" "}
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10">
          {bestsellers.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* PROMOTIONAL BANNER */}
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <img
          src={HERO_SLIDES[2].image}
          alt="Collection Soirée"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-background px-6">
          <Reveal>
            <p className="text-[11px] uppercase tracking-luxe text-background/70 mb-5">
              Édition Limitée
            </p>
            <h2 className="font-heading text-5xl md:text-7xl font-light mb-8 max-w-3xl leading-tight">
              L'Art de la Soie
            </h2>
            <Link
              to="/women"
              className="border border-background/50 text-background px-10 py-4 text-[11px] uppercase tracking-luxe-sm hover:bg-background hover:text-foreground transition-all duration-500"
            >
              Explorer la collection
            </Link>
          </Reveal>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <Reveal>
            <p className="text-[11px] uppercase tracking-luxe text-accent mb-4">
              Fraîchement arrivés
            </p>
            <h2 className="font-heading text-4xl md:text-6xl font-light">
              Nouveautés
            </h2>
          </Reveal>
          <Link
            to="/new"
            className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-luxe-sm hover:text-accent transition-colors"
          >
            Tout voir{" "}
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-10">
          {newArrivals.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* INSTAGRAM GALLERY */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28 bg-secondary">
        <div className="text-center mb-12">
          <Reveal>
            <p className="text-[11px] uppercase tracking-luxe text-accent mb-4">
              @elegance.tn
            </p>
            <h2 className="font-heading text-4xl md:text-6xl font-light">
              Suivez la Maison
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (i % 6) * 0.08 }}
              className="aspect-square overflow-hidden bg-background group cursor-pointer"
            >
              <img
                src={img}
                alt={`Galerie ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <Newsletter />
    </div>
  );
}

function CategoryBlock({ to, image, title, subtitle }) {
  return (
    <Reveal>
      <Link
        to={to}
        className="group relative block overflow-hidden aspect-[4/5] md:aspect-[3/4]"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
        <div className="absolute bottom-0 left-0 p-8 md:p-10">
          <p className="text-[11px] uppercase tracking-luxe text-background/70 mb-2">
            {subtitle}
          </p>
          <h3 className="font-heading text-background text-4xl md:text-5xl font-light mb-4">
            {title}
          </h3>
          <span className="inline-flex items-center gap-2 text-background text-[11px] uppercase tracking-luxe-sm border-b border-background/40 pb-1 group-hover:border-accent group-hover:text-accent transition-colors">
            Découvrir <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
