export default function BlogPost({ params }) {
  return (
    <main style={{ padding: 40 }}>
      <h1>Post: {params.slug}</h1>
    </main>
  );
}
