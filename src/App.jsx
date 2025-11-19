import { useState, useEffect } from "react";
// Komponente
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import LogoLoop from "./components/LogoLoop";
import WhatIDo from "./components/WhatIdo";

import splashImage from "./assets/logo.png"; //slika za uvod
// ikonce
import { SiReact, SiExpress, SiTypescript, SiTailwindcss, SiMysql, SiMongodb, SiEjs } from "react-icons/si";
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";


const techLogos = [
  { node: <SiReact color="white"/>, title: "React", href: "https://react.dev" },
  { node: <SiExpress color="white"/>, title: "Express", href: "https://expressjs.com/" },
  { node: <SiTypescript color="white"/>, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss color="white"/>, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiMysql color="white"/>, title: "MySQL", href: "https://www.mysql.com/" },
  { node: <SiMongodb color="white"/>, title: "MongoDB", href: "https://www.mongodb.com/" },
  { node: <SiEjs color="white"/>, title: "EJS", href: "https://ejs.co/" },
];
const comercLogos = [
  { node: <FaInstagram color="purple"/>, title: "Insta", href: "https://www.instagram.com/p.radic_/" },
  { node: <FaGithub color="gray"/>, title: "GitHub", href: "https://github.com/Djapedjape123"},
  { node: <FaWhatsapp color="green"/>, title: "WhatsApp", href: "https://wa.me/+381612123525" },
  { node: <FaLinkedin color="blue"/>, title: "LinkedIn", href: "https://www.linkedin.com/in/predrag-radic-001478308/" },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
    const hideTimer = setTimeout(() => setLoading(false), 2500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (loading) {
    return (
      <div
        className={`fixed inset-0 bg-black flex items-center justify-center transition-opacity duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <img
          src={splashImage}
          alt="Uvodna slika"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>

      

      <div
        style={{
          width: "full",
          marginLeft: "calc(-50vw + 50%)",
          height: "100px",
          position: "relative",
          overflow: "hidden",
          backgroundImage: "linear-gradient(to bottom, black, #111827)"

        }}
      >
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="right"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          
          ariaLabel="Technology partners"
        />
      </div>
      <WhatIDo/>
      <section id="contact"><Contact /></section>
       <div
        style={{
          width: "full",
          marginLeft: "calc(-50vw + 50%)",
          height: "100px",
          position: "relative",
          overflow: "hidden",
          backgroundImage: "linear-gradient(to bottom, black, #111827)"

        }}
      >
        <LogoLoop
          logos={comercLogos}
          speed={100}
          direction="right"
          logoHeight={48}
          gap={40}
          hoverSpeed={0}
          scaleOnHover
          
          ariaLabel="Technology partners"
        />
      </div>

    </>
  );
}

export default App;
