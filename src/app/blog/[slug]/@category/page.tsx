export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Category</h1>
      <p>{params.slug}</p>
    </div>
  );
}
