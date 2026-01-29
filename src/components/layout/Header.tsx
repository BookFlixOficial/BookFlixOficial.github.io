import { BookOpen, Coffee } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../routes/Routes";

// Criado em 26/01/2026  21:32:29
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#121212]/95 backdrop-blur-md py-3 shadow-2xl" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#E50914] rounded-lg flex items-center justify-center shadow-lg shadow-red-600/20">
            <BookOpen className="text-white" size={24} />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase">
            BookFlix<span className="text-[#E50914]">.</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#inicio" className="hover:text-white transition-colors">
            Início
          </a>
          <a href="#recursos" className="hover:text-white transition-colors">
            Recursos
          </a>
          <a href="#comunidade" className="hover:text-white transition-colors">
            Comunidade
          </a>
          <a
            href="#doar"
            className="flex items-center gap-2 bg-[#29abe0] px-4 py-2 rounded-full text-white hover:bg-opacity-80 transition-all"
          >
            <Coffee size={16} /> Apoiar
          </a>
          <Link to={Routes.links} className="hover:text-white transition-colors">
            Links
          </Link>
        </nav>

        <a
          href="#baixar"
          className="bg-[#E50914] text-white px-6 py-2 rounded-md font-bold text-sm hover:bg-[#b20710] transition-all transform hover:scale-105 active:scale-95"
        >
          BAIXAR APP
        </a>
      </div>
    </header>
  );
}
