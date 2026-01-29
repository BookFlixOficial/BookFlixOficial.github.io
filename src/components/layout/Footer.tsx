import { Coffee, Github, Instagram, Send, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Routes } from "../routes/Routes";

// Criado em 26/01/2026  21:33:39
export default function Footer() {
  const socialLinks = [
    {
      name: "Telegram",
      icon: <Send size={18} />,
      url: "https://t.me/BookFlixOficial",
      hover: "hover:bg-[#24A1DE]",
    },
    {
      name: "Ko-fi",
      icon: <Coffee size={18} />,
      url: "https://ko-fi.com/bookflixoficial",
      hover: "hover:bg-[#29abe0]",
    },
    {
      name: "GitHub",
      icon: <Github size={18} />,
      url: "https://github.com/BookFlixOficial",
      hover: "hover:bg-gray-800",
    },
    {
      name: "Instagram",
      icon: <Instagram size={18} />,
      url: "https://www.instagram.com/BookFlixOficial",
      hover: "hover:bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    },
    {
      name: "Twitter (X)",
      icon: <Twitter size={18} />,
      url: "https://x.com/BookFlixOfc",
      hover: "hover:bg-black",
    },
  ];

  return (
    <footer className="py-12 bg-[#0a0a0a] border-t border-white/5 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Lado Esquerdo: Marca e Descrição */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="text-xl font-black tracking-tighter uppercase">
                BookFlix<span className="text-[#E50914]">.</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              Incentivando a leitura e compartilhando conhecimento de forma democratizada em todo o mundo.
            </p>
          </div>

          {/* Lado Direito: Redes Sociais e Suporte */}
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className={`w-10 h-10 bg-white/5 rounded-full flex items-center justify-center transition-all duration-300 ${social.hover} hover:scale-110 shadow-lg`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Rodapé Inferior: Copyright e Links Legais */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-gray-600 text-xs text-center md:text-left">
          <p>&copy; 2026 BookFlix Oficial.</p>

          <div className="flex flex-wrap gap-6 justify-center">
            {/* Links usando o componente Link para navegação SPA */}
            <Link to={Routes.termoDeUso} className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
            <Link to={Routes.privacidade} className="hover:text-white transition-colors">
              Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
