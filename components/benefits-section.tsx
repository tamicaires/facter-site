import Image from "next/image"
import { Container } from "@/components/ui/container"

export function BenefitsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Benefícios do Sistema</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Gerencie todos os dados importantes diretamente da Ordem de Serviço
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="relative overflow-hidden rounded-lg border border-gray-200 p-8">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-semibold text-gray-900">Gestão de Serviços</h3>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <div className="mt-4 flex flex-col gap-2">{/* Service management items */}</div>
            </div>
            {/* Repeat for other benefit cards */}
          </div>
          <div>
            <Image
              src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/benefits-preview.png`}
              alt="Benefits Preview"
              width={600}
              height={800}
              className="rounded-xl border border-gray-200 shadow-xl"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

