export default function LimpiezaDetailing() {
  const servicios = [
    {
      nombre: "Lavado Básico",
      descripcion:
        "Lavado exterior seguro con prelavado, lavado manual, aclarado y secado con microfibra.",
      precio: "Desde 45 €",
      imagen: "/images/services/lavado-basico.jpg",
      enlace: "/lavado-basico",
    },
    {
      nombre: "Lavado Premium",
      descripcion:
        "Servicio más completo con mayor nivel de detalle, limpieza de zonas difíciles y acabado protector.",
      precio: "Desde 80 €",
      imagen: "/images/services/lavado-premium.jpg",
      enlace: "/lavado-premium",
    },
    {
      nombre: "Detailing Interior",
      descripcion:
        "Limpieza profunda del habitáculo con tratamiento específico para cada material.",
      precio: "Desde 120 €",
      imagen: "/images/services/lavado-basico.jpg",
      enlace: "/detailing-interior",
    },
    {
      nombre: "Limpieza de motor",
      descripcion:
        "Limpieza técnica y controlada del compartimento del motor.",
      precio: "Presupuesto personalizado",
      imagen: "/images/services/lavado-basico.jpg",
      enlace: "/limpieza-motor",
    },
    {
      nombre: "Limpieza de tapicería",
      descripcion:
        "Limpieza profunda de asientos y superficies textiles según su estado y material.",
      precio: "Según estado",
      imagen: "/images/services/lavado-basico.jpg",
      enlace: "/limpieza-tapiceria",
    },
  ];

  return (
    <main id="inicio" className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.4em] text-amber-500">
          Limpieza y Detailing
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Nuestros Servicios
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          Descubre nuestros servicios de limpieza y detailing, diseñados para
          cuidar cada superficie del vehículo y adaptar el tratamiento a sus
          necesidades reales.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio) => (
            <article
              key={servicio.nombre}
              className="group overflow-hidden border border-zinc-800 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-amber-500"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={servicio.imagen}
                  alt={servicio.nombre}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <div className="mb-6 h-px w-12 bg-amber-500 transition-all duration-300 group-hover:w-20" />

                <h2 className="text-2xl font-semibold tracking-wide">
                  {servicio.nombre}
                </h2>

                <p className="mt-4 leading-7 text-zinc-400">
                  {servicio.descripcion}
                </p>

                <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-amber-500">
                  {servicio.precio}
                </p>

                <a
                  href={servicio.enlace}
                  className="mt-8 inline-block text-xs uppercase tracking-[0.25em] text-amber-500"
                >
                  Ver servicio →
                </a>
              </div>
            </article>
          ))}
        </div>
                 <div className="mt-10">
          <a
            href="/"
            className="border border-zinc-700 px-8 py-4 text-center text-sm font-semibold uppercase tracking-widest text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Volver al inicio
          </a>
        </div>

        <a
          href="#inicio"
          aria-label="Volver arriba"
          className="fixed bottom-8 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-xl font-bold text-black shadow-lg transition hover:scale-110 hover:bg-amber-400"
        >
          ↑
        </a>

      </section>
    </main>
  );
}