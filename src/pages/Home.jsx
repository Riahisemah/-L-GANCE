import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { queryProducts } from "@/rest/wix-store-catalog";
import { useProductCard } from "@/hooks/useProductCard";
import { Image } from "@/components/ui/image";
import ProductGrid from "@/components/ProductGrid";
import CategoryCard from "@/components/CategoryCard";
import Newsletter from "@/components/Newsletter";
import { ArrowRight } from "lucide-react";

const HERO = "https://media.base44.com/images/public/6aa12956e7f4e63ea7f86cfc/f62f80b13_generated_image.png";
const CAT_IMAGES = {
  Women: "https://media.base44.com/images/public/6aa12956e7f4e63ea7f86cfc/7d05e5bb4_generated_image.png",
  Men: "https://media.base44.com/images/public/6aa12956e7f4e63ea7f86cfc/1a5813d32_generated_image.png",
  Kids: "https://media.base44.com/images/public/6aa12956e7f4e63ea7f86cfc/370b677ab_generated_image.png",
  Shoes: "https://media.base44.com/images/public/6aa12956e7f4e63ea7f86cfc/d81643cc8_generated_image.png",
  Accessories: "https://media.base44.com/images/public/6aa12956e7f4e63ea7f86cfc/7f0485ff1_generated_image.png",
};
const CATS = ["Women", "Men", "Kids", "Shoes", "Accessories"];

function FlashItem({ product }) {
  const { priceDisplay, compareAtDisplay } = useProductCard(product);
  return (
    <div className="flex items-center gap-3 whitespace-nowrap px-8">
      <span className="mm-display text-lg">{product.name}</span>
      <span className="text-sm font-medium text-gold">{priceDisplay}</span>
      {compareAtDisplay && <span className="text-xs text-muted-foreground line-through">{compareAtDisplay}</span>}
      <span className="text-gold">/</span>
    </div>
  );
}

function Section({ eyebrow, title, href, children }) {
  return (
    <section className="mm-container py-16 lg:py-24">
      <div className="mb-8 flex items-end justify-between border-b border-border pb-5">
        <div>
          <p className="mm-eyebrow">{eyebrow}</p>
          <h2 className="mm-display mt-1 text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
        </div>
        {href && (
          <Link to={href} className="mm-eyebrow mm-underline hidden items-center gap-1 sm:inline-flex">
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    queryProducts({ limit: 100 })
      .then((r) => setProducts(r.products || []))
      .catch(() => setProducts([]));
  }, []);

  const list = products || [];
  const best = list.slice(0, 8);
  const newArrivals = list.slice(8, 16);
  const recommended = list.slice(16, 24);
  const promo = list.filter((p) => {
    const was = Number(p?.compareAtPriceRange?.minValue?.amount);
    const now = Number(p?.actualPriceRange?.minValue?.amount);
    return was > 0 && now > 0 && was > now;
  });
  const flash = promo.length ? promo : list.slice(0, 6);

  return (
    <>
      <section className="mm-container pt-6 lg:pt-10">
        <div className="grid gap-3 lg:grid-cols-2 lg:gap-6">
          <div className="relative aspect-[4/5] overflow-hidden bg-muted lg:aspect-[5/6]">
            <Image src={HERO} alt="Mode Market seasonal edit" fittingType="fill" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center px-1 py-10 lg:px-6">
            <p className="mm-eyebrow">Mid-season sale · Up to 50% off</p>
            <h1 className="mm-display mt-4 text-[16vw] leading-[0.88] sm:text-7xl lg:text-8xl">JUSQU'À</h1>
            <h1 className="mm-display text-[20vw] leading-[0.88] text-transparent sm:text-8xl lg:text-9xl [-webkit-text-stroke:1.5px_hsl(var(--foreground))]">
              -50%
            </h1>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A curated edit of seasonal pieces — structured silhouettes, considered materials, now at archive prices.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/shop?category=Promotions" className="bg-foreground px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] text-background transition hover:opacity-90">
                Shop the sale
              </Link>
              <Link to="/shop" className="border border-foreground px-7 py-3.5 text-[11px] uppercase tracking-[0.2em] transition hover:bg-foreground hover:text-background">
                Discover all
              </Link>
            </div>
          </div>
        </div>
      </section>

      {flash.length > 0 && (
        <div className="mt-10 overflow-hidden border-y border-border bg-background py-4">
          <div className="flex w-max animate-marquee">
            {[...flash, ...flash].map((p, i) => (
              <FlashItem key={`${p.id}-${i}`} product={p} />
            ))}
          </div>
        </div>
      )}

      <Section eyebrow="Browse" title="Categories" href="/shop">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
          {CATS.map((name) => (
            <CategoryCard key={name} name={name} href={`/shop?category=${name}`} image={CAT_IMAGES[name]} />
          ))}
        </div>
      </Section>

      {products === null ? (
        <div className="mm-container py-16">
          <ProductGrid loading={true} products={[]} />
        </div>
      ) : list.length === 0 ? (
        <div className="mm-container py-24 text-center">
          <p className="mm-display text-3xl">The archive is being curated.</p>
          <p className="mm-eyebrow mt-3">Check back soon.</p>
        </div>
      ) : (
        <>
          <Section eyebrow="Most wanted" title="Best Sellers" href="/shop">
            <ProductGrid products={best} loading={false} />
          </Section>
          <Section eyebrow="Just landed" title="New Arrivals" href="/shop?category=New%20Arrivals">
            <ProductGrid products={newArrivals} loading={false} />
          </Section>
          {promo.length > 0 && (
            <Section eyebrow="Limited time" title="Promotions" href="/shop?category=Promotions">
              <ProductGrid products={promo} loading={false} />
            </Section>
          )}
          <Section eyebrow="For you" title="Recommended" href="/shop">
            <ProductGrid products={recommended} loading={false} />
          </Section>
        </>
      )}

      <Newsletter />
    </>
  );
}