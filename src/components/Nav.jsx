import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Tech Stack", href: "#stack" },
  { name: "Proyectos", href: "#projects" },
  { name: "Estudios", href: "#studies" },
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#080c14]/80 backdrop-blur-md border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-2xl font-extrabold text-white tracking-tight shrink-0"
        >
          &lt;<span className="text-emerald-400">Lean</span>/&gt;
        </a>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-emerald-400 transition-colors whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botón Contacto Desktop */}
        <a
          href="#contact"
          className="hidden md:inline-flex bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm px-5 py-2.5 rounded-xl transition-all hover:scale-105 shrink-0"
        >
          Contactame
        </a>

        {/* Botón Hamburguesa Mobile */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Abrir menú de navegación"
          className="md:hidden text-slate-300 hover:text-emerald-400 p-2 rounded-lg bg-slate-800/40 border border-slate-700/50 transition-colors cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.75"
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menú Desplegable Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#080c14]/95 border-b border-slate-800/80 backdrop-blur-xl px-6 pb-6 pt-2"
          >
            <nav className="flex flex-col gap-4 text-base font-medium text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="py-2 hover:text-emerald-400 transition-colors border-b border-slate-850"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-2 text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm px-5 py-3 rounded-xl transition-all shadow-md shadow-emerald-500/10"
              >
                Contactame
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Nav;