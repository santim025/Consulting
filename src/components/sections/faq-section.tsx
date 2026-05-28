"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MessageCircleQuestion, Plus } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type Faq = { question: string; answer: string };

const faqs: Faq[] = [
  {
    question: "¿Cuánto cuesta el servicio de asesoría contable?",
    answer:
      "Nuestras tarifas se ajustan al tamaño de tu empresa y al alcance del servicio (contabilidad mensual, declaraciones, SG-SST, nómina, etc.). Tras una breve reunión de diagnóstico, te enviamos una propuesta clara con honorarios fijos mensuales, sin sorpresas.",
  },
  {
    question: "¿Atienden empresas fuera de Bogotá?",
    answer:
      "Sí. Trabajamos con empresas en todo el país de forma 100% digital: recibimos documentos por correo o nube, hacemos reuniones por videollamada y entregamos reportes en línea. Nuestros clientes están en Bogotá, Medellín, Cali, Barranquilla, Bucaramanga y Cartagena.",
  },
  {
    question: "¿Qué incluye la asesoría inicial gratuita?",
    answer:
      "Una reunión de 30 a 45 minutos donde entendemos tu operación, revisamos tu situación contable y tributaria actual, identificamos riesgos normativos y te dejamos un plan de trabajo recomendado. No hay compromiso de contratación.",
  },
  {
    question: "¿Cómo es el proceso para empezar a trabajar con ustedes?",
    answer:
      "Sigue cuatro pasos simples: (1) Diagnóstico inicial, (2) Propuesta a la medida con alcance y honorarios, (3) Firma de contrato y entrega de accesos/documentos, (4) Implementación con un asesor asignado que te acompaña mes a mes.",
  },
  {
    question: "¿Pueden retomar la contabilidad si ya estoy operando?",
    answer:
      "Por supuesto. Hacemos un empalme ordenado con tu contador anterior, revisamos los meses pendientes, identificamos correcciones y dejamos tu contabilidad al día. Este proceso suele tomar entre 2 y 4 semanas según el estado de la información.",
  },
  {
    question: "¿Qué información necesitan para crear una empresa nueva?",
    answer:
      "Cédulas de los socios, capital inicial, actividad económica (CIIU), dirección y nombre tentativo. Nosotros nos encargamos del resto: redacción de estatutos, registro en Cámara de Comercio, RUT, registros mercantiles y afiliaciones iniciales.",
  },
  {
    question: "¿Cómo manejan la confidencialidad de mi información?",
    answer:
      "Toda la información se trata bajo cláusulas de confidencialidad estrictas y manejo seguro de datos personales (Ley 1581 de 2012). Cada cliente tiene un asesor principal y los accesos a su información están limitados al equipo asignado.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative scroll-mt-24 overflow-hidden bg-bg-subtle py-20 md:py-28"
    >
      <Container className="relative">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-700"
            >
              <MessageCircleQuestion className="h-3.5 w-3.5" />
              Preguntas frecuentes
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-display mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem]"
            >
              Resolvemos tus dudas{" "}
              <span className="text-brand-700">antes de empezar</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg"
            >
              Si tu pregunta no está aquí, escríbenos directo a WhatsApp y un asesor
              te responde en menos de 24 horas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href={whatsappUrl(siteConfig.whatsapp.servicesMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg" className="group">
                  Hacer una pregunta
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10% 0px" }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="flex flex-col gap-3"
            >
              {faqs.map((faq, i) => (
                <FaqItem
                  key={faq.question}
                  index={i}
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex((cur) => (cur === i ? null : i))}
                />
              ))}
            </motion.ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FaqItem({
  index,
  faq,
  isOpen,
  onToggle,
}: {
  index: number;
  faq: Faq;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 12 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={cn(
        "overflow-hidden rounded-2xl border bg-white transition-all duration-300",
        isOpen
          ? "border-brand-200 shadow-[0_18px_44px_-22px_rgba(15,30,87,0.18)]"
          : "border-border hover:border-brand-100 hover:bg-white",
      )}
    >
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-inset"
      >
        <span className="font-display text-base font-semibold text-foreground sm:text-lg">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors",
            isOpen
              ? "bg-brand-700 text-white"
              : "bg-bg-subtle text-foreground",
          )}
          aria-hidden
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.25, ease: "easeOut" },
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0 text-[15px] leading-relaxed text-muted">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
