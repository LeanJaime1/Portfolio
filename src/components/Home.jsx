import SplitText from "./ui/SplitText";
import TextType from "./ui/TextType";

function Home() {
  return (
    <section id="home" className="relative min-h-screen w-full bg-[#080c14] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-87.5 bg-emerald-500/15 blur-[140px] rounded-full pointer-events-none" />

     
      <div className="relative mb-8">
        <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-2 border-emerald-400/60 shadow-2xl shadow-emerald-500/20 ring-4 ring-emerald-500/10">
          <img
            src="/perfil.jpeg"
            alt="Leandro Jaime"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    
      {/* Título Principal Gigante */}
      <h1 className="text-white font-black text-6xl sm:text-8xl md:text-9xl mb-8 tracking-tight leading-none">
        <SplitText
          text="Leandro Jaime"
          className="text-white font-black"
          delay={80}
          animationFrom={{ opacity: 0, transform: "translate3d(0, 50px, 0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
          threshold={0.2}
          rootMargin="-50px"
        />
      </h1>

      {/* Párrafo Principal ampliado */}
      <div className="text-slate-300 text-xl sm:text-2xl md:text-3xl max-w-4xl min-h-22.5 sm:min-h-20 leading-relaxed mb-12 font-light">
        <TextType
          text="FrontEnd Developer enfocado en crear experiencias web modernas."
          speed={30}
          cursor={true}
          cursorChar="|"
        />
      </div>

      {/* Botones de Acción más grandes */}
      <div className="flex flex-wrap gap-5 justify-center">
        <a
          href="#projects"
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-base sm:text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 shadow-lg shadow-emerald-500/20"
        >
          Ver Proyectos
        </a>
        <a
          href="#contact"
          className="bg-slate-800/80 border border-slate-700/80 hover:border-emerald-500/60 text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 hover:bg-slate-800"
        >
          Contactame
        </a>
      </div>
    </section>
  );
}

export default Home;