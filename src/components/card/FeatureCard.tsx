
interface FeatureCardProps { 
  icon: any, 
  title: string, 
  description: string, 
  color: string 
}

// Componente de Cartão de Funcionalidade integrado para evitar erros de importação
export const FeatureCard = ({ icon: Icon, title, description, color }: FeatureCardProps) => (
  <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group">
    <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
      <Icon className="text-white" size={24} />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);