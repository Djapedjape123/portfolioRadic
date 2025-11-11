import { Link } from "react-scroll";

function NavBar() {
    return (
        <nav className="fixed w-full bg-gradient-to-b from-black to-gray-900 text-white z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                <h1 className="text-2xl font-bold">Pedja.dev</h1>
                <ul className="flex gap-6">
                    <li><Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">Početna</Link></li>
                    <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">O meni</Link></li>
                    <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">Projekti</Link></li>
                    <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400">Kontakt</Link></li>
                </ul>
            </div>
        </nav>
    );
}
export default NavBar