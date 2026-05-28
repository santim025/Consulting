"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/animated-counter";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function HeroSection() {
  const stats = [
    {
      value: siteConfig.stats.yearsExperience,
      suffix: "+",
      label: "Años de experiencia",
    },
    {
      value: siteConfig.stats.companiesServed,
      suffix: "+",
      label: "Empresas satisfechas",
    },
    {
      value: siteConfig.stats.compliancePct,
      suffix: "%",
      label: "Cumplimiento normativo",
    },
  ];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-white pt-28 pb-20 md:pt-36 md:pb-28"
    >
      {/* Fondo decorativo */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-brand-50 blur-3xl opacity-70" />
        <div className="absolute top-40 -right-24 h-[24rem] w-[24rem] rounded-full bg-accent-50 blur-3xl opacity-60" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.035]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path d="M40 0L0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50/70 px-3 py-1.5 text-xs font-semibold tracking-wide text-brand-800"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
              Confianza corporativa desde 2010
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-display mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Asesoría contable que tu empresa{" "}
              <span className="relative inline-block text-brand-700">
                merece
                <svg
                  className="absolute -bottom-2 left-0 h-2.5 w-full text-brand-300"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M2 5 Q 50 1 100 4 T 198 3"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              Asesoría contable integral para que tu empresa crezca con tranquilidad:
              contabilidad, SG-SST, afiliaciones y creación de empresas. Más de 100
              empresas merecen y confían en nuestro acompañamiento normativo.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href={whatsappUrl(siteConfig.whatsapp.servicesMessage)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg" className="group">
                  Quiero asesoría
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
              </a>
              <a href="#servicios">
                <Button variant="outline" size="lg">
                  Conocer servicios
                </Button>
              </a>
            </motion.div>

            <motion.dl
              initial="initial"
              animate="animate"
              variants={{
                initial: {},
                animate: { transition: { staggerChildren: 0.08, delayChildren: 0.35 } },
              }}
              className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8"
            >
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  variants={fadeUp}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <dt className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                  </dt>
                  <dd className="mt-1 text-xs font-medium leading-snug text-subtle sm:text-sm">
                    {s.label}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-100 via-white to-accent-50 blur-2xl opacity-70" />

              <div className="relative overflow-hidden rounded-3xl border border-border bg-bg-subtle shadow-[0_30px_80px_-30px_rgba(15,30,87,0.25)]">
                <Image
                  src="/image1.png"
                  alt="Equipo de asesoría contable Asoafil"
                  width={720}
                  height={860}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Floating card: testimonio */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -left-4 bottom-8 hidden w-64 rounded-2xl border border-border bg-white p-4 shadow-lg sm:block lg:-left-6"
              >
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  &ldquo;Atención impecable y total cumplimiento. Nos cambiaron la
                  operación contable.&rdquo;
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand-700 text-[10px] font-bold text-white">
                    LM
                  </span>
                  <span className="text-xs font-medium text-subtle">
                    Laura M. · Gerente
                  </span>
                </div>
              </motion.div>

              {/* Floating card: badge cumplimiento */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -right-2 top-6 hidden rounded-xl border border-border bg-white px-3 py-2 shadow-lg sm:flex sm:items-center sm:gap-2 lg:-right-4"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent-50 text-accent-600">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <div className="text-[11px] font-semibold text-subtle">Cumplimiento</div>
                  <div className="text-sm font-bold text-foreground">100% normativo</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
