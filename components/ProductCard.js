export default function ProductCard({ title, image, productId }) {
  const tag = process.env.NEXT_PUBLIC_AFFILIATE_TAG;

  const link = `https://www.amazon.com/dp/${productId}?tag=${tag}`;

  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: 12,
      padding: 16,
      width: 250
    }}>
      <img
        src={image}
        alt={title}
        style={{ width: "100%", borderRadius: 8 }}
      />

      <h3 style={{ marginTop: 10 }}>{title}</h3>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer sponsored"
        style={{
          display: "inline-block",
          marginTop: 10,
          padding: "8px 12px",
          background: "black",
          color: "white",
          borderRadius: 6,
          textDecoration: "none"
        }}
      >
        View on Amazon
      </a>
    </div>
  );
}
