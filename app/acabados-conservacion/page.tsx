export default function AcabadosConservacion() {
  return (
    <main id="inicio" className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">

        <p className="text-sm uppercase tracking-[0.4em] text-amber-500">
          Acabados y Conservación
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Acabados y Conservación
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          Tratamientos orientados a recuperar, conservar y proteger elementos
          exteriores del vehículo, mejorando su aspecto y prolongando el buen
          estado de sus acabados.
        </p>

        {/* ===================================================== */}
        {/* LIMPIEZA INTEGRAL DE LLANTAS Y PINZAS DE FRENO */}
        {/* ===================================================== */}

        <div className="mt-20">
          <div className="mb-14 h-[320px] overflow-hidden rounded-2xl md:h-[520px]">
            <img
              src="/images/services/limpieza-llantas-pinzas.jpg"
              alt="Limpieza integral de llantas y pinzas de freno"
              className="h-full w-full object-cover"
            />
          </div>

          <p className="text-sm uppercase tracking-[0.4em] text-amber-500">
            Limpieza integral de llantas y pinzas de freno
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Limpieza profunda y detallada
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Realizamos una limpieza profunda de llantas y pinzas de freno,
            eliminando polvo de frenado, contaminación férrica, suciedad
            incrustada y residuos acumulados en las zonas más difíciles de
            alcanzar.
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
                Según estado y tipo de llanta
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
              Volver a servicios
            </a>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[
              {
                numero: "01",
                titulo: "Inspección inicial",
                texto:
                  "Revisamos el estado de las llantas y pinzas de freno, el nivel de contaminación, polvo de frenado y suciedad acumulada.",
              },
              {
                numero: "02",
                titulo: "Desmontaje de las ruedas",
                texto:
                  "Retiramos las ruedas cuando el servicio lo requiere para acceder correctamente a la cara interior de las llantas y a las pinzas de freno.",
              },
              {
                numero: "03",
                titulo: "Limpieza y descontaminación de llantas",
                texto:
                  "Trabajamos la cara exterior e interior, radios y zonas de difícil acceso para eliminar suciedad, contaminación férrica y residuos adheridos.",
              },
              {
                numero: "04",
                titulo: "Limpieza de pinzas de freno",
                texto:
                  "Limpiamos cuidadosamente las pinzas y las zonas accesibles del conjunto para retirar polvo de frenado y suciedad acumulada.",
              },
              {
                numero: "05",
                titulo: "Protección y montaje final",
                texto:
                  "Aplicamos protección cuando corresponde y realizamos nuevamente el montaje de las ruedas siguiendo el procedimiento adecuado.",
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
        {/* RECUPERACIÓN E HIDRATACIÓN DE PLÁSTICOS EXTERIORES */}
        {/* ===================================================== */}

        <div className="mt-32 border-t border-zinc-800 pt-24">
          <div className="mb-14 h-[320px] overflow-hidden rounded-2xl md:h-[520px]">
            <img
              src="/images/services/recuperacion-plasticos-exteriores.jpg"
              alt="Recuperación e hidratación de plásticos exteriores"
              className="h-full w-full object-cover"
            />
          </div>

          <p className="text-sm uppercase tracking-[0.4em] text-amber-500">
            Recuperación e hidratación de plásticos exteriores
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Recuperación de plásticos deteriorados por el sol
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Tratamos plásticos y molduras exteriores deteriorados por la
            exposición solar, la pérdida de color y el paso del tiempo,
            buscando recuperar un acabado más uniforme y posteriormente
            acondicionar y proteger la superficie.
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
                Aplicación
              </p>

              <p className="mt-2 text-lg font-semibold">
                Molduras y plásticos exteriores
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
                titulo: "Inspección del estado",
                texto:
                  "Evaluamos la pérdida de color, decoloración, manchas y deterioro provocado por la exposición solar y los agentes ambientales.",
              },
              {
                numero: "02",
                titulo: "Limpieza profunda",
                texto:
                  "Eliminamos suciedad, contaminación y restos de productos anteriores para trabajar sobre una superficie correctamente preparada.",
              },
              {
                numero: "03",
                titulo: "Recuperación del plástico",
                texto:
                  "Tratamos las superficies deterioradas para recuperar, en la medida que permita su estado, un tono más uniforme y mejorar su apariencia.",
              },
              {
                numero: "04",
                titulo: "Hidratación y acondicionamiento",
                texto:
                  "Aplicamos el tratamiento adecuado para acondicionar el plástico y recuperar un acabado más natural y uniforme.",
              },
              {
                numero: "05",
                titulo: "Protección y revisión final",
                texto:
                  "Finalizamos con protección para ayudar a conservar el resultado y revisamos todas las zonas tratadas.",
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