export default function CorreccionPinturaPulido() {
  return (
    <main id="inicio" className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">

        {/* CABECERA GENERAL */}
        <p className="text-sm uppercase tracking-[0.4em] text-amber-500">
          Corrección y Restauración
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Corrección y Restauración
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          Tratamientos profesionales orientados a recuperar el acabado,
          corregir defectos y restaurar elementos deteriorados del vehículo,
          adaptando cada proceso a su estado real.
        </p>

        {/* ===================================================== */}
        {/* CORRECCIÓN DE PINTURA Y PULIDO */}
        {/* ===================================================== */}

        <div className="mt-16">
          <div className="mb-14 h-[320px] overflow-hidden rounded-2xl md:h-[520px]">
            <img
              src="/images/services/correccion-pintura-pulido.jpg"
              alt="Corrección de pintura y pulido"
              className="h-full w-full object-cover"
            />
          </div>

          <p className="text-sm uppercase tracking-[0.4em] text-amber-500">
            Corrección de pintura y pulido
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Corrección de pintura y pulido
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Tratamiento profesional orientado a reducir y corregir defectos de
            la pintura, recuperar claridad y mejorar el acabado mediante un
            proceso adaptado al estado real de cada vehículo.
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
                Según el estado de la pintura
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
                titulo: "Inspección y medición de pintura",
                texto:
                  "Evaluamos el estado de la laca, localizamos defectos y comprobamos espesores cuando es necesario para definir el nivel de corrección adecuado.",
              },
              {
                numero: "02",
                titulo: "Lavado y descontaminación completa",
                texto:
                  "Eliminamos suciedad superficial, contaminación férrica, residuos adheridos y otras partículas que puedan interferir en el pulido.",
              },
              {
                numero: "03",
                titulo: "Corrección por etapas",
                texto:
                  "Trabajamos la pintura con combinaciones específicas de compuestos y pads para reducir swirls, marcas, oxidación y otros defectos visibles.",
              },
              {
                numero: "04",
                titulo: "Pulido de acabado",
                texto:
                  "Refinamos la superficie para mejorar profundidad, claridad y nivel de brillo, buscando un acabado uniforme y limpio.",
              },
              {
                numero: "05",
                titulo: "Limpieza final y protección ligera",
                texto:
                  "Retiramos residuos del proceso y dejamos la superficie preparada para recibir posteriormente un sellante, cera o tratamiento cerámico.",
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
        {/* RESTAURACIÓN DE FAROS */}
        {/* ===================================================== */}

        <div className="mt-32 border-t border-zinc-800 pt-24">

          <div className="mb-14 h-[320px] overflow-hidden rounded-2xl md:h-[520px]">
            <img
              src="/images/services/restauracion-faros.jpg"
              alt="Restauración profesional de faros"
              className="h-full w-full object-cover"
            />
          </div>

          <p className="text-sm uppercase tracking-[0.4em] text-amber-500">
            Restauración profesional de faros
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Recuperamos claridad y acabado
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Restauramos ópticas deterioradas por el paso del tiempo, la
            exposición solar y la oxidación, eliminando el aspecto amarillento
            y opaco para recuperar transparencia, uniformidad y mejorar la
            apariencia del conjunto.
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
                Según el estado de los faros
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="#contacto"
              className="inline-block border border-amber-500 bg-amber-500 px-8 py-4 text-center text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-transparent hover:text-amber-500"
            >
              Solicitar presupuesto
            </a>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[
              {
                numero: "01",
                titulo: "Inspección del estado del faro",
                texto:
                  "Evaluamos el nivel de oxidación, pérdida de transparencia, amarilleamiento y deterioro de la superficie para determinar el proceso necesario.",
              },
              {
                numero: "02",
                titulo: "Limpieza y protección de zonas próximas",
                texto:
                  "Limpiamos la óptica y protegemos cuidadosamente las superficies adyacentes antes de comenzar el proceso de restauración.",
              },
              {
                numero: "03",
                titulo: "Lijado progresivo",
                texto:
                  "Trabajamos la superficie mediante diferentes etapas de lijado para eliminar la capa deteriorada y recuperar una base uniforme.",
              },
              {
                numero: "04",
                titulo: "Pulido y refinado",
                texto:
                  "Pulimos y refinamos la óptica para recuperar transparencia, claridad y un acabado uniforme.",
              },
              {
                numero: "05",
                titulo: "Acabado y protección final",
                texto:
                  "Realizamos la limpieza final y aplicamos el acabado protector adecuado para ayudar a conservar el resultado conseguido.",
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

        {/* BOTÓN VOLVER ARRIBA */}
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