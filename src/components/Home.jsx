import { motion } from "framer-motion";
import SplitText from "./ui/SplitText";
import TextType from "./ui/TextType";

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#080c14] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 overflow-hidden"
    >
      {/* Luz de fondo con pulsación sutil */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-87.5 bg-emerald-500/15 blur-[140px] rounded-full pointer-events-none"
      />
      {/* Avatar con entrada escalonada y levitación continua */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative mb-8"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-2 border-emerald-400/60 shadow-2xl shadow-emerald-500/20 ring-4 ring-emerald-500/10"
        >
          <img
            src="/perfil.jpeg"
            alt="Leandro Jaime"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

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

      {/* Párrafo Principal */}
      <div className="text-slate-300 text-xl sm:text-2xl md:text-3xl max-w-4xl min-h-22.5 sm:min-h-20 leading-relaxed mb-12 font-light">
        <TextType
          text="FrontEnd Developer enfocado en crear experiencias web modernas."
          speed={30}
          cursor={true}
          cursorChar="|"
        />
      </div>

      {/* Botones de Acción con entrada suave y microinteracciones */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-wrap gap-5 justify-center"
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-base sm:text-lg px-8 py-4 rounded-2xl transition-colors shadow-lg shadow-emerald-500/20"
        >
          Ver Proyectos
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="bg-slate-800/80 border border-slate-700/80 hover:border-emerald-500/60 text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-2xl transition-colors hover:bg-slate-800"
        >
          Contactame
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Home;