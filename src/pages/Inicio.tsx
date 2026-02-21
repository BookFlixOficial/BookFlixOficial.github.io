import { 
  ArrowDownCircle, 
  BookOpen, 
  ChevronRight, 
  Coffee, 
  Download, 
  Heart, 
  Send, 
  Smartphone, 
  Star, 
  Users, 
  FileDown,
  ShieldCheck
} from "lucide-react";

// Componente de Cartão de Funcionalidade integrado para evitar erros de importação
const FeatureCard = ({ icon: Icon, title, description, color }: { 
  icon: any, 
  title: string, 
  description: string, 
  color: string 
}) => (
  <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group">
    <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
      <Icon className="text-white" size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

export default function App() {
  const downloadLink = "/versions/bookflix-release-v1.0.0-snapshot.apk";

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
              <span>Versão v1.0.0 Disponível</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
              A sua biblioteca <br />
              <span className="text-[#E50914]">ilimitada e gratuita.</span>
            </h1>

            <p className="text-lg text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
              O BookFlix Oficial democratiza a leitura. Leia, compartilhe e descubra novas histórias totalmente de
              graça. Junte-se à revolução literária.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href={downloadLink}
                download
                className="bg-[#E50914] text-white px-10 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#b20710] transition-all shadow-xl shadow-red-600/20"
              >
                Baixar APK agora <Download size={20} />
              </a>
              <button 
                onClick={() => document.getElementById('recursos')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Saiba mais
              </button>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            {/* Mockup do App */}
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
                <div className="space-y-2">
                  <div className="h-4 bg-white/10 rounded w-full" />
                  <div className="h-4 bg-white/10 rounded w-3/4" />
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
            <FeatureCard
              icon={BookOpen}
              title="Acervo Completo"
              description="Milhares de títulos disponíveis para leitura imediata em nosso catálogo oficial."
              color="bg-red-600"
            />
            <FeatureCard
              icon={Users}
              title="Comunidade Ativa"
              description="Compartilhe seus próprios livros e ajude a expandir nossa biblioteca para todos."
              color="bg-blue-600"
            />
            <FeatureCard
              icon={Star}
              title="Favoritos"
              description="Salve suas obras favoritas para ler mais tarde e organize sua estante virtual."
              color="bg-yellow-500"
            />
          </div>
        </div>
      </section>

      {/* SEÇÃO DE DOAÇÃO (KO-FI) */}
      <section id="doar" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#29abe0]/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6">
          <div className="bg-[#1a1a1a] border border-[#29abe0]/20 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative z-10">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-[#29abe0]/10 text-[#29abe0] px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
                <Heart size={14} className="fill-current" /> Ajude o Projeto
              </div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Mantenha a nossa <br />
                <span className="text-[#29abe0]">biblioteca viva.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                O BookFlix é um projeto gratuito e sem anúncios. Sua doação nos ajuda a pagar
                os servidores e continuar desenvolvendo novos recursos para todos os leitores.
              </p>
              <div className="pt-4">
                <a
                  href="https://ko-fi.com/bookflixoficial"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-[#29abe0] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg shadow-[#29abe0]/20 transform hover:-translate-y-1"
                >
                  <Coffee size={24} /> Doe um café no Ko-fi
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 w-full md:w-1/3">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-gray-400 text-sm font-bold uppercase">Meta do Mês</span>
                  <span className="text-[#29abe0] font-black text-2xl">Servidores</span>
                </div>
                <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                  <div className="bg-[#29abe0] h-full w-[45%] rounded-full shadow-[0_0_100px_#29abe0]/20" />
                </div>
                <p className="text-xs text-gray-500 italic text-center">
                  "Sua contribuição garante o acesso gratuito para milhares de pessoas."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMUNIDADE E TELEGRAM */}
      <section id="comunidade" className="py-24 bg-[#181818]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-4xl font-black">Entre na nossa Comunidade</h2>
            <p className="text-gray-400 leading-relaxed">
              O Bookflix é feito por pessoas e para pessoas. No Telegram, você fica por dentro de 
              todas as atualizações e ajuda a moldar o futuro do projeto.
            </p>
            <ul className="space-y-4 inline-block md:block text-left">
              <li className="flex items-center gap-3 text-gray-300">
                <div className="bg-blue-500/20 p-1 rounded-full">
                  <ChevronRight size={16} className="text-blue-500" />
                </div>
                Receba alertas de novos livros adicionados.
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="bg-blue-500/20 p-1 rounded-full">
                  <ChevronRight size={16} className="text-blue-500" />
                </div>
                Sugira melhorias e novos recursos.
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="bg-blue-500/20 p-1 rounded-full">
                  <ChevronRight size={16} className="text-blue-500" />
                </div>
                Converse com outros leitores apaixonados.
              </li>
            </ul>
            <div className="pt-4">
              <a
                href="https://t.me/BookFlixOficial"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#24A1DE] text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-xl shadow-blue-500/10"
              >
                <Send size={20} /> Entrar no Canal Oficial
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-3xl border border-white/5 space-y-6 text-center">
            <Smartphone size={48} className="mx-auto text-red-500" />
            <h3 className="text-2xl font-bold">Leitura em qualquer lugar</h3>
            <p className="text-gray-400">
              Leve sua estante no bolso. Nosso app é leve, seguro e otimizado para proporcionar 
              a melhor leitura no seu Android.
            </p>
            <div className="pt-4 border-t border-white/10 flex justify-center gap-8">
              <div>
                <div className="text-2xl font-black">R$ 0</div>
                <div className="text-xs text-gray-500 uppercase font-bold">Custo</div>
              </div>
              <div>
                <div className="text-2xl font-black">∞</div>
                <div className="text-xs text-gray-500 uppercase font-bold">Livros</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: BAIXAR APP (CTA Direto) */}
      <section id="baixar" className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-[#181818] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 space-y-6">
                <div className="w-16 h-16 bg-[#E50914] rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/20 mb-4">
                  <FileDown className="text-white" size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">
                  Download <br />
                  <span className="text-[#E50914]">Bookflix APK</span>
                </h2>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Baixe a versão oficial v1.0.0. Por ser distribuído fora da Play Store, seu celular pode exibir avisos de segurança. 
                  Fique tranquilo: o arquivo é <strong>totalmente seguro</strong> e livre de malwares.
                </p>
                <div className="flex items-start gap-3 bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl">
                    <ShieldCheck className="text-blue-500 shrink-0" size={20} />
                    <p className="text-xs text-blue-200">O app pode solicitar "Enviar para Análise" via Play Protect. Você pode enviar sem problemas para validação do Google.</p>
                </div>
                <div className="pt-2">
                  <a
                    href={downloadLink}
                    download
                    className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all shadow-xl"
                  >
                    <Download size={22} /> Baixar Arquivo .APK
                  </a>
                </div>
              </div>

              <div className="bg-white/5 p-8 md:p-12 flex flex-col justify-center gap-6 border-l border-white/5">
                <h3 className="text-white font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                  <ArrowDownCircle size={18} className="text-[#E50914]" /> Passo a Passo
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold text-white border border-white/10">
                      1
                    </div>
                    <p className="text-gray-300 text-sm">
                      Baixe o APK e permita a <strong>instalação de fontes desconhecidas</strong> se solicitado.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold text-white border border-white/10">
                      2
                    </div>
                    <p className="text-gray-300 text-sm">
                      Ao abrir, faça login usando seu <strong>e-mail</strong> (único método disponível nesta versão).
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold text-white border border-white/10">
                      3
                    </div>
                    <p className="text-gray-300 text-sm">
                      Aguarde a verificação de segurança, clique em <strong>Instalar</strong> e, ao finalizar, basta clicar em <strong>Abrir</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}