import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function WhatIDo() {
  const { t } = useTranslation();

  // Varijante za "stagger" animaciju (kartice iskaču jedna za drugom)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    {
      icon: <FaLaptopCode className="text-blue-400 text-3xl" />,
      glow: "bg-blue-500/20",
      title: t("services.webdev_title"),
      description: t("services.webdev_desc"),
    },
    {
      icon: <FaMobileAlt className="text-green-400 text-3xl" />,
      glow: "bg-green-500/20",
      title: t("services.responsive_title"),
      description: t("services.responsive_desc"),
    },
    {
      // Napomena: Promenio sam text-blue-900 u text-purple-400 jer se tamno plava ne vidi na crnoj pozadini
      icon: <FaCheckCircle className="text-purple-400 text-3xl" />, 
      glow: "bg-purple-500/20",
      title: t("services.user_title"),
      description: t("services.user_desc"),
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 px-6  bg-gradient-to-b from-gray-900 via-black to-gray-900  text-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Ambijentalni sjaj u pozadini */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-green-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Naslov ujednačen sa ostatkom sajta */}
      <motion.div 
        className="text-center mb-16 z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-sm uppercase tracking-[0.3em] text-blue-500 font-semibold mb-2">Usluge</h2>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{t("services.title")} </span>
        </h1>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center backdrop-blur-md hover:bg-white/10 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.2)]"
          >
            {/* Ikonica upakovana u moderni kontejner sa glow efektom */}
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 relative">
              <div className={`absolute inset-0 rounded-2xl ${service.glow} blur-md group-hover:blur-xl transition-all duration-500`} />
              <div className="relative bg-[#0a0a0a] border border-white/10 w-full h-full rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
              {service.title}
            </h3>
            
            <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}