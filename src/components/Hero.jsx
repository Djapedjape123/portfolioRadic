import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-scroll";
import TextType from './TextType';
import GradientText from './GradientText';
import Magnet from './Magnet';
import LightRays from './LightRays';
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section className="h-screen relative w-full bg-gradient-to-b from-gray-900 to-black text-white flex justify-center items-center px-4 overflow-hidden">

      {/* Background rays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={1}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center gap-2 md:gap-3 text-center max-w-4xl">

        {/* Typing text */}
        <TextType
          text={[
            t("hero_typing1"),
            t("hero_typing2"),
            t("hero_typing3")
          ]}
          typingSpeed={85}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="text-blue-500 text-xl md:text-2xl font-bold mb-4"
        />

        {/* Gradient title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={8}
            showBorder={false}
            className="text-5xl font-extrabold md:text-7xl p-3"
          >
            <a
              href="https://www.w3schools.com/whatis/whatis_fullstack.asp"
              target="_blank"
            >
              {t("hero_title")}
            </a> 
          </GradientText>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="text-xl md:text-2xl max-w-xl mb-6"
        >
          {t("hero_subtitle")}
        </motion.p>

        {/* Contact button */}
        <Magnet padding={50} disabled={false} magnetStrength={1}>
          <motion.a
            href="tel:+381612123525"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-colors"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
          >
            {t("hero_contact")}
          </motion.a>
        </Magnet>

      </div>

      {/* Scroll down indicator */}
      <Link to="about" smooth={true} duration={500}>
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="text-white text-4xl">⌄</span>
        </motion.div>
      </Link>

    </section>
  );
}

export default Hero;
