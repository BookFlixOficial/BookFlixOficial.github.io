import type React from "react";

// Criado em 26/01/2026  22:35:20
interface FeatureCardProps {
  readonly icon: React.ComponentType<{ className?: string; size?: number }>;
  readonly title: string;
  readonly description: string;
  readonly color: string;
}

export default function FeatureCard({ icon: Icon, title, description, color }: FeatureCardProps) {
  return (
    <div className="bg-[#181818] p-8 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all group text-left">
      <div
        className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
      >
        <Icon className="text-white" size={28} />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}
