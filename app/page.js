import { products } from "@/data/products";

export const metadata = {
  title: "Best Everyday Essentials | Curated Product Picks",
  description:
    "Discover curated Amazon affiliate product recommendations for travel, tech, and home essentials."
};

export default function Home() {
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <main style={{ padding: 40 }}>
      <h1>Best Everyday Essentials</h1>

      <p style={{ color: "#666" }}>
        Explore curated product categories.
      </p>

      <ul>
        {categories.map((cat, i) => (
          <li key={i}>
            <a href={`/${cat}`}>{cat.toUpperCase()}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
