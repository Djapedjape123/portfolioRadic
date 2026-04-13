import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaEnvelope, FaPhone } from "react-icons/fa6"; // Koristimo uniformnije ikonice
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "7eb5b80e-7733-447c-ac05-b6f14a144507");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? t("contact_success") : t("contact_error"));
    if(data.success) event.target.reset(); // Resetuje formu nakon slanja
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-900 to-black text-white px-6 md:px-20 py-24 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Naslov sa modernijim borderom */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
          {t("contact_title")}
        </h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        
        {/* INFO SEKCIJA - Glassmorphism kartica */}
        <motion.div
          className="flex flex-col justify-center space-y-8 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-2">{t("contact_reach")}</h3>
            <p className="text-gray-400">Otvoren sam za nove prilike i saradnje. Pišite mi!</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <FaEnvelope className="text-blue-400 text-xl" />
              </div>
              <a href="mailto:prweb021@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                prweb021@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <FaPhone className="text-blue-400 text-xl" />
              </div>
              <a href="tel:+381612123525" className="text-gray-300 hover:text-white transition-colors">
                +381 612 123 525
              </a>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <FaLocationDot className="text-blue-400 text-xl" />
              </div>
              <span className="text-gray-300">Novi Sad, Srbija</span>
            </div>
          </div>

          {/* Social Icons - Moderniji Hover */}
          <div className="flex gap-4 pt-4">
            {[
              { icon: <FaInstagram />, link: "https://www.instagram.com/prweb_/", color: "hover:text-pink-500" },
              { icon: <FaGithub />, link: "https://github.com/Djapedjape123", color: "hover:text-white" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/predrag-radic-001478308/", color: "hover:text-blue-500" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl text-gray-400 ${social.color} transition-all transform hover:scale-110 p-2 bg-white/5 rounded-full`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* FORMA - Dark & Sleek */}
        <motion.form
          onSubmit={onSubmit}
          className="flex flex-col gap-6 p-8 rounded-3xl bg-gray-900/50 border border-white/10 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Suptilni glow efekat u pozadini forme */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 blur-[80px] rounded-full" />
          
          <h3 className="text-xl font-bold text-white mb-2">{t("contact_form_title")}</h3>

          <div className="space-y-4 relative">
            <input
              type="text"
              name="name"
              placeholder={t("contact_name")}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder={t("contact_email")}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-500"
              required
            />

            <textarea
              name="message"
              rows="4"
              placeholder={t("contact_message")}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-500 resize-none"
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-4 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-bold tracking-wide shadow-lg shadow-blue-600/20 transition-all"
          >
            {t("contact_send")}
          </motion.button>

          {result && (
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="text-center font-medium text-blue-400"
            >
              {result}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;