import { posts } from "@/data/posts";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return posts.map(post => ({
    slug: post.slug
  }));
}

export function generateMetadata({ params }) {
  const post = posts.find(p => p.slug === params.slug);

  return {
    title: post.title,
    description: post.description
  };
}

export default function BlogPost({ params }) {
  const post = posts.find(p => p.slug === params.slug);

  return (
    <main style={{ padding: 40, maxWidth: 800, margin: "0 auto" }}>
      <h1>{post.title}</h1>

      {post.content.map((block, i) => {
        if (block.type === "text") {
          return (
            <p key={i} style={{ color: "#555", lineHeight: 1.6 }}>
              {block.value}
            </p>
          );
        }

        if (block.type === "products") {
          const filtered = products.filter(
            p => p.category === block.category
          );

          return (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 20,
                marginTop: 20
              }}
            >
              {filtered.map((p, idx) => (
                <ProductCard key={idx} {...p} />
              ))}
            </div>
          );
        }

        return null;
      })}
    </main>
  );
}
