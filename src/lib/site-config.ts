export const siteConfig = {
  name: "Asoafil SAS",
  shortName: "Asoafil",
  url: "https://asoafil.com",
  description:
    "Asesoría contable integral para empresas en Colombia. Contabilidad, SG-SST, afiliaciones y creación de empresas.",
  contact: {
    phone: "+57 311 840 7318",
    phoneRaw: "573118407318",
    email: "sandramr025@yahoo.es",
    address: "Carrera 7 #32-16 Oficina 501, Bogotá D.C.",
    city: "Bogotá D.C., Colombia",
    hours: "Lunes a viernes · 8:00 a.m. – 6:00 p.m.",
  },
  stats: {
    yearsExperience: 14,
    companiesServed: 100,
    compliancePct: 100,
  },
  whatsapp: {
    base: "https://wa.me/573118407318",
    defaultMessage:
      "Hola! Me interesa agendar una asesoría gratuita para mi empresa.",
    servicesMessage:
      "Hola! Me interesa una asesoría contable y de seguridad social para mi empresa. ¿Podrían ayudarme?",
  },
} as const;

export function whatsappUrl(message: string = siteConfig.whatsapp.defaultMessage) {
  return `${siteConfig.whatsapp.base}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#clientes", label: "Clientes" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
] as const;
