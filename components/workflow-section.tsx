import Image from "next/image"
import { Container } from "@/components/ui/container"

export function WorkflowSection() {
  return (
    <section className="py-24 bg-indigo-600">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <Image
              src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/workflow-preview.png`}
              alt="Workflow Preview"
              width={600}
              height={800}
              className="rounded-xl bg-indigo-500/10 p-4 backdrop-blur-sm"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="rounded-full bg-indigo-500/10 px-4 py-1 text-sm font-semibold text-white w-fit">
              Checklist Personalizado
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">Inicie Inspeções em Segundos</h2>
            <p className="mt-4 text-lg text-indigo-200">
              Crie checklists personalizados para cada tipo de inspeção e mantenha o padrão de qualidade em todas as
              manutenções.
            </p>
            {/* Add workflow steps */}
          </div>
        </div>
      </Container>
    </section>
  )
}

