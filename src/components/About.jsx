import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/slikaPedja.jpeg"; // ostavi zakomentarano za sada

// React Icons
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMysql, SiMongodb, SiEjs } from "react-icons/si";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gray-900 text-white gap-10"
    >
      {/* Slika */}
      <motion.div
        className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden flex-shrink-0"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src={profilePic} alt="Pedja Radić" className="w-full h-full object-cover" />
      </motion.div>

      {/* Tekst + tehnologije */}
      <motion.div
        className="max-w-xl flex flex-col gap-4"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4 text-blue-500">Who Am I</h2>

        

        <p className="text-lg mb-4">
          Zdravo! Ja sam <span className="font-semibold">Pedja Radić</span>, frontend developer sa strašću za izradu modernih i responsivnih web sajtova. Volim čist i elegantan dizajn, brzinu i UX-friendly rešenja.
        </p>
        <p className="text-lg">
          Specijalizovan sam za React, TailwindCSS i moderne tehnologije, a svaki projekat koji radim je prilagođen potrebama klijenta i optimizovan za performanse.
        </p>
        {/* Ikonice tehnologija */}
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex flex-col items-center text-center w-16">
            <FaHtml5 className="text-orange-600 text-3xl" />
            <span className="text-sm mt-1">HTML</span>
          </div>
          <div className="flex flex-col items-center text-center w-16">
            <FaCss3Alt className="text-blue-600 text-3xl" />
            <span className="text-sm mt-1">CSS</span>
          </div>
          <div className="flex flex-col items-center text-center w-16">
            <FaJsSquare className="text-yellow-400 text-3xl" />
            <span className="text-sm mt-1">JS</span>
          </div>
          <div className="flex flex-col items-center text-center w-16">
            <FaReact className="text-blue-400 text-3xl" />
            <span className="text-sm mt-1">React</span>
          </div>
          <div className="flex flex-col items-center text-center w-16">
            <SiTailwindcss className="text-teal-400 text-3xl" />
            <span className="text-sm mt-1">Tailwind</span>
          </div>
          <div className="flex flex-col items-center text-center w-16">
            <FaNodeJs className="text-green-600 text-3xl" />
            <span className="text-sm mt-1">NodeJS</span>
          </div>
          <div className="flex flex-col items-center text-center w-16">
            <SiExpress className="text-white text-3xl" />
            <span className="text-sm mt-1">Express</span>
          </div>
          <div className="flex flex-col items-center text-center w-16">
            <SiEjs className="text-gray-300 text-3xl" />
            <span className="text-sm mt-1">EJS</span>
          </div>
          <div className="flex flex-col items-center text-center w-16">
            <SiMysql className="text-blue-700 text-3xl" />
            <span className="text-sm mt-1">MySQL</span>
          </div>
          <div className="flex flex-col items-center text-center w-16">
            <SiMongodb className="text-green-500 text-3xl" />
            <span className="text-sm mt-1">MongoDB</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
