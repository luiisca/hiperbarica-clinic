export default function PostPage({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Post</h1>
      <p>{params.slug}</p>
    </div>
  );
}
