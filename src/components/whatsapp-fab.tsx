"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { whatsappUrl } from "@/lib/site-config";

export function WhatsappFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let scrolled = false;
    let nearWhatsapp = false;

    const apply = () => setVisible(scrolled && !nearWhatsapp);

    const onScroll = () => {
      scrolled = window.scrollY > 480;
      apply();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const contactSection = document.getElementById("contacto");
    const footer = document.querySelector("footer");
    const targets = [contactSection, footer].filter(
      (el): el is HTMLElement => el instanceof HTMLElement,
    );

    let observer: IntersectionObserver | null = null;
    if (targets.length > 0 && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          nearWhatsapp = entries.some((e) => e.isIntersecting);
          apply();
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0 },
      );
      targets.forEach((t) => observer!.observe(t));
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          key="wa-fab"
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chatea con un asesor por WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 sm:bottom-8 sm:right-8"
        >
          <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-lg ring-1 ring-border md:inline-block">
            ¿Tienes dudas?{" "}
            <span className="text-accent-700">Escríbenos</span>
          </span>

          <span className="relative">
            <span
              aria-hidden
              className="absolute inset-0 rounded-full bg-accent-500 motion-safe:animate-ping opacity-70"
            />
            <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent-600 text-white shadow-[0_18px_40px_-12px_rgba(5,150,105,0.55)] ring-2 ring-white transition-transform group-hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="h-7 w-7"
                aria-hidden
                fill="currentColor"
              >
                <path d="M16.003 3.2c-7.073 0-12.8 5.727-12.8 12.8 0 2.262.594 4.47 1.722 6.412L3.2 28.8l6.566-1.711a12.74 12.74 0 0 0 6.237 1.62h.006c7.072 0 12.8-5.728 12.8-12.8s-5.728-12.71-12.806-12.71Zm0 23.31h-.005a10.62 10.62 0 0 1-5.412-1.482l-.388-.231-3.897 1.016 1.04-3.797-.253-.39A10.6 10.6 0 0 1 5.41 16c0-5.864 4.737-10.6 10.595-10.6 2.83 0 5.49 1.103 7.49 3.106a10.527 10.527 0 0 1 3.106 7.5c-.003 5.863-4.737 10.6-10.598 10.6Zm5.812-7.94c-.318-.16-1.883-.93-2.176-1.036-.292-.107-.504-.16-.716.16-.211.317-.821 1.036-1.007 1.248-.186.213-.371.24-.689.08-.318-.159-1.343-.495-2.557-1.578-.945-.843-1.583-1.884-1.768-2.201-.186-.318-.02-.49.14-.648.144-.144.318-.371.477-.557.16-.186.212-.318.318-.53.106-.213.053-.398-.026-.557-.08-.16-.715-1.726-.98-2.363-.258-.62-.52-.535-.715-.546l-.61-.011a1.17 1.17 0 0 0-.848.398c-.292.318-1.114 1.088-1.114 2.654 0 1.566 1.14 3.08 1.3 3.293.159.213 2.243 3.425 5.434 4.802.76.328 1.353.524 1.815.671.762.243 1.456.209 2.005.127.612-.092 1.883-.77 2.149-1.514.264-.743.264-1.38.185-1.513-.08-.133-.292-.213-.61-.371Z" />
              </svg>
            </span>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
