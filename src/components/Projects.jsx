import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiEjs, SiMongodb, SiMysql } from "react-icons/si";
import Carousel from "./Carousel";

import onlineShop from "../assets/onlineShoppp.png";
import hexa from "../assets/hexa.png";
import event from "../assets/event.jpeg";
import todo from "../assets/todo_app.jpeg";

const projects = [
  {
    name: "Social-Network HEXA",
    description: "Društvena mreža inspirisana Twitter-om koju sam pravio koristeći HTML, CSS i JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: hexa,
    demo: "https://social-network-main-ten.vercel.app/",
    github: "https://github.com/Djapedjape123/SocialNetwork-main",
  },
  {
    name: "Todo_list",
    description: "Lista zatataka za zaposlene.",
    technologies: ["NodeJS", "ExpressJS", "EJS", "MongoDB"],
    image: todo,
    demo: "https://todo-app-chi-ivory-48.vercel.app/",
    github: "https://github.com/Djapedjape123/todo_app",
  },
  {
    name: "Online Shop",
    description: "Projekat online prodavnice kreiran u ReactJS-u.",
    technologies: ["ReactJS", "TailwindCSS"],
    image: onlineShop,
    demo: "https://online-shop-eight-nu.vercel.app/",
    github: "https://github.com/Djapedjape123/onlineShop",
  },
  {
    name: "E-Comerc Event App",
    description: "Sajt za organizaciju i prodaju događaja, rađen u backend tehnologijama.",
    technologies: ["NodeJS", "ExpressJS", "EJS", "MongoDB"],
    image: event,
    demo: "https://eventapp.zile028.com/auth/login",
    github: "https://github.com/zile028/event_app",
  },
];

const techIcons = {
  HTML: <FaHtml5 className="text-orange-600 text-xl" />,
  CSS: <FaCss3Alt className="text-blue-600 text-xl" />,
  JavaScript: <FaJsSquare className="text-yellow-400 text-xl" />,
  ReactJS: <FaReact className="text-blue-400 text-xl" />,
  TailwindCSS: <SiTailwindcss className="text-teal-400 text-xl" />,
  NodeJS: <FaNodeJs className="text-green-600 text-xl" />,
  ExpressJS: <SiExpress className="text-white text-xl" />,
  EJS: <SiEjs className="text-gray-300 text-xl" />,
  MySQL: <SiMysql className="text-blue-700 text-xl" />,
  MongoDB: <SiMongodb className="text-green-500 text-xl" />,
};

function Projects() {
  const [itemWidth, setItemWidth] = useState(window.innerWidth - 32);

  useEffect(() => {
    const handleResize = () => {
      setItemWidth(window.innerWidth - 32);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="projects"
      className="
       relative
        md:max-h-90
        bg-gradient-to-b from-gray-900 to-black
        text-white
        flex flex-col items-center justify-start
        px-4 py-16
        scroll-margin-top-20
       
      "
       style={{ scrollMarginTop: "5rem" }}
    >
     <h1 className="absolute text-blue-500 top-4 md:top-6 left-1/2 transform -translate-x-1/2 text-2xl font-bold z-10">
        My Projects
      </h1>
      <div className="w-full">
        <Carousel autoplay={true} autoplayDelay={4000} loop={true} itemWidth={itemWidth} gap={0}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer mx-auto w-[80%] md:w-[40%] lg:w-[35%]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Slika */}
              <div className="h-64 sm:h-72 md:h-60 lg:h-56 w-full bg-gray-700 flex items-center justify-center">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
              </div>

              {/* Tekst */}
              <div className="p-4 sm:p-5 md:p-6 lg:p-6 flex flex-col gap-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400">
                  {project.name}
                </h3>

                <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                  {project.description}
                </p>

                {/* Tehnologije */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <div key={i} className="flex items-center gap-1 text-sm sm:text-base">
                      {techIcons[tech]}
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>

                {/* Dugmad */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold shadow-lg shadow-blue-600/50 transition-colors"
                    >
                      Demo
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-full text-white font-semibold shadow-lg shadow-gray-700/50 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Projects;
