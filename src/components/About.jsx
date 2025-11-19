import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/slikaPedja.jpeg";
import logo from "../assets/logo.png";

// React Icons
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMysql, SiMongodb, SiEjs } from "react-icons/si";

import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation(); // <-- dodato

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gradient-to-b from-black to-gray-900 text-white gap-10 font-inter"
    >
      {/* Slika sa hover efektom */}
      <motion.div
        className="relative mt-3 md:mt-0 flex justify-center items-center"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 5 }}
        viewport={{ once: true }}
      >
        <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.4)] border-4 border-gray-700 group">

          {/* Originalna slika */}
          <img
            src={profilePic}
            alt="Pedja Radić"
            className="absolute inset-0 w-full h-full object-cover scale-110 transition-all duration-700 ease-in-out group-hover:opacity-0"
          />

          {/* Logo slika */}
          <img
            src={logo}
            alt="Logo"
            className="absolute inset-0 w-full h-full object-cover scale-100 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
        </div>
      </motion.div>

      {/* Tekst + tehnologije */}
      <motion.div
        className="max-w-xl flex flex-col gap-4"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3 }}
        viewport={{ once: true }}
      >
        {/* Naslov */}
        <h2 className="text-4xl font-grotesk font-bold mb-2 text-blue-500">
          {t("about_who")}
        </h2>

        {/* Prvi tekst */}
        <p className="text-lg mb-4 font-inter">
          {t("about_text1")}
        </p>

        {/* Drugi tekst */}
        <p className="text-lg font-inter">
          {t("about_text2")}
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
