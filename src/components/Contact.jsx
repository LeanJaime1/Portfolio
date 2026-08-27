import { useState } from "react";
import { motion } from "framer-motion";

const contactChannels = [
  {
    id: "email",
    title: "Correo Electrónico",
    value: "leandrojaime17@gmail.com",
    href: "mailto:leandrojaime17@gmail.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    value: "Leandro Jaime",
    href: "https://www.linkedin.com/in/leandro-jaime-5585a5310/",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63c0-.9-.73-1.63-1.63-1.63Z" />
      </svg>
    ),
  },
  {
    id: "github",
    title: "GitHub",
    value: "Lean Jaime",
    href: "https://github.com/LeanJaime1",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 128 128">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
        />
      </svg>
    ),
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <main
      id="contact"
      className="relative min-h-screen w-full bg-[#080c14] overflow-hidden pt-28 pb-16"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Encabezado animado al scroll */}
        <motion.section
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center justify-center text-center mb-16 p-4"
        >
          <p className="text-emerald-400 font-bold text-sm tracking-wider uppercase">
            CONTACTO
          </p>
          <h2 className="text-white font-extrabold text-4xl sm:text-6xl mb-4 tracking-tight">
            ¿Tenés un proyecto en mente?
          </h2>
          <p className="text-slate-400 font-medium max-w-lg">
            Estoy disponible para nuevos desafíos técnicos, propuestas laborales
            y desarrollo de soluciones web.
          </p>
        </motion.section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Columna Izquierda animada al scroll */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="mb-2">
              <span className="text-emerald-400 font-bold text-xs tracking-wider uppercase">
                CANALES DIRECTOS
              </span>
              <h3 className="text-white font-bold text-2xl mt-1">
                Información de contacto
              </h3>
              <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                Podés escribirme directamente a través de cualquiera de estas
                plataformas o redes profesionales.
              </p>
            </div>

            {contactChannels.map((channel) => (
              <motion.a
                key={channel.id}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-4 p-5 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-sm hover:border-emerald-500/50 transition-colors hover:bg-slate-900/80"
              >
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl group-hover:scale-105 transition-transform">
                  {channel.icon}
                </div>
                <div>
                  <h4 className="text-slate-400 text-xs font-semibold uppercase tracking-wider">
                    {channel.title}
                  </h4>
                  <p className="text-white font-medium text-base group-hover:text-emerald-400 transition-colors">
                    {channel.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Columna Derecha Formulario animado al scroll */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7 bg-slate-900/50 p-8 sm:p-10 border border-slate-800 rounded-2xl backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-slate-300 text-sm font-medium"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    className="w-full bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-slate-300 text-sm font-medium"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tunombre@ejemplo.com"
                    className="w-full bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="subject"
                  className="text-slate-300 text-sm font-medium"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Ej: Propuesta laboral / Desarrollo web"
                  className="w-full bg-slate-800/40 border border-slate-700/60 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="text-slate-300 text-sm font-medium"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Contame en detalle sobre el proyecto, requerimientos técnicos o propuesta..."
                  className="w-full bg-slate-800/40 border border-slate-700/60 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 text-slate-950 font-semibold px-6 py-4 rounded-xl text-sm transition-colors hover:bg-emerald-400 cursor-pointer shadow-lg shadow-emerald-500/10 mt-2"
              >
                <span>Enviar mensaje</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;