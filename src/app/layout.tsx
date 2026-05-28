import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Asoafil SAS — Asesoría contable que tu empresa merece",
    template: "%s | Asoafil SAS",
  },
  description:
    "Asesoría contable, SG-SST, afiliaciones y creación de empresas en Colombia. +14 años y +100 empresas confían en Asoafil SAS.",
  keywords: [
    "asesoría contable",
    "contabilidad empresarial",
    "SG-SST",
    "afiliaciones EPS ARL AFP",
    "creación de empresas",
    "nómina",
    "Bogotá",
    "Colombia",
  ],
  authors: [{ name: "Asoafil SAS" }],
  creator: "Asoafil SAS",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteConfig.url,
    siteName: "Asoafil SAS",
    title: "Asoafil SAS — Asesoría contable que tu empresa merece",
    description:
      "Tu aliado estratégico en cumplimiento normativo y crecimiento. Más de 100 empresas confían en nosotros.",
    images: [{ url: "/image1.png", width: 1200, height: 630, alt: "Asoafil SAS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asoafil SAS — Asesoría contable que tu empresa merece",
    description:
      "Tu aliado estratégico en cumplimiento normativo y crecimiento.",
    images: ["/image1.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": siteConfig.url,
  name: siteConfig.name,
  alternateName: "Asoafil",
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  image: `${siteConfig.url}/image1.png`,
  description:
    "Asesoría contable integral, SG-SST, afiliaciones y creación de empresas en Colombia. Más de 14 años de experiencia.",
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  priceRange: "$$",
  areaServed: [
    "Bogotá",
    "Medellín",
    "Cali",
    "Barranquilla",
    "Cartagena",
    "Bucaramanga",
    "Colombia",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  serviceType: "Asesoría Contable y Servicios Empresariales",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Asoafil SAS",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Asesoría contable",
          description:
            "Estados financieros, declaraciones tributarias y contabilidad integral.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SG-SST",
          description:
            "Implementación del Sistema de Gestión de Seguridad y Salud en el Trabajo.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Afiliaciones EPS, ARL, AFP",
          description: "Trámites de afiliaciones y novedades de seguridad social.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Creación de empresas",
          description: "Constitución de sociedades y asesoría empresarial inicial.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nómina y aportes",
          description:
            "Gestión integral de nómina y liquidación de aportes parafiscales.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Capacitación contable",
          description: "Formación contable y actualización normativa para equipos.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "100",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${jakarta.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-background text-foreground flex flex-col">
        {children}
      </body>
    </html>
  );
}
