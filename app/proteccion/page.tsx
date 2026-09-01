export default function Proteccion() {
  return (
    <main id="inicio" className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">

        <p className="text-sm uppercase tracking-[0.4em] text-amber-500">
          Protección
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Protección de pintura y superficies
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          Soluciones profesionales diseñadas para preservar el acabado del
          vehículo, facilitar su mantenimiento y ofrecer una barrera adicional
          frente a agentes externos, contaminación y desgaste.
        </p>

        {/* ===================================================== */}
        {/* TRATAMIENTO CERÁMICO */}
        {/* ===================================================== */}

        <div className="mt-20">
          <div className="mb-14 h-[320px] overflow-hidden rounded-2xl md:h-[520px]">
            <img
              src="/images/services/tratamiento-ceramico.jpg"
              alt="Tratamiento cerámico"
              className="h-full w-full object-cover"
            />
          </div>

          <p className="text-sm uppercase tracking-[0.4em] text-amber-500">
            Tratamiento cerámico
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Protección cerámica profesional
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Aplicamos recubrimientos cerámicos sobre la pintura para mejorar
            su resistencia frente a suciedad, contaminación y agentes
            ambientales, además de facilitar el mantenimiento y realzar el
            brillo y la profundidad del acabado.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <div className="border border-zinc-800 bg-zinc-950 px-6 py-4">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                Precio
              </p>

              <p className="mt-2 text-lg font-semibold text-amber-500">
                Presupuesto personalizado
              </p>
            </div>

            <div className="border border-zinc-800 bg-zinc-950 px-6 py-4">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                Duración aproximada
              </p>

              <p className="mt-2 text-lg font-semibold">
                Según tratamiento y estado del vehículo
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
              href="/"
              className="border border-zinc-700 px-8 py-4 text-center text-sm font-semibold uppercase tracking-widest text-white transition hover:border-white hover:bg-white hover:text-black"
            >
              Volver al inicio
            </a>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[
              {
                numero: "01",
                titulo: "Inspección de la superficie",
                texto:
                  "Evaluamos el estado de la pintura y determinamos si necesita descontaminación, pulido o corrección previa antes de aplicar el tratamiento.",
              },
              {
                numero: "02",
                titulo: "Lavado y descontaminación",
                texto:
                  "Eliminamos suciedad, contaminación férrica y residuos adheridos para trabajar sobre una superficie completamente limpia.",
              },
              {
                numero: "03",
                titulo: "Preparación final de la pintura",
                texto:
                  "Realizamos el refinado necesario y eliminamos aceites o restos de pulido para favorecer una correcta adherencia del recubrimiento.",
              },
              {
                numero: "04",
                titulo: "Aplicación del recubrimiento",
                texto:
                  "Aplicamos el tratamiento cerámico de forma uniforme y controlada sobre las superficies seleccionadas.",
              },
              {
                numero: "05",
                titulo: "Curado y revisión final",
                texto:
                  "Respetamos el tiempo de curado y revisamos el acabado para comprobar uniformidad, brillo y correcta aplicación.",
              },
            ].map((paso) => (
              <article
                key={paso.numero}
                className="border border-zinc-800 bg-zinc-950 p-8"
              >
                <p className="text-sm font-semibold tracking-[0.3em] text-amber-500">
                  {paso.numero}
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  {paso.titulo}
                </h3>

                <p className="mt-4 leading-7 text-zinc-400">
                  {paso.texto}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* ===================================================== */}
        {/* PROTECCIÓN PPF - NO DISPONIBLE */}
        {/* ===================================================== */}

        <div className="mt-32 border-t border-zinc-800 pt-24">
          <p className="text-sm uppercase tracking-[0.4em] text-amber-500">
            Protección PPF
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Protección PPF
          </h2>

          <div className="mt-8 inline-block border border-amber-500 px-5 py-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-500">
              No disponible por el momento
            </p>
          </div>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Estamos trabajando para incorporar próximamente el servicio de
            protección PPF a nuestros tratamientos profesionales.
          </p>

          <p className="mt-4 max-w-3xl leading-7 text-zinc-500">
            La película PPF está diseñada para ofrecer una barrera física sobre
            la pintura frente a impactos de gravilla, pequeños roces y otras
            agresiones habituales en las zonas más expuestas del vehículo.
          </p>
        </div>

        {/* VOLVER ARRIBA */}
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