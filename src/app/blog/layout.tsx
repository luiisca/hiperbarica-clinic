export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto w-full max-w-screen-xl px-8">
      {children}
    </section>
  );
}
