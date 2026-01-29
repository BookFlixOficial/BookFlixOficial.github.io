import { Home, Search } from "lucide-react";
import { Link } from "react-router-dom";

// Criado em 26/01/2026  21:39:15
export default function Erro404() {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center text-center px-6">
    <div className="relative mb-8">
      <div className="text-[150px] md:text-[200px] font-black leading-none opacity-10 select-none text-white">
        404
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-600/40 rotate-12">
          <Search className="text-white" size={40} />
        </div>
      </div>
    </div>
    <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white">
      Capítulo não encontrado
    </h1>
    <p className="text-gray-400 max-w-md mx-auto mb-10 leading-relaxed">
      Parece que a página que procuras foi removida ou mudou de nome. Que tal voltar ao início do livro?
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <Link 
        to="/"
        className="bg-white text-black px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-all"
      >
        <Home size={20} /> Ir para o Início
      </Link>
    </div>
  </div>
  );
}
