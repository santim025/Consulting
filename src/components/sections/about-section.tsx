"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  HeartHandshake,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/animated-counter";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Award,
    title: "Experiencia comprobada",
    description: "+14 años acompañando empresas de todos los tamaños.",
  },
  {
    icon: ShieldCheck,
    title: "Cumplimiento normativo",
    description: "Al día con la normativa colombiana, sin sorpresas ni multas.",
  },
  {
    icon: HeartHandshake,
    title: "Atención cercana",
    description: "Un equipo asignado que conoce tu empresa de cerca.",
  },
  {
    icon: Users,
    title: "Equipo multidisciplinario",
    description: "Contadores, especialistas en SST y asesores tributarios.",
  },
];

export function AboutSection() {
  return (
    <section
      id="experiencia"
      className="relative scroll-mt-24 overflow-hidden bg-bg-subtle py-20 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-brand-50 blur-3xl opacity-60" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -32, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-span-6"
          >
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-100 via-white to-accent-50 blur-2xl opacity-70" />

              <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-[0_30px_80px_-30px_rgba(15,30,87,0.25)]">
                <Image
                  src="/image2.png"
                  alt="Equipo de Asoafil SAS acompañando a un cliente"
                  width={900}
                  height={1000}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Badge flotante "14+ años" con animación float infinita */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-6 -right-4 sm:-right-8 lg:-right-10"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-white px-5 py-4 shadow-[0_24px_60px_-20px_rgba(15,30,87,0.25)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-700 text-white shadow-inner">
                    <span className="font-display text-lg font-bold leading-none">
                      <AnimatedCounter value={siteConfig.stats.yearsExperience} />+
                    </span>
                  </div>
                  <div className="leading-tight">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-subtle">
                      Años
                    </div>
                    <div className="text-sm font-bold text-foreground">
                      de experiencia
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Sello flotante superior */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, x: -10 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -top-4 -left-4 hidden rounded-xl border border-border bg-white px-3 py-2 shadow-lg sm:flex sm:items-center sm:gap-2 lg:-left-6"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <div className="text-[11px] font-semibold text-subtle">+100 empresas</div>
                  <div className="text-sm font-bold text-foreground">confían en nosotros</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="lg:col-span-6">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-700"
            >
              Por qué elegirnos
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-display mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem]"
            >
              Tu aliado estratégico en{" "}
              <span className="text-brand-700">cumplimiento normativo</span> y{" "}
              <span className="text-brand-700">crecimiento</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              No somos solo un proveedor contable. Trabajamos como parte de tu equipo:
              entendemos tu operación, anticipamos los riesgos y traducimos la normativa
              en decisiones simples para tu negocio.
            </motion.p>

            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10% 0px" }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
              }}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              {features.map((f) => (
                <FeatureItem key={f.title} feature={f} />
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href={whatsappUrl(siteConfig.whatsapp.servicesMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg" className="group">
                  Hablar con un asesor
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </a>
              <span className="text-sm text-subtle">
                Respuesta en menos de 24 horas
              </span>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FeatureItem({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className="flex items-start gap-4 rounded-xl border border-border bg-white p-4 transition-colors hover:border-brand-200"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-100">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h3 className="text-sm font-semibold text-foreground">{feature.title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-muted">
          {feature.description}
        </p>
      </div>
    </motion.li>
  );
}
