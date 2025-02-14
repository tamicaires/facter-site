import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { FileText, BarChart } from "lucide-react"
import { FeaturesCard } from "@/components/features/features-card"
import Image from "next/image"

export function WorkOrderManagementSection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl border border-gray-200 bg-white p-2 shadow-xl"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Work Order Management"
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
            className="space-y-8"
          >
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1">
              <span className="text-sm font-semibold text-primary">Gestão de Ordens de Serviço</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Fluxo Fluido de Ordens de Serviço</h2>
            <p className="text-lg text-gray-600">
              Gerencie suas ordens de serviço de forma eficiente, com acesso rápido a todos os dados relevantes.
            </p>
            <FeaturesCard
              title="Visualização Completa"
              description="Acesse analytics, peças e serviços solicitados para cada ordem de serviço em um único lugar."
              icon={<FileText className="h-6 w-6 text-primary" />}
            />
            <FeaturesCard
              title="Análise de Dados"
              description="Obtenha insights valiosos com analytics detalhados para cada ordem de serviço."
              icon={<BarChart className="h-6 w-6 text-primary" />}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

