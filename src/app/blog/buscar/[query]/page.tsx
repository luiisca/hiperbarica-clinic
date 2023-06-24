export default function SearchPage({
  params,
}: {
  params?: { query?: string };
}) {
  // const searchQuery = params?.searchParams?.query?.toString().toLowerCase();

  return (
    <main>
      <div>hey {JSON.stringify(params?.query)}</div>
      <p>{params?.query}</p>
    </main>
  );
}
