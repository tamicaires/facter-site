import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

export function HeroSection() {
  return (
    <section className="relative bg-[#1E1B4B] pt-20 pb-32 overflow-hidden">
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Aumente em 42% a produtividade da manutenção de suas frotas
          </h1>
          <p className="mt-6 text-lg text-indigo-200/80">
            Tenha controle total sobre os dados da sua frota, automatize processos e tome decisões baseadas em métricas
            reais.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-white/90">
              Começar Agora
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/20 bg-white/5 hover:bg-white/10">
              Agendar Demo
            </Button>
          </div>
        </div>
        <div className="mt-16 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[800px] h-[500px] bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-3xl" />
          </div>
          <div className="relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4 backdrop-blur-sm">
            <Image
              src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/dashboard-preview.png`}
              alt="Dashboard Preview"
              width={1200}
              height={800}
              className="rounded-lg w-full"
              priority
            />
          </div>
        </div>
      </Container>
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/20 to-transparent" />
    </section>
  )
}

