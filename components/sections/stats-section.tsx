import { Brain, Clock, LineChart, Sparkles } from "lucide-react";
import checklistSectionBg from "@/public/checklist-section-bg.png";

export function StatsSection() {
  return (
    <section
      className="border-y"
      style={{
        backgroundImage: `url(${checklistSectionBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-gray-50" />
            <h3 className="text-3xl text-white font-bold">98%</h3>
          </div>
          <p className="text-sm text-gray-100">
            Precisão nas Previsões
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <div className="flex items-center gap-2">
            <LineChart className="h-5 w-5 text-gray-50" />
            <h3 className="text-3xl text-white font-bold">2.5x</h3>
          </div>
          <p className="text-sm text-gray-100">Mais Produtividade</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-gray-50" />
            <h3 className="text-3xl text-white font-bold">-45%</h3>
          </div>
          <p className="text-sm text-gray-100">Tempo de Manutenção</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-gray-50" />
            <h3 className="text-3xl text-white font-bold">+300</h3>
          </div>
          <p className="text-sm text-gray-100">Oficinas Satisfeitas</p>
        </div>
      </div>
    </section>
  );
}
