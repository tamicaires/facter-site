import Image from "next/image"
import { Container } from "@/components/ui/container"

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center">
          <h2 className="text-sm font-semibold text-indigo-600">Sistema de manutenção</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Todas as informações em um único lugar</p>
        </div>
        <div className="mt-16 relative">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="flex-none rounded-lg bg-indigo-600/10 p-2">
                  <svg
                    className="h-6 w-6 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Automatic Invoice Payment</h3>
              </div>
              <p className="text-gray-600">
                Automatize seus pagamentos e mantenha o controle financeiro de forma eficiente e segura.
              </p>
            </div>
            {/* Repeat for other features */}
          </div>
          <div className="mt-16">
            <Image
              src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/features-preview.png`}
              alt="Features Preview"
              width={1200}
              height={800}
              className="rounded-xl border border-gray-200 shadow-2xl"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

