"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Clock,
  Mail,
  MessageCircle,
  Phone,
  Send,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const serviceOptions = [
  "Asesoría contable",
  "SG-SST",
  "Afiliaciones (EPS · ARL · AFP)",
  "Creación de empresas",
  "Nómina y aportes",
  "Capacitación",
  "Otro / no estoy seguro",
] as const;

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
};

export function ContactSection() {
  const [values, setValues] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      "Hola Asoafil! Vengo del formulario de su sitio web.",
      "",
      `• Nombre: ${values.name}`,
      `• Empresa: ${values.company}`,
      `• Email: ${values.email}`,
      `• Teléfono: ${values.phone}`,
      `• Servicio de interés: ${values.service || "—"}`,
      "",
      "Mensaje:",
      values.message,
    ];
    const message = lines.join("\n");
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden bg-white py-20 md:py-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand-50 blur-3xl opacity-50" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-700"
          >
            Contacto
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
          >
            Conversemos sobre{" "}
            <span className="text-brand-700">tu empresa</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-base leading-relaxed text-muted sm:text-lg"
          >
            Cuéntanos en qué te podemos acompañar. Te respondemos por WhatsApp en
            menos de 24 horas hábiles.
          </motion.p>
        </div>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="space-y-3">
              <ContactCard
                href={whatsappUrl()}
                external
                icon={MessageCircle}
                label="WhatsApp"
                value={siteConfig.contact.phone}
                cta="Iniciar conversación"
                tone="whatsapp"
              />
              <ContactCard
                href={`tel:${siteConfig.contact.phoneRaw}`}
                icon={Phone}
                label="Teléfono"
                value={siteConfig.contact.phone}
                cta="Llamar ahora"
              />
              <ContactCard
                href={`mailto:${siteConfig.contact.email}`}
                icon={Mail}
                label="Correo"
                value={siteConfig.contact.email}
                cta="Enviar correo"
              />
              <ContactCard
                icon={Clock}
                label="Horario de atención"
                value={siteConfig.contact.hours}
              />
            </div>
          </motion.aside>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-white p-6 shadow-[0_24px_60px_-30px_rgba(15,30,87,0.18)] sm:p-8 lg:col-span-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Nombre completo"
                required
                input={
                  <input
                    type="text"
                    required
                    autoComplete="name"
                    value={values.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="María Pérez"
                    className={fieldClass}
                  />
                }
              />
              <Field
                label="Empresa"
                required
                input={
                  <input
                    type="text"
                    required
                    autoComplete="organization"
                    value={values.company}
                    onChange={(e) => update("company", e.target.value)}
                    placeholder="Tu Empresa S.A.S."
                    className={fieldClass}
                  />
                }
              />
              <Field
                label="Correo electrónico"
                required
                input={
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    value={values.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="maria@empresa.com"
                    className={fieldClass}
                  />
                }
              />
              <Field
                label="Teléfono"
                required
                input={
                  <input
                    type="tel"
                    required
                    autoComplete="tel"
                    value={values.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+57 300 000 0000"
                    className={fieldClass}
                  />
                }
              />
              <Field
                className="sm:col-span-2"
                label="Servicio de interés"
                required
                input={
                  <select
                    required
                    value={values.service}
                    onChange={(e) => update("service", e.target.value)}
                    className={cn(fieldClass, "pr-10 appearance-none bg-[url('data:image/svg+xml;utf8,<svg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2212%22%20height=%2212%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22%234a5163%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22><polyline%20points=%226%209%2012%2015%2018%209%22/></svg>')] bg-[length:12px_12px] bg-[right_1rem_center] bg-no-repeat")}
                  >
                    <option value="" disabled>
                      Selecciona un servicio
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                }
              />
              <Field
                className="sm:col-span-2"
                label="Cuéntanos sobre tu empresa"
                required
                input={
                  <textarea
                    required
                    rows={5}
                    value={values.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Tamaño aproximado, sector, qué necesitas resolver…"
                    className={cn(fieldClass, "min-h-32 resize-y py-3")}
                  />
                }
              />
            </div>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-relaxed text-subtle sm:max-w-xs">
                Al enviar, abrimos WhatsApp con tu mensaje pre-llenado para que solo
                tengas que tocar &ldquo;Enviar&rdquo;.
              </p>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="group w-full sm:w-auto"
              >
                {submitted ? (
                  <>
                    <Check className="h-4 w-4" />
                    Abriendo WhatsApp…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Enviar por WhatsApp
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}

const fieldClass =
  "w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-sm text-foreground placeholder:text-subtle/70 transition-all duration-200 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100";

function Field({
  label,
  input,
  required,
  className,
}: {
  label: string;
  input: React.ReactNode;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={cn("flex flex-col gap-1.5", className)}>
      <span className="text-xs font-semibold tracking-wide text-foreground">
        {label}
        {required && <span className="ml-0.5 text-brand-600">*</span>}
      </span>
      {input}
    </label>
  );
}

function ContactCard({
  href,
  external,
  icon: Icon,
  label,
  value,
  cta,
  tone = "neutral",
}: {
  href?: string;
  external?: boolean;
  icon: LucideIcon;
  label: string;
  value: string;
  cta?: string;
  tone?: "neutral" | "whatsapp";
}) {
  const inner = (
    <div
      className={cn(
        "group flex items-center gap-4 rounded-2xl border bg-white p-5 transition-all duration-300",
        href
          ? "hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-[0_18px_44px_-22px_rgba(15,30,87,0.18)]"
          : "",
        tone === "whatsapp"
          ? "border-accent-100 bg-accent-50/40"
          : "border-border",
      )}
    >
      <span
        className={cn(
          "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 ring-inset transition-colors",
          tone === "whatsapp"
            ? "bg-accent-600 text-white ring-accent-700"
            : "bg-brand-50 text-brand-700 ring-brand-100 group-hover:bg-brand-700 group-hover:text-white group-hover:ring-brand-700",
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-subtle">
          {label}
        </div>
        <div className="mt-0.5 break-words text-sm font-semibold text-foreground">
          {value}
        </div>
        {cta && (
          <div
            className={cn(
              "mt-1 text-xs font-medium",
              tone === "whatsapp" ? "text-accent-700" : "text-brand-700",
            )}
          >
            {cta} →
          </div>
        )}
      </div>
    </div>
  );

  if (!href) return inner;

  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
      className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
    >
      {inner}
    </a>
  );
}
