import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
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
  };

  return (
    <section
      id="contact"
      className=" bg-gradient-to-b from-gray-900 to-black text-white px-6 md:px-20 py-16 flex flex-col items-center justify-center gap-12"
    >
      <motion.h2
        className="text-4xl font-bold text-blue-500 "
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        viewport={{ once: true }}
      >
        {t("contact_title")}
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row gap-12 items-center justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {/* Info */}
        <div className="flex flex-col  gap-4 max-w-md">
          <p className="text-lg">{t("contact_reach")}</p>

          <div className="flex items-center gap-3">
            <MdEmail color="gray" size={20} />
            <p>
              {t("contact_email")}:{" "}
              <a
                href="mailto:petafipedjaradic@gmail.com"
                className="text-blue-400 hover:underline"
              >
                petafipedjaradic@gmail.com
              </a>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <BsFillTelephoneInboundFill color="blue" size={20} />
            <p>
              {t("contact_phone")}:{" "}
              <a
                href="tel:+381612123525"
                className="text-blue-400 hover:underline"
              >
                +381 612123525
              </a>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FaLocationDot color="red" size={20} />
            <p>
              {t("contact_location")}: Novi Sad
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-6 mt-4">
            <a
              href="https://www.instagram.com/p.radic_/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-700 transition-colors text-4xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/Djapedjape123"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors text-4xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/predrag-radic-001478308/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors text-4xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4 w-full max-w-md bg-gray-800 p-6 rounded-xl shadow-lg"
        >
          <h1 className="text-blue-500 font-bold">{t("contact_form_title")}</h1>

          <input
            type="text"
            name="name"
            placeholder={t("contact_name")}
            className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder={t("contact_email")}
            className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder={t("contact_message")}
            className="p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold shadow-md shadow-blue-600/50 transition-colors"
          >
            {t("contact_send")}
          </button>

          {result && (
            <p className="text-center text-sm mt-2 text-green-400">{result}</p>
          )}
        </form>
      </motion.div>
    </section>
  );
}

export default Contact;
