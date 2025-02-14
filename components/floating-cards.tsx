"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, ArrowUpRight, ArrowDownRight, CheckCircle2 } from "lucide-react"

export function FloatingCards() {
  return (
    <div className="relative w-full h-full">
      {/* Top right card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 5,
        }}
        className="absolute top-10 right-10"
      >
        <Card className="p-4 w-[280px] bg-background/90 backdrop-blur">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Manutenção Concluída</p>
              <p className="text-xs text-muted-foreground">Carreta #123</p>
            </div>
            <CheckCircle2 className="h-5 w-5 text-primary ml-auto" />
          </div>
        </Card>
      </motion.div>

      {/* Bottom left card */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 4,
        }}
        className="absolute bottom-10 left-10"
      >
        <Card className="p-4 w-[200px] bg-background/90 backdrop-blur">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Tempo Médio</p>
              <Clock className="h-4 w-4 text-primary" />
            </div>
            <p className="text-2xl font-bold">-15%</p>
            <div className="flex items-center gap-1 text-green-500">
              <ArrowUpRight className="h-4 w-4" />
              <span className="text-xs">Melhor que ontem</span>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Center right card */}
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 6,
        }}
        className="absolute top-1/2 right-20 -translate-y-1/2"
      >
        <Card className="p-4 w-[240px] bg-background/90 backdrop-blur">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Produtividade</p>
              <Badge variant="secondary">Hoje</Badge>
            </div>
            <p className="text-2xl font-bold">94.5%</p>
            <div className="flex items-center gap-1 text-red-500">
              <ArrowDownRight className="h-4 w-4" />
              <span className="text-xs">2% menor que meta</span>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

