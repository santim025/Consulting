import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

import { Container } from "@/components/ui/container";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

const servicesLinks = [
  { href: "#servicios", label: "Asesoría contable" },
  { href: "#servicios", label: "SG-SST" },
  { href: "#servicios", label: "Afiliaciones" },
  { href: "#servicios", label: "Creación de empresas" },
  { href: "#servicios", label: "Nómina y aportes" },
  { href: "#servicios", label: "Capacitación" },
];

const empresaLinks = [
  { href: "#experiencia", label: "Sobre nosotros" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#clientes", label: "Testimonios" },
  { href: "#faq", label: "Preguntas frecuentes" },
  { href: "#contacto", label: "Contáctanos" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-brand-950 text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-brand-700 blur-3xl opacity-25" />
        <svg
          className="absolute inset-0 h-full w-full text-white/[0.03]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="footer-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 0L0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      <Container className="relative">
        <div className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5 lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
              aria-label={`${siteConfig.name} — Inicio`}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/15">
                <Image
                  src="/logo.png"
                  alt="Logo Asoafil SAS"
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </span>
              <span className="flex flex-col">
                <span className="font-display text-lg font-bold leading-tight tracking-tight">
                  {siteConfig.name}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/55">
                  Asesoría contable
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Asesoría contable integral, SG-SST y servicios empresariales para
              empresas en Colombia. Más de 14 años acompañando el crecimiento de
              nuestros clientes.
            </p>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-600 px-4 py-2 text-sm font-semibold text-white ring-1 ring-accent-700 transition-all hover:bg-accent-500"
            >
              <MessageCircle className="h-4 w-4" />
              Escríbenos por WhatsApp
            </a>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
              Servicios
            </h3>
            <ul className="mt-5 space-y-3">
              {servicesLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
              Empresa
            </h3>
            <ul className="mt-5 space-y-3">
              {empresaLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-12 lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
              Contacto
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-white/85 hover:text-white"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 group-hover:bg-accent-600 group-hover:ring-accent-700">
                    <MessageCircle className="h-3.5 w-3.5" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/50">
                      WhatsApp
                    </span>
                    <span className="font-medium">{siteConfig.contact.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="group flex items-start gap-3 text-white/85 hover:text-white"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 group-hover:bg-brand-600 group-hover:ring-brand-700">
                    <Phone className="h-3.5 w-3.5" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/50">
                      Teléfono
                    </span>
                    <span className="font-medium">{siteConfig.contact.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="group flex items-start gap-3 text-white/85 hover:text-white"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 group-hover:bg-brand-600 group-hover:ring-brand-700">
                    <Mail className="h-3.5 w-3.5" />
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-white/50">
                      Correo
                    </span>
                    <span className="font-medium break-all">
                      {siteConfig.contact.email}
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 py-6 sm:flex-row sm:items-center">
          <p className="text-xs text-white/60">
            © {year} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/50">
            Bogotá, Colombia · {siteConfig.contact.hours}
          </p>
        </div>
      </Container>
    </footer>
  );
}
