import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useTranslation } from "react-i18next";

function NavBar() {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const changeLang = (lng) => i18n.changeLanguage(lng);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const linkClasses = "cursor-pointer hover:text-blue-400 transition-colors duration-100";

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-[80%] transition-all duration-300 ${
        scrollY > 50
          ? "backdrop-blur-md bg-gray-900/40 rounded-2xl shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 text-gray-300">
        {/* Logo */}
        <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">
          <h1 className="font-grotesk text-2xl font-bold md:text-4xl"><i>{t("brand")}</i></h1>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 font-inter text-lg items-center">
          <li><Link to="about" smooth={true} duration={500} spy={true} offset={-80} activeClass="text-blue-400" className={linkClasses}>{t("nav_about")}</Link></li>
          <li><Link to="projects" smooth={true} duration={500} spy={true} offset={-80} activeClass="text-blue-400" className={linkClasses}>{t("nav_projects")}</Link></li>
          <li><Link to="contact" smooth={true} duration={500} spy={true} offset={-80} activeClass="text-blue-400" className={linkClasses}>{t("nav_contact")}</Link></li>

          {/* Language buttons */}
          <div className="flex gap-2 ml-4">
            {["sr", "en", "ru"].map((lng) => (
              <button
                key={lng}
                onClick={() => changeLang(lng)}
                className={`px-3 py-1 rounded-xl text-sm transition ${
                  i18n.language === lng ? "bg-blue-600 text-white" : "bg-gray-700/40 hover:bg-gray-600"
                }`}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>
        </ul>

        {/* Hamburger */}
        <div className="md:hidden font-inter flex items-center">
          <button onClick={toggleMenu}>{isOpen ? <HiX className="text-3xl hover:text-red-800" /> : <HiMenu className="text-3xl" />}</button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/90 backdrop-blur-md rounded-2xl mx-4 mt-2 p-4 flex flex-col gap-4 absolute w-[calc(90%-2rem)] left-1/2 -translate-x-1/2 shadow-lg z-40 text-gray-200">
          <Link onClick={toggleMenu} to="about" smooth={true} duration={500} offset={-80} className={linkClasses}>{t("nav_about")}</Link>
          <Link onClick={toggleMenu} to="projects" smooth={true} duration={500} offset={-80} className={linkClasses}>{t("nav_projects")}</Link>
          <Link onClick={toggleMenu} to="contact" smooth={true} duration={500} offset={-80} className={linkClasses}>{t("nav_contact")}</Link>

          {/* Language buttons */}
          <div className="flex justify-center gap-3 pt-2">
            {["sr", "en", "ru"].map((lng) => (
              <button
                key={lng}
                onClick={() => { changeLang(lng); toggleMenu(); }}
                className={`px-4 py-2 rounded-xl text-sm transition ${
                  i18n.language === lng ? "bg-blue-600 text-white" : "bg-gray-700/40 hover:bg-gray-600"
                }`}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
