function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full bg-[#080c14] border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-6xl mx-auto px-6">
        {/* Contenido Principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12">
          {/* Columna 1: Brand & Bio */}
          <div className="flex flex-col gap-4">
           <a href="#" className="text-emerald-400 font-mono font-bold text-2xl">
          &lt; <span className="text-white">LJ</span> /&gt;
        </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              FrontEnd Developer enfocado en crear experiencias que conectan.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold text-base mb-1">
              Enlaces Rápidos
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#stack"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#studies"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Estudios
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto & Redes */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold text-base mb-1">Conectemos</h3>
            <a
              href="mailto:tuemail@ejemplo.com"
              className="text-sm hover:text-emerald-400 transition-colors mb-2"
            >
              leandrojaime17@gmail.com
            </a>

            {/* Íconos Sociales */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/LeanJaime1"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
              >
                <svg className="size-4 fill-current" viewBox="0 0 128 128">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/leandro-jaime-5585a5310"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
              >
                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              <a
                href="https://instagram.com/leanjaime"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
              >
                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="mailto:leandrojaime17@gmail.com"
                aria-label="Email"
                className="p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Separador y Derechos Reservados */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p className="flex items-center gap-1.5">© 2026 Leandro Jaime</p>

          <p>Todos los derechos reservados</p>
        </div>
      </div>

      {/* Botón Flotante Ir Arriba */}
      <button
        onClick={scrollToTop}
        aria-label="Volver arriba"
        className="fixed bottom-6 right-6 bg-emerald-500 hover:bg-emerald-400 text-slate-950 p-3 rounded-full shadow-lg transition-transform hover:scale-110 z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
          />
        </svg>
      </button>
    </footer>
  );
}

export default Footer;


