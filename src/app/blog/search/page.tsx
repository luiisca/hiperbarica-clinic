export default function SearchPage({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  return (
    <main>
      <div>Hello world!</div>
      <div> Hey {JSON.stringify(searchParams)}</div>
    </main>
  );
}
