import { ArrowLeft, BookOpen, Coffee, Github, Instagram, Send, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

// Criado em 26/01/2026  21:35:42
export default function Links() {
  const links = [
    {
      title: "Canal no Telegram",
      description: "Novidades e avisos em primeira mão",
      icon: <Send size={24} />,
      url: "https://t.me/BookFlixOficial",
      color: "bg-[#24A1DE]",
    },
    {
      title: "Apoie o Projeto (Ko-fi)",
      description: "Ajude a manter os servidores ativos",
      icon: <Coffee size={24} />,
      url: "https://ko-fi.com/bookflixoficial",
      color: "bg-[#29abe0]",
    },
    {
      title: "Siga no Instagram",
      description: "Confira os lançamentos e novidades",
      icon: <Instagram size={24} />,
      url: "https://instagram.com/BookFlixOficial",
      color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    },
    {
      title: "Twitter (X)",
      description: "Acompanhe as nossas threads e atualizações",
      icon: <Twitter size={24} />,
      url: "https://x.com/BookFlixOfc",
      color: "bg-[#000000]",
    },
    {
      title: "GitHub do Projeto",
      description: "Contribua com o desenvolvimento",
      icon: <Github size={24} />,
      url: "https://github.com/BookFlixOficial",
      color: "bg-[#333]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center py-6 px-6">
      {/* Botão Voltar */}
      <div className="w-full max-w-md mb-8">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Voltar para o site</span>
        </Link>
      </div>

      {/* Header da Página de Links */}
      <div className="flex flex-col items-center mb-6 text-center">
        <div className="w-20 h-20 bg-[#E50914] rounded-2xl flex items-center justify-center shadow-xl shadow-red-600/20 mb-4">
          <BookOpen size={40} className="text-white" />
        </div>
        <h1 className="text-3xl font-black tracking-tighter uppercase">
          BookFlix<span className="text-[#E50914]">.</span>
        </h1>
        <p className="text-gray-400 mt-2">Tudo o que você precisa em um só lugar</p>
      </div>

      {/* Lista de Links */}
      <div className="w-full max-w-md space-y-4">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 bg-[#1a1a1a] border border-white/5 rounded-2xl hover:border-white/20 hover:bg-[#222] transition-all group shadow-lg"
          >
            <div
              className={`w-12 h-12 ${link.color} rounded-xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform shadow-lg`}
            >
              {link.icon}
            </div>
            <div className="ml-4 text-left">
              <h2 className="font-bold text-lg leading-tight">{link.title}</h2>
              <p className="text-gray-500 text-sm">{link.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Footer Simples */}
      <div className="mt-6 text-gray-600 text-sm">
        <p>&copy; 2026 BookFlix Oficial</p>
      </div>
    </div>
  );
}
