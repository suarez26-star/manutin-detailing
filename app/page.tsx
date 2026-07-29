export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center px-6"
        style={{
          backgroundImage: "url('/hero-manutin.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

        <div className="relative z-10 max-w-4xl text-center">
          <p className="mb-6 text-sm uppercase tracking-[0.45em] text-amber-500">
            Car Wash & Auto Detailing Specialist
          </p>

          <h1 className="text-5xl font-bold tracking-[0.16em] md:text-8xl">
            MANUTIN
          </h1>

          <p className="mt-4 text-xl uppercase tracking-[0.28em] text-zinc-200 md:text-2xl">
            Detailing Studio
          </p>

          <div className="mx-auto mt-7 h-px w-24 bg-amber-500" />

          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-zinc-300 md:text-xl md:leading-8">
            Detailing, protección y restauración de vehículos con acabados de
            máxima precisión.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#reservas"
              className="min-w-52 border border-amber-500 bg-amber-500 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-transparent hover:text-amber-500"
            >
              Reservar cita
            </a>

            <a
              href="#servicios"
              className="min-w-52 border border-zinc-400 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">
            Descubre la experiencia
          </p>
          <div className="mx-auto mt-3 h-10 w-px bg-amber-500" />
        </div>
      </section>
    </main>
  );
}