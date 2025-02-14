import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export function CallToActionSection() {
  return (
    <section className="border-t bg-muted/50">
      <div className="container flex flex-col items-center justify-center gap-4 py-24 text-center">
        {/* <Badge variant="secondary"></Badge> */}
                    <div className="w-full text-center">
              <Badge className="text-sm font-semibold text-primary bg-primary/15 px-6 text-center">
              Comece Agora
              </Badge>
            </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Pronto para otimizar sua oficina?
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Aprimore sua gestão da sua oficina com uma plataforma inteligente e
          eficiente, projetada para transformar sua operação.
        </p>
        <motion.div
          className="mt-10 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 rounded-full"
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
    </section>
  );
}
