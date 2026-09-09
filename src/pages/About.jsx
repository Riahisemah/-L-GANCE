import React from "react";
import Reveal from "@/components/Reveal";
import Newsletter from "@/components/Newsletter";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80";
const ATELIER_IMG =
  "https://images.unsplash.com/photo-1551803091-e20673f15770?w=1200&q=80";

const VALUES = [
  {
    num: "01",
    title: "Matières d'Exception",
    text: "Laine, soie, lin et cachemire sélectionnés auprès des plus belles maisons textiles.",
  },
  {
    num: "02",
    title: "Savoir-Faire Tunisien",
    text: "Chaque pièce est confectionnée dans notre atelier à Tunis, par des mains expertes.",
  },
  {
    num: "03",
    title: "Édition Limitée",
    text: "Des séries courtes pour préserver l'unicité et réduire notre empreinte.",
  },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={ABOUT_IMG}
          alt="ÉLÉGANCE"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-background px-6">
          <Reveal>
            <p className="text-[11px] uppercase tracking-luxe text-background/70 mb-5">
              La Maison
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95]">
              L'Art de
              <br />
              l'Élégance
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden bg-secondary">
              <img
                src={ATELIER_IMG}
                alt="Atelier"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <p className="text-[11px] uppercase tracking-luxe text-accent mb-5">
                Notre Histoire
              </p>
              <h2 className="font-heading text-4xl md:text-5xl font-light mb-6 leading-tight">
                Née à Tunis,
                <br />
                conçue pour le monde
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  ÉLÉGANCE est une maison de textile fondée à Tunis, au
                  carrefour de la Méditerranée. Nous puisons dans l'héritage
                  artisanal tunisien pour créer un prêt-à-porter premium qui
                  parle un langage universel.
                </p>
                <p>
                  Chaque pièce est pensée comme une architecture : des lignes
                  épurées, des matières nobles, et une coupe précise qui épouse
                  le corps sans le contraindre. Nous croyons que le luxe
                  véritable réside dans la simplicité et la justesse.
                </p>
                <p>
                  De la sélection du fil à la dernière couture, tout est fait
                  dans notre atelier avec une obsession : la perfection
                  silencieuse.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28 bg-secondary">
        <div className="text-center mb-16">
          <Reveal>
            <p className="text-[11px] uppercase tracking-luxe text-accent mb-4">
              Nos Principes
            </p>
            <h2 className="font-heading text-4xl md:text-6xl font-light">
              La Philosophie de la Maison
            </h2>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {VALUES.map((v, i) => (
            <Reveal key={v.num} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-heading text-5xl font-light text-accent/40 mb-4">
                  {v.num}
                </p>
                <h3 className="font-heading text-2xl font-light mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {v.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
          {[
            { n: "2018", l: "Année de fondation" },
            { n: "12K+", l: "Clients fidèles" },
            { n: "24", l: "Gouvernorats livrés" },
            { n: "100%", l: "Fait en Tunisie" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="font-heading text-4xl md:text-5xl font-light mb-2">
                {s.n}
              </p>
              <p className="text-[11px] uppercase tracking-luxe-sm text-muted-foreground">
                {s.l}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
