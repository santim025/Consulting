"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

type Accent = "brand" | "accent" | "amber" | "rose" | "indigo" | "sky";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  accent: Accent;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Asoafil transformó nuestra operación contable. Pasamos de cierres mensuales caóticos a tener reportes claros y a tiempo. El equipo es cercano y siempre disponible.",
    name: "Laura Méndez",
    role: "Gerente Administrativa",
    company: "Manufactura Andina S.A.S.",
    initials: "LM",
    accent: "brand",
  },
  {
    quote:
      "Implementaron el SG-SST en tiempo récord. Nos guiaron paso a paso y hoy estamos 100% al día con la normativa. La tranquilidad de no preocuparnos por multas no tiene precio.",
    name: "Carlos Ramírez",
    role: "Director de Operaciones",
    company: "Logística del Norte",
    initials: "CR",
    accent: "accent",
  },
  {
    quote:
      "Desde el primer día sentimos que estábamos en buenas manos. Crearon la empresa, hicieron todas las afiliaciones y nos siguen asesorando. Un equipo profesional y humano.",
    name: "María González",
    role: "Fundadora",
    company: "Estudio Creativo Bogotá",
    initials: "MG",
    accent: "amber",
  },
  {
    quote:
      "Llevamos 6 años trabajando con Asoafil y han crecido con nosotros. Conocen el negocio al detalle, anticipan los temas tributarios y nos liberan tiempo para enfocarnos en crecer.",
    name: "Andrés Rojas",
    role: "CEO",
    company: "Distribuidora Pacífico",
    initials: "AR",
    accent: "indigo",
  },
  {
    quote:
      "La capacitación al equipo administrativo nos cambió la manera de trabajar. Hoy entendemos los reportes, sabemos qué exigirle al contador y tomamos mejores decisiones.",
    name: "Sandra Torres",
    role: "Gerente",
    company: "Restaurantes El Andino",
    initials: "ST",
    accent: "rose",
  },
  {
    quote:
      "Nos acompañaron en la constitución de tres empresas distintas. Cada trámite, cada cámara de comercio, cada afiliación: todo resuelto sin que tuviéramos que perder días en colas.",
    name: "Felipe Castillo",
    role: "Gerente General",
    company: "Construcciones Suba",
    initials: "FC",
    accent: "sky",
  },
  {
    quote:
      "Antes vivíamos con sustos en los cierres de mes. Ahora todo llega ordenado, conciliado y con un análisis claro. Marcaron un antes y un después en nuestra dirección financiera.",
    name: "Diana Beltrán",
    role: "Directora Financiera",
    company: "Salud Integral IPS",
    initials: "DB",
    accent: "brand",
  },
  {
    quote:
      "La nómina y los aportes son un dolor de cabeza para muchas empresas. Con Asoafil simplemente dejé de pensar en eso. Lo manejan completo, mes a mes, sin errores.",
    name: "Juan Pablo Vargas",
    role: "Fundador",
    company: "Agroindustria Sabana",
    initials: "JV",
    accent: "accent",
  },
  {
    quote:
      "Profesionales, puntuales y muy didácticos. Cada pregunta normativa la responden con argumentos y, cuando es necesario, con la norma en la mano. Inspiran confianza total.",
    name: "Patricia Murcia",
    role: "CFO",
    company: "Tech Solutions Colombia",
    initials: "PM",
    accent: "amber",
  },
  {
    quote:
      "Cambiamos tres contadores antes de llegar a ellos. Con Asoafil no hemos vuelto a buscar. Atención personalizada, asesoría real y procesos claros desde el primer día.",
    name: "Ricardo Sánchez",
    role: "Gerente",
    company: "Comercializadora Andina",
    initials: "RS",
    accent: "indigo",
  },
];

const accentBg: Record<Accent, string> = {
  brand: "bg-brand-700",
  accent: "bg-accent-600",
  amber: "bg-amber-500",
  rose: "bg-rose-500",
  indigo: "bg-indigo-600",
  sky: "bg-sky-600",
};

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: false,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (i: number) => emblaApi?.scrollTo(i),
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section
      id="clientes"
      className="relative scroll-mt-24 overflow-hidden bg-white py-20 md:py-28"
    >
      <Container className="relative">
        <SectionHeading
          eyebrow="Testimonios"
          title={
            <>
              Lo que dicen las empresas que{" "}
              <span className="text-brand-700">confían en nosotros</span>.
            </>
          }
          description="Más de 100 empresas han elegido a Asoafil para acompañar su crecimiento. Estas son algunas de sus historias."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <ul className="-ml-4 flex touch-pan-y md:-ml-6">
              {testimonials.map((t) => (
                <li
                  key={t.name}
                  className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 md:pl-6 lg:basis-1/3"
                >
                  <TestimonialCard testimonial={t} />
                </li>
              ))}
            </ul>
          </div>

          {/* Controles inferiores */}
          <div className="mt-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-2" role="tablist" aria-label="Paginación de testimonios">
              {scrollSnaps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-label={`Ir al testimonio ${i + 1}`}
                  aria-selected={i === selectedIndex}
                  onClick={() => scrollTo(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === selectedIndex
                      ? "w-8 bg-brand-700"
                      : "w-2 bg-border hover:bg-brand-300",
                  )}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Testimonio anterior"
                onClick={scrollPrev}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 active:scale-95"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Testimonio siguiente"
                onClick={scrollNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-foreground transition-all hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 active:scale-95"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center text-sm text-subtle"
        >
          <span className="inline-flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-accent-500" />
            <strong className="font-semibold text-foreground">100%</strong> de
            renovación de contratos
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-border md:block" />
          <span className="inline-flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-brand-600" />
            <strong className="font-semibold text-foreground">+14 años</strong> en
            el mercado
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-border md:block" />
          <span className="inline-flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-amber-500" />
            <strong className="font-semibold text-foreground">5.0</strong>{" "}
            calificación promedio
          </span>
        </motion.div>
      </Container>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_60px_-24px_rgba(15,30,87,0.18)]">
      <Quote
        className="pointer-events-none absolute right-6 top-6 h-12 w-12 text-brand-50 transition-colors group-hover:text-brand-100"
        aria-hidden
      />

      <div
        className="flex items-center gap-0.5 text-amber-400"
        aria-label="5 de 5 estrellas"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>

      <blockquote className="relative mt-5 flex-1 text-[15px] leading-relaxed text-foreground">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <span
          className={cn(
            "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white",
            accentBg[testimonial.accent],
          )}
          aria-hidden
        >
          {testimonial.initials}
        </span>
        <div className="leading-tight">
          <div className="text-sm font-semibold text-foreground">
            {testimonial.name}
          </div>
          <div className="mt-0.5 text-xs text-subtle">
            {testimonial.role}{" "}
            <span className="text-border">·</span>{" "}
            <span className="text-muted">{testimonial.company}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
