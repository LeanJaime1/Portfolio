import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const studiesData = [
  {
    id: "medios-digitales",
    year: "2024",
    title: "Gestión de Medios Digitales",
    institution: "Escuela Da Vinci",
    description:
      "Formación práctica en maquetación web responsive, diseño de experiencia de usuario y administración de medios digitales.",
    imageUrl: "/certificates/medios-digitales.jpg",
    colSpan: "col-span-1",
  },
  {
    id: "backend-avanzado",
    year: "2024",
    title: "Desarrollo Avanzado de Backend",
    institution: "Coderhouse",
    description:
      "Desarrollo de servidores y APIs RESTful con Node.js y Express, integración de bases de datos NoSQL con MongoDB e implementación de comunicación en tiempo real con WebSockets.",
    imageUrl: "/certificates/backend.jpg",
    colSpan: "md:col-span-2",
  },
  {
    id: "desarrollo-frontend",
    year: "2024",
    title: "Desarrollo Frontend",
    institution: "Coderhouse",
    description:
      "Formación integral en maquetación responsive (HTML5, CSS3, Sass), programación en JavaScript ES6+ y desarrollo de aplicaciones web complejas con React.js e integración de APIs RESTful.",
    imageUrl: "/certificates/frontend.jpg",
    colSpan: "md:col-span-2",
  },
  {
    id: "desarrollo-ia",
    year: "2025",
    title: "Iniciación al desarrollo con IA",
    institution: "BIG School",
    description:
      "Formación en Prompt Engineering, integración de APIs de modelos de lenguaje (LLMs) y creación de agentes de IA autónomos para la automatización de flujos de desarrollo.",
    imageUrl: "/certificates/desarrollo-ia.jpg",
    colSpan: "col-span-1",
  },
  {
    id: "wordpress",
    year: "2025",
    title: "Wordpress",
    institution: "Coderhouse",
    description:
      "Desarrollo y maquetación de sitios web dinámicos con WordPress y Elementor, incluyendo configuración de WooCommerce para tiendas online, optimización WPO y buenas prácticas de SEO y seguridad.",
    imageUrl: "/certificates/wordpress.jpg",
    colSpan: "col-span-1",
  },
  {
    id: "react-js",
    year: "2024",
    title: "React js",
    institution: "Coderhouse",
    description:
      "Desarrollo de Single Page Applications (SPA) con React.js, aplicando componentes reutilizables, hooks, renderizado condicional, ruteo dinámico con React Router y gestión de estado global.",
    imageUrl: "/certificates/react.jpg",
    colSpan: "md:col-span-2",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function CertificateModal({ item, onClose }) {
  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[90vh] bg-[#0c121e] border border-slate-800 rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-emerald-500/5"
      >
        {/* Cabecera del Visor */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60 shrink-0">
          <div>
            <h4 className="text-white font-bold text-lg">{item.title}</h4>
            <p className="text-slate-400 text-xs">
              {item.institution} • {item.year}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Contenedor de la Imagen Centrada */}
        <div className="flex-1 w-full bg-slate-950/80 p-4 sm:p-8 flex items-center justify-center overflow-auto min-h-0">
          <img
            src={item.imageUrl}
            alt={`Certificado de ${item.title}`}
            className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-xl border border-slate-800/80"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function Studies() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <main
      id="studies"
      className="relative min-h-screen w-full bg-[#080c14] overflow-hidden pt-28 pb-16"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.section
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center justify-center text-center mb-12 p-4"
        >
          <p className="text-emerald-400 font-bold text-sm tracking-wider uppercase">
            TRAYECTORIA
          </p>
          <h2 className="text-white font-extrabold text-4xl sm:text-6xl mb-4">
            Educación y Certificaciones
          </h2>
          <p className="text-slate-400 font-medium max-w-lg">
            Recorrido académico, carreras y certificaciones.
          </p>
        </motion.section>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {studiesData.map((item) => (
            <motion.article
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className={`group flex flex-col justify-between border bg-slate-800/30 border-slate-700/40 p-6 rounded-2xl hover:border-emerald-500/50 transition-colors duration-300 shadow-lg ${item.colSpan}`}
            >
              <div>
                <div className="flex gap-2 items-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 text-emerald-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                  <p className="text-slate-400 text-xs font-medium">{item.year}</p>
                </div>

                <h3 className="text-white font-bold text-xl mb-1 group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>

                <div className="flex gap-2 items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 text-slate-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <p className="text-slate-400 text-sm">{item.institution}</p>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <motion.button
                  onClick={() => setSelectedCertificate(item)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-emerald-500 text-slate-950 px-3.5 py-2 rounded-lg text-xs font-semibold shadow-md shadow-emerald-500/10 cursor-pointer"
                >
                  <span>Ver certificado</span>
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.section>
      </div>

      {/* Modal Visor de Certificados */}
      <AnimatePresence>
        {selectedCertificate && (
          <CertificateModal
            item={selectedCertificate}
            onClose={() => setSelectedCertificate(null)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}

export default Studies;