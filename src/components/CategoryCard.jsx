import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";

export default function CategoryCard({ name, href, image, className }) {
  return (
    <Link
      to={href}
      className={`group relative block overflow-hidden bg-muted ${className || ""}`}
    >
      <div className="aspect-[3/4] sm:aspect-[4/5]">
        {image && (
          <Image
            src={image}
            alt={name}
            fittingType="fill"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
          />
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/45 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 p-5">
        <h3 className="mm-display text-2xl text-background sm:text-3xl">
          {name}
        </h3>
        <span className="mm-eyebrow text-background/80">Shop now →</span>
      </div>
    </Link>
  );
}
