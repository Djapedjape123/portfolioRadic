import React from "react";
import { FaLaptopCode, FaMobileAlt, FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function WhatIDo() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <FaLaptopCode className="text-blue-400 text-4xl mb-4" />,
      title: t("services.webdev_title"),
      description: t("services.webdev_desc"),
    },
    {
      icon: <FaMobileAlt className="text-green-400 text-4xl mb-4" />,
      title: t("services.responsive_title"),
      description: t("services.responsive_desc"),
    },
    {
      icon: <FaCheckCircle className="text-blue-900 text-4xl mb-4" />,
      title: t("services.user_title"),
      description: t("services.user_desc"),
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex flex-col items-center justify-center px-6 py-16"
    >
      <h2 className="text-4xl font-bold text-blue-400 mb-12">
        {t("services.title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            {service.icon}
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
