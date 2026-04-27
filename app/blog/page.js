import { posts } from "@/data/posts";

export default function BlogIndex() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Affiliate Blog</h1>

      <p style={{ color: "#666" }}>
        Curated guides and product recommendations.
      </p>

      <ul>
        {posts.map((post, i) => (
          <li key={i} style={{ marginBottom: 10 }}>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
