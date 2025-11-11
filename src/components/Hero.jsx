import React from 'react'
import { motion } from 'framer-motion';
import { Link } from "react-scroll";
function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-black text-white px-4">
            {/* Ime i zanimanje */}
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className="text-5xl md:text-6xl font-bold mb-4"
            >
                Zdravo, ja sam <span className="text-blue-500">Pedja Radić</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                className="text-lg md:text-xl max-w-xl mb-6"
            >
                Frontend developer koji pravi moderne, brze i responsivne web sajtove.
            </motion.p>

            {/* Dugme */}
            {/* Dugme za poziv */}
            <motion.a
                href="tel:+381612123525"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-colors hover:shadow-lg hover:shadow-blue-600/50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4 }}
            >
                Kontaktiraj me
            </motion.a>



            {/* Mali scroll down indikator */}
            <Link to="about" smooth={true} duration={500}>
                <motion.div
                    className="absolute bottom-10 cursor-pointer"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <span className="text-white text-2xl">⌄</span>
                </motion.div>
            </Link>

        </section>
    );
}



export default Hero