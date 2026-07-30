import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
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

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                nombre: "Lavado Básico",
                descripcion:
                  "Limpieza exterior segura con productos de calidad y acabado profesional.",
                precio: "Desde 45 €",
              },
              {
                nombre: "Lavado Premium",
                descripcion:
                  "Limpieza exterior e interior más completa, con mayor nivel de detalle.",
                precio: "Desde 80 €",
              },
              {
                nombre: "Detailing Interior",
                descripcion:
                  "Limpieza profunda del habitáculo con tratamiento específico para cada material.",
                precio: "Desde 120 €",
              },
              {
                nombre: "Detailing Exterior",
                descripcion:
                  "Lavado técnico, limpieza de detalles y acabado protector de la carrocería.",
                precio: "Presupuesto personalizado",
              },
              {
                nombre: "Pulido de carrocería",
                descripcion:
                  "Mejora del brillo y reducción de defectos superficiales en la pintura.",
                precio: "Desde 180 €",
              },
              {
                nombre: "Corrección de pintura",
                descripcion:
                  "Tratamiento avanzado para reducir arañazos, marcas y defectos visibles.",
                precio: "Desde 260 €",
              },
              {
                nombre: "Tratamiento cerámico",
                descripcion:
                  "Protección de larga duración con brillo profundo y efecto hidrofóbico.",
                precio: "Presupuesto personalizado",
              },
              {
                nombre: "PPF",
                descripcion:
                  "Película de protección para preservar la pintura frente a impactos y desgaste.",
                precio: "Presupuesto personalizado",
              },
              {
                nombre: "Restauración de faros",
                descripcion:
                  "Recuperación de transparencia, estética y capacidad lumínica.",
                precio: "Desde 55 €",
              },
              {
                nombre: "Limpieza de motor",
                descripcion:
                  "Limpieza técnica y controlada del compartimento del motor.",
                precio: "Presupuesto personalizado",
              },
              {
                nombre: "Limpieza integral de llantas",
                descripcion:
                  "Limpieza completa por dentro y por fuera, incluyendo zonas de difícil acceso.",
                precio: "Desde 70 €",
              },
              {
                nombre: "Hidratación de cuero",
                descripcion:
                  "Nutrición y protección del cuero para mejorar su tacto y conservación.",
                precio: "Según estado",
              },
              {
                nombre: "Hidratación de plásticos exteriores",
                descripcion:
                  "Recuperación del aspecto y protección de molduras y plásticos exteriores.",
                precio: "Según estado",
              },
            ].map((servicio) => (
              <article
                key={servicio.nombre}
                className="group border border-zinc-800 bg-black/40 p-8 transition duration-300 hover:-translate-y-1 hover:border-amber-500"
              >
                <div className="mb-8 h-px w-12 bg-amber-500 transition-all duration-300 group-hover:w-20" />

                <h3 className="text-xl font-semibold tracking-wide">
                  {servicio.nombre}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {servicio.descripcion}
                </p>

                <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-amber-500">
                  {servicio.precio}
                </p>

                <a
                  href="#reservas"
                  className="mt-8 inline-block text-xs uppercase tracking-[0.25em] text-amber-500"
                >
                  Solicitar presupuesto →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}