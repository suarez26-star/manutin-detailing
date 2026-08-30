export default function LimpiezaTapiceria() {
  return (
    <main id="inicio" className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 h-[320px] overflow-hidden rounded-2xl md:h-[520px]">
          <img
            src="/images/services/limpieza-tapiceria.jpg"
            alt="Limpieza de tapicería"
            className="h-full w-full object-cover"
          />
        </div>

        <p className="text-sm uppercase tracking-[0.4em] text-amber-500">
          Limpieza de tapicería
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Limpieza de tapicería
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          Limpieza profunda y tratamiento específico para cada tipo de material,
          trabajando tejidos, cuero, Alcantara, polipiel y moquetas con técnicas
          adaptadas a su estado y composición.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <div className="border border-zinc-800 bg-zinc-950 px-6 py-4">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Precio
            </p>

            <p className="mt-2 text-lg font-semibold text-amber-500">
              Según estado
            </p>
          </div>

          <div className="border border-zinc-800 bg-zinc-950 px-6 py-4">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Duración aproximada
            </p>

            <p className="mt-2 text-lg font-semibold">
              Según el estado y el material
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contacto"
            className="border border-amber-500 bg-amber-500 px-8 py-4 text-center text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-transparent hover:text-amber-500"
          >
            Solicitar presupuesto
          </a>

          <a
            href="/limpieza-detailing"
            className="border border-zinc-700 px-8 py-4 text-center text-sm font-semibold uppercase tracking-widest text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Volver a servicios
          </a>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {[
            {
              numero: "01",
              titulo: "Aspirado profundo",
              texto:
                "Eliminamos polvo, migas, pelos y residuos acumulados en asientos, alfombrillas, moquetas y zonas de difícil acceso.",
            },
            {
              numero: "02",
              titulo: "Limpieza específica según material",
              texto:
                "Seleccionamos productos y técnicas adecuados para cada superficie: tejido, cuero, Alcantara, polipiel y moqueta.",
            },
            {
              numero: "03",
              titulo: "Cepillado y agitación",
              texto:
                "Trabajamos las fibras y superficies de forma manual o mecánica para desprender la suciedad incrustada y facilitar su extracción.",
            },
            {
              numero: "04",
              titulo: "Inyección-extracción profesional",
              texto:
                "En los tejidos compatibles, utilizamos un sistema de inyección-extracción para retirar suciedad, manchas y residuos acumulados en profundidad.",
            },
            {
              numero: "05",
              titulo: "Secado y revisión",
              texto:
                "Favorecemos un secado adecuado y revisamos cada zona tratada para conseguir un acabado uniforme y limpio.",
            },
            {
              numero: "06",
              titulo: "Acondicionamiento y protección",
              texto:
                "Finalizamos aplicando el tratamiento adecuado según el material, incluyendo acondicionamiento del cuero y productos específicos para Alcantara, polipiel y otras superficies cuando corresponda.",
            },
          ].map((paso) => (
            <article
              key={paso.numero}
              className="border border-zinc-800 bg-zinc-950 p-8"
            >
              <p className="text-sm font-semibold tracking-[0.3em] text-amber-500">
                {paso.numero}
              </p>

              <h2 className="mt-4 text-2xl font-semibold">
                {paso.titulo}
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                {paso.texto}
              </p>
            </article>
          ))}
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