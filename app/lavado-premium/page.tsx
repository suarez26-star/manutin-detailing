export default function LavadoPremium() {
  return (
    <main id="inicio" className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div
  className="mb-14 h-[320px] overflow-hidden rounded-2xl md:h-[520px]"
>
  <img
    src="/images/services/lavado-premium.jpg"
    alt="Lavado Premium"
    className="h-full w-full object-cover"
  />
</div>

        <p className="text-sm uppercase tracking-[0.4em] text-amber-500">
          Lavado Premium
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Lavado Premium
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          Un proceso diseñado para limpiar, proteger y realzar la pintura
          del vehículo utilizando técnicas seguras y productos premium.
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
      Según el estado del vehículo
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
      titulo: "Prelavado",
      texto:
        "Aplicamos espuma activa para ablandar la suciedad y retirarla reduciendo al mínimo el contacto con la pintura.",
    },
    {
      numero: "02",
      titulo: "Lavado manual con guante de microfibra",
      texto:
        "Utilizamos champú de pH neutro, guantes de microfibra y la técnica de los dos cubos para proteger la carrocería.",
    },
    {
      numero: "03",
      titulo: "Limpieza de detalles",
      texto:
        "Trabajamos llantas, neumáticos, parrillas, emblemas, cromados y zonas de difícil acceso.",
    },
    {
      numero: "04",
      titulo: "Aclarado controlado",
      texto:
        "Eliminamos completamente el producto y las impurezas mediante agua a presión aplicada de forma segura.",
    },
    {
      numero: "05",
      titulo: "Secado seguro",
      texto:
        "Secamos el vehículo con toallas premium de microfibra para evitar marcas y microarañazos.",
    },
    {
      numero: "06",
      titulo: "Acabado y protección",
      texto:
        "Aplicamos un protector ligero que realza el brillo y aporta propiedades hidrofóbicas.",
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