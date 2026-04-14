import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiEjs, SiMongodb, SiMysql } from "react-icons/si";
import Carousel from "./Carousel";
import { useTranslation } from "react-i18next";

// Importi slika ostaju isti...
import onlineShop from "../assets/nekretnineNsS.png";
import hexa from "../assets/hexa.png";
import event from "../assets/event.jpeg";
import todo from "../assets/todo_app.jpeg";
import masine from "../assets/Masine.png";

const projects = [
  {
    name: "Masine.ai",
    description: "Premium platforma za prodaju teške građevinske mehanizacije sa fokusom na UX i brzinu.",
    technologies: ["ReactJS", "TailwindCSS"],
    image: masine,
    site: "https://masine.ai/",
    github: "https://github.com/Djapedjape123/goga",
  },
  {
    name: "Serbes Nekretnine",
    description: "Full-stack sistem za nekretnine sa automatizovanim XML uvozom podataka.",
    technologies: ["ReactJS", "TailwindCSS", "NodeJS", "ExpressJS"],
    image: onlineShop,
    site: "https://www.serbesnekretnine.com/",
    github: "https://github.com/Djapedjape123/nekretnineNs",
  },
  {
    name: "HEXA Social Media",
    description: "Konceptualna društvena mreža sa fokusom na real-time interakciju i čist dizajn.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: hexa,
    demo: "https://social-network-main-ten.vercel.app/",
    github: "https://github.com/Djapedjape123/SocialNetwork-main",
  },
  {
    name: "Task Master",
    description: "Sistem za upravljanje zadacima i zaposlenima baziran na MongoDB bazi.",
    technologies: ["NodeJS", "ExpressJS", "EJS", "MongoDB"],
    image: todo,
    demo: "https://todo-app-chi-ivory-48.vercel.app/",
    github: "https://github.com/Djapedjape123/todo_app",
  },
  {
    name: "Event Hub",
    description: "E-commerce rešenje za organizaciju događaja i prodaju karata.",
    technologies: ["NodeJS", "ExpressJS", "EJS", "MongoDB"],
    image: event,
    github: "https://github.com/zile028/event_app",
  },
];

const techIcons = {
  HTML: <FaHtml5 className="text-[#E34F26]" />,
  CSS: <FaCss3Alt className="text-[#1572B6]" />,
  JavaScript: <FaJsSquare className="text-[#F7DF1E]" />,
  ReactJS: <FaReact className="text-[#61DAFB]" />,
  TailwindCSS: <SiTailwindcss className="text-[#06B6D4]" />,
  NodeJS: <FaNodeJs className="text-[#339933]" />,
  ExpressJS: <SiExpress className="text-white" />,
  EJS: <SiEjs className="text-[#A91E50]" />,
  MySQL: <SiMysql className="text-[#4479A1]" />,
  MongoDB: <SiMongodb className="text-[#47A248]" />,
};

function Projects() {
  const { t } = useTranslation();
  const [itemWidth, setItemWidth] = useState(window.innerWidth - 32);

  useEffect(() => {
    const handleResize = () => setItemWidth(window.innerWidth - 32);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="projects"
      className="relative bg-gradient-to-b from-gray-900 to-black text-white py-24 px-4 overflow-hidden"
      style={{ scrollMarginTop: "4rem" }}
    >
      {/* Dekorativni pozadinski sjaj */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold mb-2">Portfolio</h2>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">
            {t("izabrani")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{t("projekti")}</span>
          </h1>
        </motion.div>

        <div className="w-full">
          <Carousel autoplay={true} autoplayDelay={5000} loop={true} itemWidth={itemWidth} gap={0}>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-md mx-auto w-[90%] md:w-[45%] lg:w-[38%] transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                {/* Image Container with Overlay - Smanjeno na h-48 za mobilne, h-64 na desktopu */}
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                </div>

                {/* Content - Smanjen padding i razmaci na mobilnom */}
                <div className="p-5 md:p-8 flex flex-col gap-3 md:gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Pills - Sitniji font i manji padding na mobilnom */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 py-1 md:py-2">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="flex items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-3 border border-white/10 rounded-full text-[10px] md:text-xs font-medium text-gray-300 bg-white/5"
                      >
                        {techIcons[tech]}
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons - Kompaktnija dugmad na mobilnom */}
                  <div className="flex items-center gap-3 md:gap-4 mt-2 md:mt-4">
                    {(project.demo || project.site) && (
                      <a
                        href={project.site || project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs md:text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20"
                      >
                        Pogledaj <FaExternalLinkAlt size={12} />
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 md:p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all"
                        title="GitHub Code"
                      >
                        <FaGithub className="text-lg md:text-xl" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Projects;