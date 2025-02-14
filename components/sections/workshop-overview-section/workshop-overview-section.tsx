import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Eye, History, ListEnd } from "lucide-react";
import { FeaturesCard } from "@/components/features/features-card";
import Image from "next/image";
import workshopDetailsView from "@/public/workshop-details-view.png";
import { Badge } from "@/components/ui/badge";

export function WorkshopOverviewSection() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 items-center px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="w-full text-center">
              <Badge className="text-sm font-semibold text-primary bg-primary/15 px-6 text-center">
                Visão Geral da Oficina
              </Badge>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center sm:text-left">
              Visualização Completa em Um Clique
            </h2>
            <p className="text-lg text-gray-600 text-center sm:text-left">
              Obtenha uma visão geral de toda a sua oficina instantaneamente,
              permitindo decisões rápidas e eficientes.
            </p>
            <FeaturesCard
              title="Painel Intuitivo"
              description="Visualize o status de todos os veículos, ordens de serviço e tarefas pendentes em um único painel."
              icon={<Eye className="h-6 w-6 text-primary" />}
            />
            <FeaturesCard
              title="Análise de Fluxo de Fila"
              description="Preveja picos de demanda e otimize a alocação de equipe com base no histórico de fluxo de veículos em fila."
              icon={<ListEnd className="h-6 w-6 text-primary" />}
            />
            <FeaturesCard
              title="Gestão de Tempo em Tempo Real"
              description="Acompanhe o tempo médio de permanência e fila dos veículos, com metas e indicadores claros para otimizar sua operação."
              icon={<History className="h-6 w-6 text-primary" />}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative "
          >
            <Image
              src={workshopDetailsView}
              alt="Workshop Overview"
              width={600}
              height={400}
              className="rounded-xl w-full mr-4 sm:mr-0"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
