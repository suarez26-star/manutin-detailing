export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <h2 className="text-2xl font-bold tracking-[0.2em] text-white">
          MANUTIN
        </h2>

        <ul className="hidden gap-10 text-sm uppercase tracking-widest text-white md:flex">
          <li>
            <a href="#servicios" className="transition hover:text-amber-500">
              Servicios
            </a>
          </li>

          <li>
            <a href="#galeria" className="transition hover:text-amber-500">
              Galería
            </a>
          </li>

          <li>
            <a href="#contacto" className="transition hover:text-amber-500">
              Contacto
            </a>
          </li>
        </ul>

        <a
          href="#reservas"
          className="rounded border border-amber-500 px-5 py-2 text-sm uppercase tracking-widest text-amber-500 transition hover:bg-amber-500 hover:text-black"
        >
          Reservar
        </a>
      </nav>
    </header>
  );
}