import { 
  ArrowDownCircle, 
  BookOpen, 
  Coffee, 
  Download, 
  Star, 
  Users, 
  FileDown,
  ShieldCheck
} from "lucide-react";
import { FeatureCard } from "../components/card/FeatureCard";
import { useEffect } from "react";

export default function Home() {
  const versionLastApk = "v2.0.0";
  const downloadLink = `https://bookflixoficial.github.io/versions/bookflix-release-${versionLastApk}-snapshot.apk`;

  // Lógica para Scroll Automático via Hash (#baixar)
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Pequeno timeout para garantir que o DOM renderizou
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    handleHashScroll();
    // Escuta mudanças de hash sem recarregar a página
    window.addEventListener('hashchange', handleHashScroll);
    return () => window.removeEventListener('hashchange', handleHashScroll);
  }, []);

  return (
    <div className="bg-[#121212] text-white selection:bg-red-500 selection:text-white min-h-screen font-sans">
      {/* HERO SECTION */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/10 to-[#121212] z-0" />
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-1.5 rounded-full text-red-500 text-sm font-semibold tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span>Versão {versionLastApk} Disponível</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
              A sua biblioteca <br />
              <span className="text-[#E50914]">ilimitada e gratuita.</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
              O BookFlix Oficial democratiza a leitura. Leia, compartilhe e descubra novas histórias totalmente de graça.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#baixar" className="bg-[#E50914] text-white px-10 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#b20710] transition-all shadow-xl shadow-red-600/20">
                Baixar APK agora <Download size={20} />
              </a>
              <button onClick={() => document.getElementById('recursos')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                Saiba mais
              </button>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="relative z-10 w-[280px] md:w-[320px] aspect-[9/19] bg-[#050505] rounded-[3rem] border-[8px] border-[#222] shadow-[0_0_100px_rgba(229,9,20,0.15)] overflow-hidden">
              <div className="w-full h-full p-4 flex flex-col gap-4">
                <div className="h-6 w-1/2 bg-white/10 rounded-full mt-4" />
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-[3/4] bg-white/5 rounded-lg animate-pulse" />
                  <div className="aspect-[3/4] bg-white/5 rounded-lg animate-pulse" />
                </div>
                <div className="h-40 bg-red-600/20 rounded-xl flex items-center justify-center">
                    <BookOpen className="text-red-500/40" size={48} />
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-red-600/5 blur-[120px] rounded-full z-0" />
          </div>
        </div>
      </section>

      {/* RECURSOS */}
      <section id="recursos" className="py-24 bg-[#121212]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black">Funcionalidades do App</h2>
            <p className="text-gray-400">Tudo o que você precisa para uma leitura confortável e comunitária.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon={BookOpen} title="Acervo Completo" description="Milhares de títulos disponíveis para leitura imediata." color="bg-red-600" />
            <FeatureCard icon={Users} title="Comunidade Ativa" description="Compartilhe seus próprios livros e ajude a expandir a biblioteca." color="bg-blue-600" />
            <FeatureCard icon={Star} title="Favoritos" description="Salve suas obras favoritas para ler mais tarde." color="bg-yellow-500" />
          </div>
        </div>
      </section>

      {/* SEÇÃO DE DOAÇÃO */}
      <section id="doar" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#29abe0]/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="bg-[#1a1a1a] border border-[#29abe0]/20 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-black leading-tight">Mantenha a nossa <span className="text-[#29abe0]">biblioteca viva.</span></h2>
              <p className="text-gray-400 text-lg">O BookFlix é gratuito e sem anúncios. Sua doação ajuda com os servidores.</p>
              <a href="https://ko-fi.com/bookflixoficial" target="_blank" className="inline-flex items-center gap-3 bg-[#29abe0] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1">
                <Coffee size={24} /> Doe um café no Ko-fi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: BAIXAR APP */}
      <section id="baixar" className="py-24 bg-[#0a0a0a] border-y border-white/5 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-[#181818] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 space-y-6">
                <div className="w-16 h-16 bg-[#E50914] rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/20 mb-4">
                  <FileDown className="text-white" size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">Download <br /><span className="text-[#E50914]">Bookflix APK</span></h2>
                <p className="text-gray-400 text-sm">
                  Baixe a versão oficial {versionLastApk}. Por ser um APK externo, seu celular pode alertar sobre segurança. 
                  O arquivo é <strong>totalmente seguro</strong> e verificado.
                </p>
                <div className="flex items-start gap-3 bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">
                    <ShieldCheck className="text-blue-500 shrink-0" size={20} />
                    <p className="text-xs text-blue-200">Se o Google pedir para "Enviar para Análise", pode enviar sem medo para validação.</p>
                </div>
                <div className="pt-2">
                  <a href={downloadLink} download className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all w-full">
                    <Download size={22} /> Baixar Arquivo .APK
                  </a>
                </div>
              </div>

              <div className="bg-white/5 p-8 md:p-12 flex flex-col justify-center gap-6 border-l border-white/5">
                <h3 className="text-white font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                  <ArrowDownCircle size={18} className="text-[#E50914]" /> Passo a Passo
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    <p className="text-gray-300 text-sm">Baixe o APK e permita a instalação de fontes desconhecidas.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    <p className="text-gray-300 text-sm">Faça login exclusivamente usando seu <strong>e-mail</strong>.</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    <p className="text-gray-300 text-sm">Após a verificação, instale e clique em <strong>Abrir</strong>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};