import { useState } from "react";

const allProjects = [
  {
    id: "organizacion-isasa",
    category: "commercial",
    categoryLabel: "Comercial",
    title: "Organización Isasa",
    description:
      "Landing page institucional que presenta los servicios, trayectoria y propuesta de valor de la organización para el sector asegurador.",
    image: "/project-2.png",
    tags: ["React", "Javascript", "CSS"],
    webUrl: "https://organizacionisasa.com.ar",
    codeUrl: "https://github.com/LeanJaime1/orgIsasaWeb",
  },
  {
    id: "el-rey-de-las-ojotas",
    category: "commercial",
    categoryLabel: "Comercial",
    title: "El rey de las ojotas",
    description:
      "Landing page comercial y catálogo interactivo de calzado que presenta modelos de ojotas personalizadas y facilita la consulta de venta mayorista y minorista.",
    image: "/project-1.png",
    tags: ["React", "Javascript", "CSS"],
    webUrl: "https://elreydelasojotas.com.ar",
    codeUrl: "https://github.com/LeanJaime1/ElRey",
  },
  {
    id: "playgames",
    category: "academic",
    categoryLabel: "Académico",
    title: "Playgames",
    description:
      "E-commerce interactivo de videojuegos con catálogo dinámico, filtros por género y plataforma, carrito de compras funcional y sistema de gestión de usuarios.",
    image: "/project-4.png",
    tags: ["PHP", "Bootstrap", "MySQL"],
    webUrl: "#",
    codeUrl: "https://github.com/LeanJaime1/playGames",
  },
  {
    id: "kanto-league",
    category: "academic",
    categoryLabel: "Académico",
    title: "Kanto-league",
    description:
      "Aplicación web desarrollada con PHP nativo que simula batallas Pokémon dinámicas en tiempo real.",
    image: "/project-3.png",
    tags: ["PHP", "Bootstrap"],
    webUrl: "http://kanto-league.infinityfreeapp.com",
    codeUrl: "https://github.com/LeanJaime1/Kanto_League",
  },
];

const filterTabs = [
  { id: "all", label: "Todos" },
  { id: "commercial", label: "Trabajos Comerciales" },
  { id: "academic", label: "Proyectos Académicos" },
];

function ProjectCard({ project }) {
  return (
    <article  className="group relative flex flex-col rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-emerald-500/5 backdrop-blur-sm">
      <div className="relative overflow-hidden">
        <img
          className="w-full h-52 object-cover object-center group-hover:scale-105 transition-transform duration-500"
          src={project.image}
          alt={`Imagen de ${project.title}`}
          loading="lazy"
        />
        <span className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md border border-slate-700/50 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          {project.categoryLabel}
        </span>
      </div>

      <div className="flex flex-col p-6 grow">
        <h3 className="text-white font-bold pb-2 text-xl group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 mb-5 text-sm grow leading-relaxed">
          {project.description}
        </p>

        <div className="mb-6">
          <ul className="text-emerald-400 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="bg-slate-800/60 px-3 py-1 border border-slate-700/50 rounded-full text-xs"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3 mt-auto pt-2 border-t border-slate-800/80">
          <a
            href={project.webUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-500 text-slate-950 font-semibold px-4 py-2.5 rounded-xl text-sm transition-all hover:bg-emerald-400 active:scale-95"
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
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
            <span>Web</span>
          </a>

          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white px-4 py-2.5 rounded-xl text-sm border border-slate-700/60 transition-all active:scale-95"
          >
            <svg className="size-4 fill-current" viewBox="0 0 128 128">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
              />
            </svg>
            <span>Repositorio</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? allProjects
      : allProjects.filter((project) => project.category === activeTab);

  return (
    <main id="projects" className="relative min-h-screen w-full bg-[#080c14] overflow-hidden pt-28 pb-16">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <section className="flex flex-col justify-center text-center items-center p-4 mb-8">
          <p className="text-emerald-400 font-bold text-sm tracking-wider uppercase">
            PORTFOLIO
          </p>
          <h1 className="text-white font-extrabold text-4xl sm:text-6xl mb-4">
            Proyectos Destacados
          </h1>
          <p className="text-slate-400 font-medium max-w-lg">
            Explorá mis trabajos comerciales desarrollados para clientes y proyectos técnicos académicos.
          </p>
        </section>

        {/* Barra de Filtros Unificada */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-sm gap-1">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grilla Única de Proyectos */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default Projects;