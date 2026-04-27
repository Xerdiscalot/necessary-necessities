import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: 32, marginBottom: 20 }}>
        Top Everyday Essentials
      </h1>

      <p style={{ marginBottom: 30, color: "#555" }}>
        Hand-picked gear and tools I actually recommend.
      </p>

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
    </main>
  );
}
