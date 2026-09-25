import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1280px] flex-1 px-4 pt-8 sm:px-6 sm:pt-12">
      <Hero />

      {/* Library section (Part 6) */}
      <section id="library" className="scroll-mt-24 pt-16">
        <h2 className="font-display text-3xl font-bold uppercase">The Library</h2>
        <p className="mt-2 text-muted">Twelve lifts covering every major muscle group.</p>
        <div className="h-[600px]" />
      </section>
    </main>
  );
}
