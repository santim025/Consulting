"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  FileSearch,
  LineChart,
  Rocket,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type Step = {
  index: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    index: "01",
    icon: FileSearch,
    title: "Diagnóstico",
    description:
      "Entendemos tu empresa, su contexto y sus prioridades normativas para hablar el mismo idioma.",
  },
  {
    index: "02",
    icon: ClipboardList,
    title: "Propuesta",
    description:
      "Diseñamos un plan a la medida con alcance claro, tiempos definidos y entregables tangibles.",
  },
  {
    index: "03",
    icon: Rocket,
    title: "Implementación",
    description:
      "Ejecutamos con acompañamiento continuo, documentando cada paso y asegurando el cumplimiento.",
  },
  {
    index: "04",
    icon: LineChart,
    title: "Seguimiento",
    description:
      "Reportes periódicos, indicadores claros y mejora continua para que crezcas con tranquilidad.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="proceso"
      className="relative scroll-mt-24 bg-white py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title={
            <>
              Un proceso{" "}
              <span className="text-brand-700">simple y efectivo</span>.
            </>
          }
          description="Cuatro pasos claros para pasar de la incertidumbre normativa a la tranquilidad total."
        />

        <div className="relative mt-16 lg:mt-20">
          {/* Línea horizontal punteada (desktop) que se dibuja al entrar al viewport */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-7 hidden lg:flex"
          >
            <div className="mx-auto h-px w-[78%] overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full origin-left border-t-2 border-dashed border-brand-200"
              />
            </div>
          </div>

          <motion.ol
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-15% 0px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.18, delayChildren: 0.25 } },
            }}
            className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          >
            {steps.map((step) => (
              <StepItem key={step.index} step={step} />
            ))}
          </motion.ol>
        </div>
      </Container>
    </section>
  );
}

function StepItem({ step }: { step: Step }) {
  const Icon = step.icon;
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Número circular sobre la línea */}
      <div className="relative">
        <span className="absolute inset-0 -z-10 rounded-full bg-white" />
        <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-sm font-bold tracking-wider text-white shadow-[0_8px_24px_-8px_rgba(15,30,87,0.4)] ring-4 ring-white">
          {step.index}
        </span>
      </div>

      <div className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="font-display mt-4 text-lg font-bold tracking-tight text-foreground">
        {step.title}
      </h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
        {step.description}
      </p>
    </motion.li>
  );
}
