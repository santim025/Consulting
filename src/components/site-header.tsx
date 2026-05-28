"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { navLinks, siteConfig, whatsappUrl } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-white/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(15,30,87,0.04)]"
          : "border-b border-transparent bg-white/0",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label={`${siteConfig.name} — Inicio`}
          >
            <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-brand-50 ring-1 ring-brand-100">
              <Image
                src="/logo.png"
                alt="Logo Asoafil SAS - Asesoría contable"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
                priority
              />
            </span>
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              {siteConfig.name}
            </span>
          </Link>

          <nav className="hidden lg:block" aria-label="Navegación principal">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-brand-800"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="md">
                Agendar asesoría
              </Button>
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-white text-foreground hover:bg-bg-subtle lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden"
          >
            <motion.div
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-border bg-white"
            >
              <Container>
                <ul className="flex flex-col gap-1 py-4">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-bg-subtle"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                  <li className="mt-2">
                    <a
                      href={whatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                    >
                      <Button variant="primary" size="lg" className="w-full">
                        Agendar asesoría
                      </Button>
                    </a>
                  </li>
                </ul>
              </Container>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
