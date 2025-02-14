import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { Users, Clock } from "lucide-react";
import { FeaturesCard } from "@/components/features/features-card";
import Image from "next/image";
import activities from "@/public/activities.png";
import { Badge } from "@/components/ui/badge";

export function ServiceManagementSection() {
  return (
    <section className="py-14 sm:py-20 bg-white px-7 sm:px-0">
      <Container>
        <div className="grid sm:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative hidden sm:block"
          >
            <Image
              src={activities}
              alt="Service Management"
              width={600}
              height={400}
              className="rounded-xl w-full"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="w-full text-center">
              <Badge className="text-sm font-semibold text-white bg-white/10 px-6 text-center">
                Você no Controle
              </Badge>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center sm:text-left">
              Controle Total da Sua Operação
            </h2>
            <p className="text-lg text-gray-600 text-center sm:text-left px-3">
              Acompanhe todas as atividades e solicitações em tempo real,
              mantendo sua oficina sempre organizada e eficiente.
            </p>
            <FeaturesCard
              title="Atividades em Tempo Real"
              description="Monitore todas as ações importantes da sua oficina em um único lugar."
              icon={<Users className="h-6 w-6 text-primary" />}
            />
            <FeaturesCard
              title="Gestão de Solicitações de Peças"
              description="Controle centralizado de todas as solicitações de peças e serviços."
              icon={<Clock className="h-6 w-6 text-primary" />}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative sm:hidden"
          >
            <Image
              src={activities}
              alt="Service Management"
              width={600}
              height={400}
              className="rounded-xl w-full"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
