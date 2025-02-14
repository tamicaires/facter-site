import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  BarChart3,
  Clock,
  ClipboardCheck,
  Settings,
  PenToolIcon as Tool,
  Truck,
  LineChart,
  LayoutDashboard,
  CheckCircle,
  Users,
  Activity,
  AlertCircle,
  Timer,
  FileText,
  Brain,
  Sparkles,
  Webhook,
} from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Webhook className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Facter Truck</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium hover:text-primary" href="#features">
              Recursos
            </Link>
            <Link className="text-sm font-medium hover:text-primary" href="#dashboard">
              Dashboard
            </Link>
            <Link className="text-sm font-medium hover:text-primary" href="#workflow">
              Workflow
            </Link>
            <Link className="text-sm font-medium hover:text-primary" href="#analytics">
              Analytics
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline">Login</Button>
            <Button>Começar Agora</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container px-4 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-4">
            <Badge className="w-fit" variant="secondary">
              Sistema Inteligente de Gestão
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Otimize a gestão de{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                manutenção da sua frota
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Sistema completo que analisa seus dados para otimizar processos, prever prazos e auxiliar na tomada de
              decisões baseada em métricas reais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gap-2">
                Agendar Demo <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Ver Vídeo
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-[600px] w-full overflow-hidden rounded-lg border bg-background shadow-xl">
              <div className="absolute top-4 right-4 z-10">
                <Card className="w-[300px] p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Manutenções Hoje</h4>
                      <Badge variant="secondary">+12.5%</Badge>
                    </div>
                    <div className="h-[100px] w-full bg-muted rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=100&width=300"
                        alt="Graph"
                        width={300}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Card>
              </div>
              <div className="absolute bottom-4 left-4 z-10">
                <Card className="w-[250px] p-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Tempo Médio</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold">2.5h</span>
                      <Timer className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </Card>
              </div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Dashboard Preview"
                width={800}
                height={600}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
            </div>
          </div>
        </div>
      </section>

      {/* New Order Service Section */}
      <section id="order-service" className="container py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="secondary">Ordem de Serviço Inteligente</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Todas as informações em um só lugar
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Visualize e gerencie todos os aspectos da ordem de serviço com métricas detalhadas e análises em tempo real.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          <Card className="lg:col-span-8 p-6">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold">OS #12345</h3>
                  <p className="text-muted-foreground">Manutenção Preventiva - Carreta 001</p>
                </div>
                <Badge className="px-4 py-1">Em Andamento</Badge>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="p-4">
                  <div className="flex flex-col space-y-2">
                    <span className="text-sm text-muted-foreground">Tempo Previsto</span>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="text-2xl font-bold">2h 30m</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Baseado em 150 serviços similares</span>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="flex flex-col space-y-2">
                    <span className="text-sm text-muted-foreground">Progresso</span>
                    <div className="flex items-center gap-2">
                      <Activity className="h-5 w-5 text-primary" />
                      <span className="text-2xl font-bold">75%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-primary rounded-full" />
                    </div>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="flex flex-col space-y-2">
                    <span className="text-sm text-muted-foreground">Áreas Críticas</span>
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-destructive" />
                      <span className="text-2xl font-bold">2</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Requer atenção imediata</span>
                  </div>
                </Card>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold">Análise de Tempo</h4>
                <div className="h-[200px] w-full bg-muted rounded-md overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=800"
                    alt="Time Analysis"
                    width={800}
                    height={200}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Card>
          <div className="lg:col-span-4 space-y-6">
            <Card className="p-6">
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Detalhes do Serviço
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Tipo</span>
                    <span className="text-sm font-medium">Preventiva</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Prioridade</span>
                    <Badge variant="secondary">Alta</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Mecânico</span>
                    <span className="text-sm font-medium">João Silva</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Box</span>
                    <span className="text-sm font-medium">#03</span>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Peças Utilizadas
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Filtro de Óleo</span>
                    <Badge variant="outline">2 un</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Óleo Motor</span>
                    <Badge variant="outline">20 L</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Filtro de Ar</span>
                    <Badge variant="outline">1 un</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="border-y bg-muted/50">
        <div className="container grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              <h3 className="text-3xl font-bold">98%</h3>
            </div>
            <p className="text-sm text-muted-foreground">Precisão nas Previsões</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <div className="flex items-center gap-2">
              <LineChart className="h-5 w-5 text-primary" />
              <h3 className="text-3xl font-bold">2.5x</h3>
            </div>
            <p className="text-sm text-muted-foreground">Mais Produtividade</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <h3 className="text-3xl font-bold">-45%</h3>
            </div>
            <p className="text-sm text-muted-foreground">Tempo de Manutenção</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="text-3xl font-bold">+300</h3>
            </div>
            <p className="text-sm text-muted-foreground">Oficinas Satisfeitas</p>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="container py-24 md:py-32">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="secondary">Dashboard Inteligente</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Visão completa da sua oficina</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Dashboard intuitivo com todas as informações essenciais em um só lugar. Monitore boxes, ordens de serviço e
            KPIs em tempo real.
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Dashboard Overview"
              width={600}
              height={400}
              className="rounded-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-lg font-semibold">Visão Geral da Oficina</h3>
              <p className="text-sm text-muted-foreground">Acompanhe todos os boxes e manutenções em andamento</p>
            </div>
          </div>
          <div className="grid gap-4">
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-2">
                  <LayoutDashboard className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">KPIs em Tempo Real</h3>
                  <p className="text-sm text-muted-foreground">Métricas essenciais atualizadas instantaneamente</p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Previsões Inteligentes</h3>
                  <p className="text-sm text-muted-foreground">
                    IA que prevê tempo de conclusão e próximas manutenções
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Gestão de Equipe</h3>
                  <p className="text-sm text-muted-foreground">Acompanhe produtividade e distribua tarefas</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="border-t bg-muted/50">
        <div className="container py-24 md:py-32">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <Badge variant="secondary">Workflow Inteligente</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Gestão completa do seu workflow
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Sistema inteligente que automatiza processos e prevê necessidades, permitindo que sua equipe foque no que
              realmente importa.
            </p>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Ordens de Serviço"
                  width={400}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/50" />
              </div>
              <div className="relative p-6">
                <ClipboardCheck className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-2xl font-bold">Ordens de Serviço</h3>
                <p className="mt-2 text-muted-foreground">
                  Gestão fluida com visualização completa de dados, analytics e histórico
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Tracking em tempo real</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Histórico completo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Previsão de conclusão</span>
                  </li>
                </ul>
              </div>
            </Card>
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Checklist"
                  width={400}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/50" />
              </div>
              <div className="relative p-6">
                <Tool className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-2xl font-bold">Checklist Inteligente</h3>
                <p className="mt-2 text-muted-foreground">
                  Templates personalizáveis e acompanhamento em tempo real das inspeções
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Templates customizáveis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Automação de processos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Histórico de eventos</span>
                  </li>
                </ul>
              </div>
            </Card>
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Analytics"
                  width={400}
                  height={400}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/50" />
              </div>
              <div className="relative p-6">
                <BarChart3 className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-2xl font-bold">Analytics Avançado</h3>
                <p className="mt-2 text-muted-foreground">
                  Análise completa de produtividade e desempenho da sua oficina
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Métricas em tempo real</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Relatórios personalizados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Previsões com IA</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-24 md:py-32">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="secondary">Recursos Avançados</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tudo que sua oficina precisa</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Sistema completo com recursos avançados para gestão total da sua oficina
          </p>
        </div>
        <div className="mt-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Gestão de Serviços"
                width={600}
                height={400}
                className="rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-semibold">Gestão de Serviços</h3>
                <p className="text-sm text-muted-foreground">Controle total sobre serviços e designações</p>
              </div>
            </div>
            <div className="grid gap-4">
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Previsão Inteligente</h3>
                    <p className="text-sm text-muted-foreground">
                      IA que prevê tempo de conclusão baseado no histórico
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Gestão de Equipe</h3>
                    <p className="text-sm text-muted-foreground">Análise de produtividade e designação inteligente</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Settings className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Gestão de Peças</h3>
                    <p className="text-sm text-muted-foreground">Controle de estoque e requisições automáticas</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/50">
        <div className="container flex flex-col items-center justify-center gap-4 py-24 text-center">
          <Badge variant="secondary">Comece Agora</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Pronto para otimizar sua oficina?
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Junte-se a centenas de oficinas que já transformaram sua operação com nossa plataforma.
          </p>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Button size="lg" className="gap-2">
              Agendar Demo <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
  <div className="container py-12">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Webhook className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Facter Truck</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Transformando a gestão de frotas com tecnologia e inovação.
        </p>
        <div className="flex gap-4">
          <Button variant="ghost" size="icon">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-

