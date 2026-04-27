import ProductCard from "@/components/ProductCard";

export const metadata = {
  title: "Top Everyday Essentials | Honest Product Picks",
  description:
    "Discover curated everyday essentials including tech, travel gear, and home tools. Simple, useful recommendations with direct Amazon links."
};

export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial, sans-serif" }}>
      
      {/* HERO SECTION */}
      <header style={{ marginBottom: 30 }}>
        <h1 style={{ fontSize: 36, marginBottom: 10 }}>
          Top Everyday Essentials
        </h1>

        <p style={{ color: "#555", fontSize: 18 }}>
          Curated gear for daily life, travel, and productivity. Simple picks. No clutter.
        </p>
      </header>

      {/* SEO CONTENT BLOCK */}
      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24 }}>Why These Products?</h2>
        <p style={{ color: "#666", lineHeight: 1.6 }}>
          These recommendations are selected for usefulness, durability, and real-world practicality.
          Each product links directly to Amazon for easy access.
        </p>
      </section>

      {/* PRODUCT GRID */}
      <section>
        <h2 style={{ fontSize: 24, marginBottom: 20 }}>
          Recommended Products
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20
          }}
        >
          <ProductCard
            title="Minimal Everyday Backpack"
            image="https://via.placeholder.com/300"
            productId="B08XYZ123"
          />

          <ProductCard
            title="Compact Travel Water Bottle"
            image="https://via.placeholder.com/300"
            productId="B08ABC456"
          />

          <ProductCard
            title="Portable Phone Charger"
            image="https://via.placeholder.com/300"
            productId="B08DEF789"
          />
        </div>
      </section>

      {/* FOOTER SEO TEXT */}
      <footer style={{ marginTop: 60, color: "#888", fontSize: 14 }}>
        <p>
          Affiliate disclosure: This site contains Amazon affiliate links.
        </p>
      </footer>
    </main>
  );
}
