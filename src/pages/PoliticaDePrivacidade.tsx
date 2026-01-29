import { Database, Eye, Globe, Lock, UserCheck } from "lucide-react";

interface ISectionPoliticaDePrivacidade {
  title: string;
  icon: React.ReactNode;
  content: string;
}

// Criado em 26/01/2026  23:29:31
export default function PoliticaDePrivacidade() {
  const sections: ISectionPoliticaDePrivacidade[] = [
    {
      title: "1. Coleta de Informações",
      icon: <Eye className="text-[#E50914]" size={24} />,
      content:
        "Coletamos informações básicas de identificação, como nome e e-mail, quando você opta por criar uma conta via Google ou e-mail direto. Esses dados são utilizados exclusivamente para personalizar sua experiência e salvar seu progresso de leitura.",
    },
    {
      title: "2. Segurança dos Dados",
      icon: <Lock className="text-[#29abe0]" size={24} />,
      content:
        "Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração ou destruição. Suas senhas são criptografadas e nunca armazenadas em texto simples.",
    },
    {
      title: "3. Uso de Cookies",
      icon: <Database className="text-orange-500" size={24} />,
      content:
        "Utilizamos cookies essenciais para manter sua sessão ativa e lembrar de suas preferências de interface. Não utilizamos cookies de rastreamento de terceiros para fins publicitários invasivos.",
    },
    {
      title: "4. Compartilhamento com Terceiros",
      icon: <Globe className="text-green-500" size={24} />,
      content:
        "O Bookflix Oficial não vende ou aluga seus dados pessoais. O compartilhamento ocorre apenas com serviços essenciais (como Firebase para autenticação).",
    },
    {
      title: "5. Seus Direitos",
      icon: <UserCheck className="text-purple-500" size={24} />,
      content:
        "Você tem o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento através das configurações do seu perfil no aplicativo ou entrando em contato com nossa equipe de suporte.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#121212] pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Cabeçalho da Página */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            Política de <span className="text-[#E50914]">Privacidade</span>
          </h1>
          <p className="text-gray-400 text-lg">Última atualização: 26 de Janeiro de 2026</p>
          <div className="w-24 h-1 bg-[#E50914] mx-auto rounded-full" />
        </div>

        {/* Conteúdo Principal */}
        <div className="space-y-8">
          <div className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/5 text-gray-300 leading-relaxed">
            <p className="mb-8 border-b border-white/5 pb-6">
              Esta Política de Privacidade descreve como o <strong>Bookflix Oficial</strong> coleta, usa e protege as
              suas informações. Ao utilizar nossa plataforma, você concorda com as práticas descritas neste documento.
            </p>

            <div className="grid gap-10">
              {sections.map((section: ISectionPoliticaDePrivacidade) => (
                <div key={section.title} className="space-y-4 group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all duration-300 transform group-hover:scale-110">
                      {section.icon}
                    </div>
                    <h2 className="text-xl font-bold text-white uppercase tracking-tight">{section.title}</h2>
                  </div>
                  <p className="pl-16 text-gray-400 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rodapé da Página de Privacidade */}
          <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 text-center">
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider">Dúvidas sobre Privacidade?</h3>
            <p className="text-gray-400 text-sm mb-6">
              Se você tiver qualquer dúvida sobre como tratamos seus dados, entre em contato diretamente com nossa
              equipe, que terá prazer em ajudar, pelo Telegram, na descrição do canal terá o link para o grupo onde terá
              o suporte necessário.
            </p>
            <a
              href="https://t.me/BookFlixOficial"
              className="inline-block bg-[#E50914] hover:bg-[#b20710] text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
            >
              Falar com nossa equipe de Suporte
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
