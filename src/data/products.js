// Local product catalog — replaces the Base44 "Product" entity.
// Swap the image URLs / copy for your own catalog whenever you like.

export const PRODUCTS = [
  {
    id: "w-trench-camel",
    name: "Trench Camel Épuré",
    category: "women",
    subcategory: "Manteaux",
    price: 890,
    discount_price: null,
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1200&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=1200&q=80",
    ],
    description:
      "Trench en laine mélangée, coupe cintrée et ceinture nouée. Une pièce intemporelle pensée pour les mi-saisons.",
    material: "70% laine, 30% polyester",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Camel", "Noir"],
    is_new: true,
    is_bestseller: true,
    created_date: "2026-02-10",
  },
  {
    id: "w-robe-soie",
    name: "Robe Soie Émeraude",
    category: "women",
    subcategory: "Robes",
    price: 650,
    discount_price: 520,
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&q=80",
    ],
    description:
      "Robe fluide en soie naturelle, drapé asymétrique et fermeture dos invisible. Pour les soirées mémorables.",
    material: "100% soie",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Émeraude", "Noir", "Bordeaux"],
    is_new: false,
    is_bestseller: true,
    created_date: "2025-11-02",
  },
  {
    id: "w-blazer-lin",
    name: "Blazer Lin Ivoire",
    category: "women",
    subcategory: "Vestes",
    price: 480,
    discount_price: null,
    images: [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=1200&q=80",
      "https://images.unsplash.com/photo-1551803091-e20673f15770?w=1200&q=80",
    ],
    description:
      "Blazer déstructuré en lin léger, épaules marquées et boutonnage simple. L'allié du vestiaire de bureau.",
    material: "100% lin",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Ivoire", "Sable"],
    is_new: true,
    is_bestseller: false,
    created_date: "2026-01-18",
  },
  {
    id: "w-pull-cachemire",
    name: "Pull Cachemire Sable",
    category: "women",
    subcategory: "Maille",
    price: 390,
    discount_price: null,
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1200&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&q=80",
    ],
    description:
      "Pull col rond en cachemire pur, maille fine et toucher extra-doux. Une essentielle pour l'hiver.",
    material: "100% cachemire",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Sable", "Gris chiné", "Noir"],
    is_new: false,
    is_bestseller: true,
    created_date: "2025-10-05",
  },
  {
    id: "w-jupe-plissee",
    name: "Jupe Plissée Champagne",
    category: "women",
    subcategory: "Jupes",
    price: 320,
    discount_price: 260,
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a13d1a?w=1200&q=80",
      "https://images.unsplash.com/photo-1583496661268-2f8f7e9d8fc5?w=1200&q=80",
    ],
    description:
      "Jupe plissée midi en satin, taille haute élastiquée. Mouvement et fluidité à chaque pas.",
    material: "95% polyester, 5% élasthanne",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Champagne", "Noir"],
    is_new: true,
    is_bestseller: false,
    created_date: "2026-02-01",
  },
  {
    id: "w-chemise-lin",
    name: "Chemise Lin Blanche",
    category: "women",
    subcategory: "Chemises",
    price: 280,
    discount_price: null,
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=1200&q=80",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=1200&q=80",
    ],
    description:
      "Chemise ample en lin lavé, col officier et manches trois-quarts. Fraîcheur et élégance décontractée.",
    material: "100% lin",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blanc", "Bleu ciel"],
    is_new: false,
    is_bestseller: false,
    created_date: "2025-09-14",
  },
  {
    id: "m-costume-laine",
    name: "Costume Laine Anthracite",
    category: "men",
    subcategory: "Costumes",
    price: 1250,
    discount_price: null,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&q=80",
      "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=1200&q=80",
    ],
    description:
      "Costume deux pièces en laine vierge, coupe ajustée et doublure demi-toile. Le vestiaire tailleur par excellence.",
    material: "100% laine vierge",
    sizes: ["46", "48", "50", "52", "54"],
    colors: ["Anthracite", "Marine"],
    is_new: true,
    is_bestseller: true,
    created_date: "2026-01-25",
  },
  {
    id: "m-chemise-oxford",
    name: "Chemise Oxford Bleu Ciel",
    category: "men",
    subcategory: "Chemises",
    price: 220,
    discount_price: 180,
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=1200&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=1200&q=80",
    ],
    description:
      "Chemise en coton Oxford, col boutonné et coupe ajustée. Un classique qui traverse les saisons.",
    material: "100% coton",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Bleu ciel", "Blanc"],
    is_new: false,
    is_bestseller: true,
    created_date: "2025-08-20",
  },
  {
    id: "m-manteau-laine",
    name: "Manteau Laine Marine",
    category: "men",
    subcategory: "Manteaux",
    price: 980,
    discount_price: null,
    images: [
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?w=1200&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80",
    ],
    description:
      "Manteau long en laine et cachemire, col croisé et coupe droite. Chaleur et prestance pour l'hiver.",
    material: "80% laine, 20% cachemire",
    sizes: ["48", "50", "52", "54"],
    colors: ["Marine", "Gris"],
    is_new: true,
    is_bestseller: false,
    created_date: "2026-01-30",
  },
  {
    id: "m-pull-col-v",
    name: "Pull Col V Merinos",
    category: "men",
    subcategory: "Maille",
    price: 290,
    discount_price: null,
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=80",
      "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=1200&q=80",
    ],
    description:
      "Pull col V en laine mérinos extra-fine, léger et thermorégulateur. Se porte seul ou sous un blazer.",
    material: "100% laine mérinos",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Bordeaux", "Gris chiné", "Noir"],
    is_new: false,
    is_bestseller: true,
    created_date: "2025-10-28",
  },
  {
    id: "m-pantalon-laine",
    name: "Pantalon Laine Chino",
    category: "men",
    subcategory: "Pantalons",
    price: 260,
    discount_price: 210,
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=1200&q=80",
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=1200&q=80",
    ],
    description:
      "Pantalon chino en flanelle de laine, coupe droite et pinces légères. Le compagnon idéal du costume décontracté.",
    material: "95% laine, 5% élasthanne",
    sizes: ["44", "46", "48", "50", "52"],
    colors: ["Beige", "Anthracite"],
    is_new: false,
    is_bestseller: false,
    created_date: "2025-09-30",
  },
  {
    id: "m-veste-cuir",
    name: "Veste Cuir Bomber",
    category: "men",
    subcategory: "Vestes",
    price: 1100,
    discount_price: null,
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=1200&q=80",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=1200&q=80",
    ],
    description:
      "Veste bomber en cuir d'agneau, finitions côtelées et doublure satin. Une pièce forte, entre tradition et modernité.",
    material: "100% cuir d'agneau",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Noir", "Cognac"],
    is_new: true,
    is_bestseller: true,
    created_date: "2026-02-05",
  },
];

function matchesFilter(product, filter) {
  if (filter.category && product.category !== filter.category) return false;
  if (filter.is_new && !product.is_new) return false;
  if (filter.is_bestseller && !product.is_bestseller) return false;
  if (filter.id && product.id !== filter.id) return false;
  return true;
}

export function getProducts(filter = {}, limit = 100) {
  return PRODUCTS.filter((p) => matchesFilter(p, filter)).slice(0, limit);
}

export function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}
