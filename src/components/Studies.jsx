import { motion } from "framer-motion";

const studiesData = [
  {
    id: "medios-digitales",
    year: "2024",
    title: "Gestión de Medios Digitales",
    institution: "Escuela Da Vinci",
    description:
      "Formación práctica en maquetación web responsive, diseño de experiencia de usuario y administración de medios digitales.",
    certificateUrl:
      "https://www.linkedin.com/posts/leandro-jaime-5585a5310_en-mi-primer-publicaci%C3%B3n-quer%C3%ADa-compartir-activity-7204301890396798976-bjJO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8cCtQBTAVM0GNPoyM335KpClz8IKul3Ec",
    colSpan: "col-span-1",
  },
  {
    id: "backend-avanzado",
    year: "2024",
    title: "Desarrollo Avanzado de Backend",
    institution: "Coderhouse",
    description:
      "Desarrollo de servidores y APIs RESTful con Node.js y Express, integración de bases de datos NoSQL con MongoDB e implementación de comunicación en tiempo real con WebSockets.",
    certificateUrl:
      "https://pub.coderhouse.com/certificates/eac1c508-916a-4cad-b08d-e1137d196d68?v=1",
    colSpan: "md:col-span-2",
  },
  {
    id: "desarrollo-frontend",
    year: "2024",
    title: "Desarrollo Frontend",
    institution: "Coderhouse",
    description:
      "Formación integral en maquetación responsive (HTML5, CSS3, Sass), programación en JavaScript ES6+ y desarrollo de aplicaciones web complejas con React.js e integración de APIs RESTful.",
    certificateUrl:
      "https://pub.coderhouse.com/legacy-certificates/6776e3d913e5341471d133e2",
    colSpan: "md:col-span-2",
  },
  {
    id: "desarrollo-ia",
    year: "2025",
    title: "Iniciación al desarrollo con IA",
    institution: "BIG School",
    description:
      "Formación en Prompt Engineering, integración de APIs de modelos de lenguaje (LLMs) y creación de agentes de IA autónomos para la automatización de flujos de desarrollo.",
    certificateUrl:
      "https://drive.google.com/file/d/16WCCsvXTB396tJp60CSSiTUtR5LIUhwC/view",
    colSpan: "col-span-1",
  },
  {
    id: "wordpress",
    year: "2025",
    title: "Wordpress",
    institution: "Coderhouse",
    description:
      "Desarrollo y maquetación de sitios web dinámicos con WordPress y Elementor, incluyendo configuración de WooCommerce para tiendas online, optimización WPO y buenas prácticas de SEO y seguridad.",
    certificateUrl:
      "https://pub.coderhouse.com/certificates/bc7de365-91ce-4c56-9d64-f8495d85d34f?v=1",
    colSpan: "col-span-1",
  },
  {
    id: "react-js",
    year: "2024",
    title: "React js",
    institution: "Coderhouse",
    description:
      "Desarrollo de Single Page Applications (SPA) con React.js, aplicando componentes reutilizables, hooks, renderizado condicional, ruteo dinámico con React Router y gestión de estado global.",
    certificateUrl:
      "https://pub.coderhouse.com/certificates/0698d19f-a571-4822-a85b-871cb9a32c5b?v=1",
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

function Studies() {
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
        {/* Encabezado con animación de entrada */}
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
            Aprendizaje continuo y compromiso con la excelencia técnica.
          </p>
        </motion.section>

        {/* Grilla Asimétrica (Bento Grid) Animada al Scroll */}
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
                  <p className="text-slate-400 text-xs font-medium">
                    {item.year}
                  </p>
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

              <motion.a
                href={item.certificateUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 self-start bg-emerald-500 text-slate-950 px-3.5 py-2 rounded-lg text-xs font-semibold shadow-md shadow-emerald-500/10"
              >
                <span>Ver certificado</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </motion.a>
            </motion.article>
          ))}
        </motion.section>
      </div>
    </main>
  );
}

export default Studies;