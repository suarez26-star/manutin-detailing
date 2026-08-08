import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main id="inicio" className="min-h-screen bg-black text-white">
      <Navbar />

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

      <section
        id="servicios"
        className="bg-zinc-950 px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.4em] text-amber-500">
              Nuestros servicios
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-wide md:text-6xl">
              Cuidado profesional para cada detalle
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              No trabajamos con soluciones estándar. Cada vehículo recibe un
              diagnóstico personalizado para determinar el tratamiento más
              adecuado. Los precios mostrados son orientativos; el presupuesto
              final se establece tras valorar el estado, las necesidades y el
              nivel de trabajo que requiere cada automóvil, garantizando un
              servicio adaptado hasta el más mínimo detalle.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[
              {
                nombre: "Limpieza y Detailing",
                descripcion:
                  "Lavado básico, lavado premium, detailing interior, detailing exterior, limpieza de motor y limpieza de tapicería.",
                enlace: "/limpieza-detailing",
              },
              {
                nombre: "Corrección y Restauración",
                descripcion:
                  "Pulido de carrocería, corrección de pintura y restauración profesional de faros.",
                enlace: "/servicios/correccion-restauracion",
              },
              {
                nombre: "Protección",
                descripcion:
                  "Tratamientos cerámicos y protección PPF para preservar la pintura y mantener el acabado durante más tiempo.",
                enlace: "/servicios/proteccion",
              },
              {
                nombre: "Acabados y Conservación",
                descripcion:
                  "Limpieza integral de llantas, hidratación de cuero e hidratación de plásticos exteriores.",
                enlace: "/servicios/acabados-conservacion",
              },
            ].map((categoria) => (
              <article
                key={categoria.nombre}
                className="group border border-zinc-800 bg-black/40 p-8 transition duration-300 hover:-translate-y-1 hover:border-amber-500"
              >
                <div className="mb-8 h-px w-12 bg-amber-500 transition-all duration-300 group-hover:w-20" />

                <h3 className="text-2xl font-semibold tracking-wide">
                  {categoria.nombre}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {categoria.descripcion}
                </p>

                <a
                  href={categoria.enlace}
                  className="mt-8 inline-block text-xs uppercase tracking-[0.25em] text-amber-500"
                >
                   Ver servicios →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <a
        href="#inicio"
        aria-label="Volver arriba"
        className="fixed bottom-8 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-xl font-bold text-black shadow-lg transition hover:scale-110 hover:bg-amber-400"
      >
        ↑
      </a>
    </main>
  );
}