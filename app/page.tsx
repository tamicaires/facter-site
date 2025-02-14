"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import workshopView from "@/public/workshop-view.png";
import heroPatterns from "@/public/hero-bg.png";
import workorderView from "@/public/workorder-view.png";
import { FeaturesCard } from "@/components/features/features-card";
import { FileText, LayoutDashboard, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { WorkshopOverviewSection } from "@/components/sections/workshop-overview-section/workshop-overview-section";
import { ChecklistManagementSection } from "@/components/sections/checklist-managment/checklist-managment-section";
import { ServiceManagementSection } from "@/components/sections/service-managment-section/service-managment-section";
import { Footer } from "@/components/sections/footer";
import { useEffect, useState } from "react";
import logotipo from "@/public/logotipo.png";
import { SectionTitle } from "@/components/ui/section-title";
import { SectionDescription } from "@/components/ui/section-description";
import { BenefitsCard } from "@/components/benefits-card";
import serviceBenefits from "@/public/service-benefits.png";
import partBenefits from "@/public/part-benefits.png";
import historyBenefits from "@/public/history-benefits.png";
import checklistSectionBg from "@/public/checklist-section-bg.png";
import checklistView from "@/public/checklit-view.png";
import { VerticalSteps } from "@/components/ui/vertical-steps";
import { StatsSection } from "@/components/sections/stats-section";
import { CallToActionSection } from "@/components/sections/call-to-action";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled ? "bg-primary" : "bg-transparent"
      } border-b border-white/40 bg-hero-pattern`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src={logotipo} alt="Facter Truck" width={35} height={35} />
            <span className="text-xl font-bold text-white">Facter Truck</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              className="text-sm text-white hover:text-white/80 transition-colors"
              href="#recursos"
            >
              Recursos
            </Link>
            <Link
              className="text-sm text-white hover:text-white/80 transition-colors"
              href="#workflow"
            >
              WorkFlow
            </Link>
            <Link
              className="text-sm text-white hover:text-white/80 transition-colors"
              href="#como-funciona"
            >
              Como funciona
            </Link>
            <Link
              className="text-sm text-white hover:text-white/80 transition-colors"
              href="#empresa"
            >
              Empresa
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:text-white/80">
              Login
            </Button>
            <Button className="bg-white text-primary hover:bg-white/90 font-semibold rounded-full">
              Testar grátis
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-44 overflow-hidden">
      <Container className="relative z-10 px-7 sm:px-0">
        <div className="mx-auto max-w-5xl text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            Aumente em 42% a produtividade da manutenção de suas frotas
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Sistema completo que analisa seus dados para otimizar processos,
            prever prazos e auxiliar na tomada de decisões baseada em métricas
            reais.
          </motion.p>
          <motion.div
            className="mt-10 flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 rounded-full"
            >
              Começar Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-none bg-custom-black hover:bg-custom-black/90 hover:text-white rounded-full"
            >
              Agendar Demo
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative">
            <Image
              src={workshopView || "/placeholder.svg"}
              alt="Dashboard Preview"
              width={1400}
              height={800}
              className="rounded-lg w-full"
              priority
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="bg-white" id="recursos">
      <Container>
        <div className="mt-16 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-0">
          <div className="">
            <div className="max-w-[403px]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="ml-20">
                  <Badge className="text-sm font-semibold text-primary bg-primary/15 px-6 text-center">
                    Sistema de manutenção
                  </Badge>
                </div>
                <SectionTitle className="text-center sm:text-left">
                  Tudo que precisa em um único lugar
                </SectionTitle>
                <SectionDescription className="text-center sm:text-left">
                  Gerencie suas ordens de serviço de forma eficiente, com acesso
                  rápido a todos os dados relevantes.
                </SectionDescription>
              </motion.div>
            </div>
            <div className="pt-7 space-y-7">
              <FeaturesCard
                title="Visualização Completa"
                description="Acesse analytics, peças e serviços solicitados para cada ordem de serviço em um único lugar."
                icon={<FileText className="h-6 w-6 text-primary" />}
              />
              <FeaturesCard
                title="Análise de Áreas críticas"
                description="Identifique automáticamente áreas críticas de cada ordem de serviço e planeje sua manutenção."
                icon={<LayoutDashboard className="h-6 w-6 text-primary" />}
              />
              <FeaturesCard
                title="Nenhuma informação é perdida"
                description="Funcionalidade de notas diretamente na Ordem de Serviço, para sua equipe não perder nada."
                icon={<MessageSquare className="h-6 w-6 text-primary" />}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-end pt-6 sm:pt-0">
              <Image
                src={workorderView || "/placeholder.svg"}
                alt="Features Preview"
                width={746}
                height={717}
                className="rounded-xl w-full"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="py-20 bg-gray-50/50" id="como-funciona">
      <Container className="px-7 sm:px-0">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            {/* <h2 className="text-base font-semibold leading-7 text-primary">
              Benefícios do Sistema
            </h2> */}
            <Badge className="text-sm font-semibold text-primary bg-primary/15 px-6 text-center">
              Benefícios do Sistema
            </Badge>
            <SectionTitle className="text-center">
              Gerencie todos os dados importantes diretamente da Ordem de
              Serviço
            </SectionTitle>
            <SectionDescription className="text-center">
              Nunca mais perca produtividade com processos morosos.
            </SectionDescription>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row justify-between gap-8 mt-10"
        >
          <BenefitsCard
            title="Gestão de Serviços"
            description="Gerencie seus serviços com total controle e eficiência. Acompanhe cada etapa em tempo real, reduza o tempo de inatividade e maximize a produtividade da sua operação."
            image={serviceBenefits}
          />
          <BenefitsCard
            title="Gestão de Peças"
            description="Solicite peças diretamente da OS de forma ágil e integrada. Elimine atrasos, evite falhas no processo e garanta maior eficiência na manutenção."
            image={partBenefits}
          />
          <BenefitsCard
            title="Histórico Completo"
            description="Monitore todas as ações da OS com um histórico detalhado. Rastreie intervenções, substituições e manutenções para decisões mais estratégicas."
            image={historyBenefits}
          />
          {/* <div className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
            <div className="grid grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Gestão de Serviços</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Serviço</span>
                    <span className="text-sm font-medium">Status</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-full w-3/4 bg-primary rounded-full" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Gestão de Suprimentos</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Estoque</span>
                    <span className="text-sm font-medium">Quantidade</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-full w-1/2 bg-primary rounded-full" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Histórico</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Completo</span>
                    <span className="text-sm font-medium">100%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-full w-full bg-primary rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </motion.div>
      </Container>
    </section>
  );
}

function ChecklistSection() {
  return (
    <section
      className="py-16 w-full "
      id="workflow"
      style={{
        backgroundImage: `url(${checklistSectionBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <div className="grid sm:grid-cols-2 gap-16 justify-center sm:justify-start items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative hidden sm:block"
          >
            <Image
              src={checklistView}
              alt="Checklist Management"
              width={741}
              // height={573}
              className="rounded-xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <div className="w-full text-center">
              <Badge className="text-sm font-semibold text-white bg-white/10 px-6 text-center">
                Checklist Personalizáveis
              </Badge>
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-white text-center sm:text-left">
              Inicie Inspeções em Segundos
            </h2>
            <p className="text-lg text-gray-200 text-center sm:text-left">
              Crie checklists personalizados para cada tipo de inspeção e
              mantenha o padrão de qualidade em todas as manutenções.
            </p>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative sm:hidden"
            >
              <Image
                src={checklistView}
                alt="Checklist Management"
                width={741}
                // height={573}
                className="rounded-xl w-full"
              />
            </motion.div>
            <VerticalSteps />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div
        style={{
          backgroundImage: `url(${heroPatterns.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <Navbar /> */}
        <HeroSection />
      </div>
      <FeaturesSection />
      <BenefitsSection />
      <StatsSection />
      <WorkshopOverviewSection />
      <ChecklistSection />
      <ServiceManagementSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}
