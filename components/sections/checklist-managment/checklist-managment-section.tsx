import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import { CheckSquare, Bell } from "lucide-react"
import { FeaturesCard } from "@/components/features/features-card"
import Image from "next/image"

export function ChecklistManagementSection() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="grid grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1">
              <span className="text-sm font-semibold text-primary">Gestão de Checklist</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Checklists Simplificados e Eficientes</h2>
            <p className="text-lg text-gray-600">
              Crie e gerencie checklists de forma fácil, garantindo que nenhum detalhe seja esquecido durante as
              inspeções e manutenções.
            </p>
            <FeaturesCard
              title="Templates Personalizáveis"
              description="Crie templates de checklist adaptados às necessidades específicas de cada tipo de veículo ou manutenção."
              icon={<CheckSquare className="h-6 w-6 text-primary" />}
            />
            <FeaturesCard
              title="Monitoramento de Eventos"
              description="Fique por dentro de tudo que acontece em qualquer setor com notificações em tempo real."
              icon={<Bell className="h-6 w-6 text-primary" />}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl border border-gray-200 bg-white p-2 shadow-xl"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Checklist Management"
              width={600}
              height={400}
              className="rounded-xl w-full"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

