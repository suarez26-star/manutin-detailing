export default function LavadoBasico() {
  return (
    <main id="inicio" className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 h-[320px] overflow-hidden rounded-2xl md:h-[520px]">
          <img
            src="/images/services/lavado-basico.jpg"
            alt="Lavado Básico"
            className="h-full w-full object-cover"
          />
        </div>

        <p className="text-sm uppercase tracking-[0.4em] text-amber-500">
          Lavado Básico
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Lavado Básico
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          Un lavado profesional diseñado para eliminar la suciedad de forma
          segura, respetando la pintura y proporcionando un acabado limpio y
          brillante.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <div className="border border-zinc-800 bg-zinc-950 px-6 py-4">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Precio
            </p>

            <p className="mt-2 text-lg font-semibold text-amber-500">
              Desde 45 €
            </p>
          </div>

          <div className="border border-zinc-800 bg-zinc-950 px-6 py-4">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Duración
            </p>

            <p className="mt-2 text-lg font-semibold text-white">
              1 - 2 horas
            </p>
          </div>
        </div>

        <div className="mt-8">
          <a
        href="/"
        className="border border-zinc-700 px-8 py-4 text-center text-sm font-semibold uppercase tracking-widest text-white transition hover:border-white hover:bg-white hover:text-black"
      >
        Volver al inicio
      </a>
    </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2">

          <div>
            <p className="text-amber-500 font-bold text-4xl">01</p>
            <h2 className="mt-4 text-2xl font-semibold">Prelavado</h2>
            <p className="mt-4 text-zinc-400 leading-8">
              Aplicamos espuma activa para ablandar la suciedad y retirarla
              reduciendo al mínimo el contacto con la pintura.
            </p>
          </div>

          <div>
            <p className="text-amber-500 font-bold text-4xl">02</p>
            <h2 className="mt-4 text-2xl font-semibold">
              Lavado manual con guante de microfibra
            </h2>
            <p className="mt-4 text-zinc-400 leading-8">
              Utilizamos champú de pH neutro, guantes de microfibra y la técnica
              de los dos cubos para proteger la carrocería durante todo el
              proceso de lavado.
            </p>
          </div>

          <div>
            <p className="text-amber-500 font-bold text-4xl">03</p>
            <h2 className="mt-4 text-2xl font-semibold">
              Aclarado controlado
            </h2>
            <p className="mt-4 text-zinc-400 leading-8">
              Eliminamos completamente el jabón y las impurezas mediante agua a
              presión aplicada de forma segura sobre toda la carrocería.
            </p>
          </div>

          <div>
            <p className="text-amber-500 font-bold text-4xl">04</p>
            <h2 className="mt-4 text-2xl font-semibold">
              Secado seguro
            </h2>
            <p className="mt-4 text-zinc-400 leading-8">
              Secamos el vehículo con toallas premium de microfibra para evitar
              marcas de agua y microarañazos, consiguiendo un acabado limpio y
              brillante.
            </p>
                </div>

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