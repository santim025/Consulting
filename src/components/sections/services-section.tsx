"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Calculator,
  GraduationCap,
  HeartPulse,
  UserPlus,
  Wallet,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
};

const services: Service[] = [
  {
    icon: Calculator,
    title: "Asesoría contable",
    description:
      "Estados financieros, declaraciones tributarias y acompañamiento contable integral para tu empresa.",
    highlights: ["Estados financieros", "Declaraciones tributarias", "Conciliaciones"],
  },
  {
    icon: HeartPulse,
    title: "SG-SST",
    description:
      "Diseño, implementación y seguimiento del Sistema de Gestión de Seguridad y Salud en el Trabajo.",
    highlights: ["Implementación", "Auditorías", "Capacitaciones"],
  },
  {
    icon: UserPlus,
    title: "Afiliaciones",
    description:
      "Trámites de afiliaciones y novedades ante EPS, ARL, AFP y caja de compensación.",
    highlights: ["EPS · ARL · AFP", "Caja de compensación", "Novedades"],
  },
  {
    icon: Building2,
    title: "Creación de empresas",
    description:
      "Constitución de sociedades, trámites legales y asesoría empresarial desde el día uno.",
    highlights: ["Constitución", "RUT y Cámara", "Asesoría inicial"],
  },
  {
    icon: Wallet,
    title: "Nómina y aportes",
    description:
      "Gestión integral de nómina empresarial y liquidación de aportes a seguridad social.",
    highlights: ["Liquidación mensual", "Aportes parafiscales", "Certificados"],
  },
  {
    icon: GraduationCap,
    title: "Capacitación",
    description:
      "Formación contable y normativa para que tu equipo cumpla con tranquilidad y precisión.",
    highlights: ["Talleres in-house", "Actualización normativa", "Asesoría continua"],
  },
];

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="relative scroll-mt-24 bg-bg-subtle py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Nuestros servicios"
          title={
            <>
              Todo lo que tu empresa necesita,
              <br className="hidden sm:block" />
              <span className="text-brand-700"> en un solo aliado.</span>
            </>
          }
          description="Una suite completa de servicios contables, tributarios y de seguridad social, diseñada para que tu empresa crezca sin fricciones normativas."
        />

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_60px_-24px_rgba(15,30,87,0.18)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-50/0 blur-2xl transition-colors duration-500 group-hover:bg-brand-100/70"
      />

      <div className="flex items-start justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100 transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-white group-hover:ring-brand-700">
          <Icon className="h-6 w-6" />
        </span>
        <ArrowUpRight className="h-5 w-5 text-subtle opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-700 group-hover:opacity-100" />
      </div>

      <h3 className="font-display mt-6 text-xl font-bold tracking-tight text-foreground">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        {service.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {service.highlights.map((h) => (
          <li
            key={h}
            className="rounded-md bg-bg-subtle px-2 py-1 text-[11px] font-medium text-subtle"
          >
            {h}
          </li>
        ))}
      </ul>
    </motion.li>
  );
}
