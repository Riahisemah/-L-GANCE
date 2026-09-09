import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useProductDetail } from "@/hooks/useProductDetail";
import { useVariantOptions } from "@/hooks/useVariantOptions";
import { productGallery } from "@/lib/storeImage";
import { useCart } from "@/context/CartContext";
import { Image } from "@/components/ui/image";
import { WHATSAPP_NUMBER } from "@/lib/categories";
import { Minus, Plus, ShoppingBag, MessageCircle, ChevronLeft } from "lucide-react";

export default function ProductDetail() {
  const { slug } = useParams();
  const d = useProductDetail(slug);
  const { optionGroups } = useVariantOptions(d.options, d.modifiers, d.selectedOptions, d.modifierValues);
  const { checkout, loading: cartLoading } = useCart();
  const [activeImage, setActiveImage] = useState(0);

  if (d.error) {
    return (
      <div className="mm-container flex flex-col items-center py-32 text-center">
        <p className="mm-display text-3xl">{d.error}</p>
        <button onClick={d.retry} className="mm-eyebrow mt-4 underline">Try again</button>
      </div>
    );
  }
  if (d.notFound) {
    return (
      <div className="mm-container flex flex-col items-center py-32 text-center">
        <p className="mm-display text-4xl">Piece not found</p>
        <Link to="/shop" className="mm-eyebrow mt-4 underline">Back to shop</Link>
      </div>
    );
  }
  if (!d.product) {
    return (
      <div className="mm-container py-32">
        <div className="aspect-[3/4] w-full max-w-md animate-pulse bg-muted" />
      </div>
    );
  }

  const images = productGallery(d.product);
  const mainImage = d.focusMediaUrl || images[activeImage]?.url || images[0]?.url;
  const sizeGroup = optionGroups.find((g) => /size|taille/i.test(g.name));
  const selectedSize = sizeGroup?.choices.find((c) => c.selected)?.name;

  const waText = `Hello Mode Market, I am interested in ${d.product.name} - ${d.product.slug}. Is this available in ${selectedSize || "standard size"}?`;
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`;

  const buyNow = async () => {
    if (!d.canAdd || d.adding || cartLoading) return;
    const result = await d.submit();
    if (result === null) return;
    await checkout();
  };

  return (
    <div className="mm-container py-6 lg:py-10">
      <Link to="/shop" className="mm-eyebrow mb-6 inline-flex items-center gap-1.5 transition hover:text-foreground">
        <ChevronLeft className="h-3.5 w-3.5" /> Back
      </Link>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col-reverse gap-4 lg:flex-row">
          {images.length > 1 && (
            <div className="flex gap-3 lg:flex-col">
              {images.map((im, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative h-20 w-16 shrink-0 overflow-hidden bg-muted ${mainImage === im.url && !d.focusMediaUrl ? "ring-2 ring-foreground" : "ring-1 ring-border"}`}
                >
                  <Image src={im.url} alt={im.altText || ""} fittingType="fill" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
          <div className="relative flex-1 overflow-hidden bg-muted">
            <div className="aspect-[3/4]">
              {mainImage && <Image src={mainImage} alt={d.product.name} fittingType="fill" className="h-full w-full object-cover" />}
            </div>
          </div>
        </div>

        <div className="lg:py-2">
          <div className="lg:sticky lg:top-24">
            <p className="mm-eyebrow">{d.product.sku ? `SKU · ${d.product.sku}` : "Mode Market"}</p>
            <h1 className="mm-display mt-2 text-3xl sm:text-4xl lg:text-5xl">{d.product.name}</h1>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-2xl font-medium">{d.price}</span>
              {d.compareAtPrice && <span className="text-base text-muted-foreground line-through">{d.compareAtPrice}</span>}
            </div>

            {d.product.plainDescription && (
              <div
                className="mt-5 max-w-prose text-sm leading-relaxed text-muted-foreground [&_*]:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: d.product.plainDescription }}
              />
            )}

            <div className="mt-7 space-y-5">
              {optionGroups.map((g) => (
                <div key={g.id}>
                  <span className="mm-eyebrow mb-2 block">{g.name}</span>
                  {g.isColor ? (
                    <div className="flex flex-wrap gap-2.5">
                      {g.choices.map((c) => (
                        <button
                          key={c.choiceId}
                          disabled={!c.inStock}
                          onClick={() => d.selectOption(g.id, c.choiceId)}
                          title={c.name}
                          className={`h-9 w-9 rounded-full border ${c.selected ? "ring-2 ring-foreground ring-offset-2" : "border-border"} ${!c.inStock ? "opacity-40" : ""}`}
                          style={{ backgroundColor: c.colorCode || "#ccc" }}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {g.choices.map((c) => (
                        <button
                          key={c.choiceId}
                          disabled={!c.inStock}
                          onClick={() => d.selectOption(g.id, c.choiceId)}
                          className={`min-w-11 border px-4 py-2.5 text-xs uppercase tracking-wider transition ${c.selected ? "border-foreground bg-foreground text-background" : "border-border text-foreground hover:border-foreground"} ${!c.inStock ? "opacity-40 line-through" : ""}`}
                        >
                          {c.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {d.options.length > 0 && !d.variant && (
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Select options to continue</p>
              )}
            </div>

            <div className="mt-7">
              <span className="mm-eyebrow mb-2 block">Quantity</span>
              <div className="inline-flex items-center border border-border">
                <button onClick={() => d.setQuantity(Math.max(1, (Number(d.quantity) || 1) - 1))} className="px-3 py-2.5 transition hover:bg-muted"><Minus className="h-3.5 w-3.5" /></button>
                <span className="w-12 text-center text-sm">{d.quantity || 1}</span>
                <button onClick={() => d.setQuantity((Number(d.quantity) || 1) + 1)} className="px-3 py-2.5 transition hover:bg-muted"><Plus className="h-3.5 w-3.5" /></button>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3">
              <button
                onClick={() => d.submit()}
                disabled={!d.canAdd || d.adding}
                className="flex items-center justify-center gap-2 bg-foreground py-4 text-[12px] uppercase tracking-[0.2em] text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ShoppingBag className="h-4 w-4" /> {d.adding ? "Adding…" : "Add to cart"}
              </button>
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 border border-gold bg-gold py-4 text-[12px] uppercase tracking-[0.2em] text-gold-foreground transition hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Order via WhatsApp
              </a>
              <button
                onClick={buyNow}
                disabled={!d.canAdd || d.adding || cartLoading}
                className="border border-foreground py-4 text-[12px] uppercase tracking-[0.2em] transition hover:bg-foreground hover:text-background disabled:opacity-40"
              >
                {cartLoading ? "Processing…" : "Buy now"}
              </button>
            </div>

            {!d.inStock && d.variant && (
              <p className="mt-3 text-xs uppercase tracking-[0.15em] text-destructive">Out of stock</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}