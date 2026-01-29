import { AlertTriangle, FileText, Info, ShieldCheck } from "lucide-react";

interface ISectionTermoDeUso {
  title: string;
  icon: React.ReactNode;
  content: string;
}

// Criado em 26/01/2026  23:27:27
export default function TermoDeUso() {
  const sections: ISectionTermoDeUso[] = [
    {
      title: "1. Aceitação dos Termos",
      icon: <ShieldCheck className="text-[#E50914]" size={24} />,
      content:
        "Ao acessar o Bookflix Oficial, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis. O projeto visa democratizar o acesso à leitura de forma totalmente gratuita.",
    },
    {
      title: "2. Cadastro e Acesso",
      icon: <Info className="text-[#29abe0]" size={24} />,
      content:
        "Para utilizar as funcionalidades de salvar favoritos e compartilhar livros, é necessário criar uma conta via E-mail ou vínculo com o Google (Gmail). Você é responsável por manter a segurança de sua conta.",
    },
    {
      title: "3. Uso da Plataforma",
      icon: <FileText className="text-purple-500" size={24} />,
      content:
        "O Bookflix Oficial permite a leitura e o compartilhamento de obras. É terminantemente proibido o uso da plataforma para disseminação de conteúdos que contenham material ofensivo.",
    },
    {
      title: "4. Status do Projeto",
      icon: <AlertTriangle className="text-yellow-500" size={24} />,
      content:
        "O aplicativo encontra-se em fase de desenvolvimento inicial. Instabilidades, bugs ou perda temporária de dados podem ocorrer. Encorajamos o reporte desses problemas em nosso canal oficial do Telegram.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#121212] pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Cabeçalho da Página */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            Termos de <span className="text-[#E50914]">Uso</span>
          </h1>
          <p className="text-gray-400 text-lg">Última atualização: 26 de Janeiro de 2026</p>
          <div className="w-24 h-1 bg-[#E50914] mx-auto rounded-full" />
        </div>

        {/* Conteúdo Principal */}
        <div className="space-y-8">
          <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/5 text-gray-300 leading-relaxed">
            <p className="mb-6">
              Bem-vindo ao <strong>Bookflix Oficial</strong>. Estes termos regem o seu uso do nosso aplicativo e
              serviços. Nosso objetivo é fornecer uma experiência de leitura acessível e comunitária.
            </p>

            <div className="grid gap-8">
              {sections.map((section: ISectionTermoDeUso) => (
                <div key={section.title} className="space-y-3 group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                      {section.icon}
                    </div>
                    <h2 className="text-xl font-bold text-white uppercase tracking-tight">{section.title}</h2>
                  </div>
                  <p className="pl-12 text-gray-400">{section.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Aviso de Modificação */}
          <div className="bg-red-600/10 border border-red-600/20 p-6 rounded-2xl flex items-start gap-4">
            <AlertTriangle className="text-red-500 shrink-0" size={24} />
            <p className="text-sm text-gray-400">
              <strong className="text-white">Atenção:</strong> Reservamos o direito de modificar estes termos a qualquer
              momento. Alterações significativas serão comunicadas através da nossa comunidade oficial no Telegram.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
