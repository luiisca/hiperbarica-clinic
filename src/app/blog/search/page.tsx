export default function SearchPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | undefined };
}) {
  return <div>{JSON.stringify(searchParams)}</div>;
}
