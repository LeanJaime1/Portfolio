

const navLinks = [
  { name: "Tech Stack", href: "#stack" },
  { name: "Proyectos", href: "#projects" },
  { name: "Estudios", href: "#studies" },
];

function Nav() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#080c14]/80 backdrop-blur-md border-b border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
        
        
        <a href="#home" className="text-2xl font-extrabold text-white tracking-tight shrink-0">
          &lt;<span className="text-emerald-400">Lean</span>/&gt;
        </a>

       
        <nav className="flex items-center gap-6 sm:gap-8 text-sm font-medium text-slate-300 overflow-x-auto no-scrollbar py-2">
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

        
        <a
          href="#contact"
          className="hidden sm:inline-flex bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl transition-all hover:scale-105 shrink-0"
        >
          Contactame
        </a>

      </div>
    </header>
  );
}

export default Nav;