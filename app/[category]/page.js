import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  const categories = [...new Set(products.map(p => p.category))];

  return categories.map(category => ({
    category
  }));
}

export function generateMetadata({ params }) {
  return {
    title: `${params.category} essentials | Best curated picks`,
    description: `Top recommended ${params.category} products with direct Amazon links.`
  };
}

export default function CategoryPage({ params }) {
  const filtered = products.filter(
    p => p.category === params.category
  );

  return (
    <main style={{ padding: 40 }}>
      <h1 style={{ fontSize: 32 }}>
        {params.category.toUpperCase()} Essentials
      </h1>

      <p style={{ color: "#666" }}>
        Curated picks for {params.category}.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20,
          marginTop: 20
        }}
      >
        {filtered.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
    </main>
  );
}
