export async function generateStaticParams() {
  return ["hey", "test"].map((post) => ({
    slug: post,
  }));
}

export default function Test({ params }: { params: { slug: string } }) {
  return <div>Hello {params.slug}</div>;
}
