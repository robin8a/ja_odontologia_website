export const site = {
  name: "Dra. Isabel Jaramillo",
  tagline: "Ortodoncia · Odontología",
  title: "Dra. Isabel Jaramillo · Ortodoncia & Odontología Integral · Cali",
  description:
    "Odontología Integral, Estética y Ortodoncia Digital, pensadas para cada paciente, con tecnología de última generación en el corazón de Cali, Colombia.",
  location: "Unicentro, Oasis 503B · Cali",
  instagram: "https://www.instagram.com/ortodoncia.isajaramillo/",
  whatsapp: "https://wa.me/573177372490",
  whatsappMessage:
    "https://wa.me/573177372490?text=Hola%20Dra.%20Isabel%2C%20quiero%20informaci%C3%B3n%20sobre%20un%20tratamiento.",
  email: "isabelc26@hotmail.com",
  phone: "+57 (317) 737-2490",
  hours: "Lunes–Viernes: 8:00 am – 6:00 pm\nSábados: 8:00 am – 1:00 pm",
} as const;

export const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#invisalign", label: "Invisalign" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const hero = {
  eyebrow: "Cali · Unicentro, Oasis 503B",
  title: "Transforma tu",
  titleEm: "sonrisa,",
  titleEnd: "transforma tu vida",
  subtitle:
    "Odontología Integral, Estética y Ortodoncia Digital, pensadas para cada paciente, con tecnología de última generación en el corazón de Cali, Colombia.",
  stats: [
    {
      value: "1024",
      label: "Seguidores Instagram",
      count: true,
      href: site.instagram,
    },
    { value: "+18", label: "Años de experiencia" },
    { value: "✓", label: "Invisalign Doctor" },
    { value: "✓", label: "Niños y Adultos" },
  ],
  badgeUniversity: { title: "Universidad del Valle", subtitle: "Especialista en Ortodoncia" },
  badgeSco: { title: "SCO Sociedad Colombiana", subtitle: "de Ortodoncia" },
};

export const marqueeItems = [
  "Ortodoncia de precisión",
  "Invisalign® Doctor",
  "Láser de Diodo",
  "Escáner Intraoral 3D",
  "Carillas en Resina y Porcelana",
  "Aclaramiento Dental",
  "Cali · Colombia",
  "Unicentro Oasis 503B",
  "Sociedad Colombiana de Ortodoncia",
];

export const servicesHeading = {
  tag: "Nuestros servicios",
  title: "Cuidado Dental",
  titleEm: "Integral",
  intro:
    "Somos una solución completa, accesible y de alta calidad para cubrir tus necesidades dentales. Te guiamos y direccionamos de manera personalizada, según tus necesidades, hacia las diferentes especialidades de la Odontología.",
};

export const services = [
  {
    num: "01",
    name: "Odontología Integral",
    desc: "Énfasis en prevención: higiene oral, fluorización, sellantes. Retiro de caries.",
  },
  {
    num: "02",
    name: "Ortodoncia",
    desc: "Alineadores transparentes a medida de alta eficiencia para corregir alineación y oclusión. Brackets metálicos y cerámicos.",
  },
  {
    num: "03",
    name: "Diseño de Sonrisa, Aclaramiento y Carillas",
    desc: "Sonrisas armónicas con resultados naturales y duraderos.",
  },
  {
    num: "04",
    name: "Escáner Intraoral iTero®",
    desc: "Impresiones digitales 3D para mayor comodidad y precisión en tu tratamiento.",
  },
  {
    num: "05",
    name: "Láser de Diodo Gemini®",
    desc: "Tratamiento de herpes/aftas, dolor articular, neuralgia/parestesia, disminución de dolor e inflamación: mayor velocidad de cicatrización, recorte de encías.",
  },
  {
    num: "06",
    name: "Rehabilitación Oral",
    desc: "Prótesis fija (coronas individuales, puentes). Prótesis removibles.",
  },
  {
    num: "07",
    name: "Periodoncia",
    desc: "Prevención y tratamiento de enfermedades de encías y hueso para un soporte dental sólido. Implantes dentales.",
  },
  {
    num: "08",
    name: "Cirugía Maxilofacial",
    desc: "Extracción de cordales, cirugía ortognática.",
  },
  {
    num: "09",
    name: "Endodoncia",
    desc: "Tratamientos de conducto más rápidos y sin dolor, para tratar el nervio del diente y evitar su extracción.",
  },
];

export const about = {
  tag: "Sobre la doctora",
  title: "Pasión por la",
  titleEm: "ortodoncia",
  bio: [
    "Soy la Dra. Isabel Jaramillo, Odontóloga Integral y Especialista en Ortodoncia con formación en la Universidad del Valle. Mi misión es transformar sonrisas con un enfoque personalizado, combinando ciencia, estética y tecnología de punta.",
    "Como Invisalign Doctor y miembro activa de la Sociedad Colombiana de Ortodoncia, me mantengo a la vanguardia de los últimos avances para ofrecerte los mejores resultados.",
  ],
  years: "+18",
  credentials: [
    "Especialista en Ortodoncia — Universidad del Valle",
    "Miembro de la Sociedad Colombiana de Ortodoncia",
    "Invisalign Doctor",
    "Actualización continua. Congresos nacionales e internacionales",
  ],
};

export const invisalign = {
  tag: "Invisalign® Doctor",
  title: "Alineadores",
  titleEm: "invisibles",
  titleEnd: "a tu medida",
  desc: "Como proveedora de Invisalign, diseño tu tratamiento con tecnología 3D para que veas el resultado antes de empezar. Sin brackets, sin incomodidades.",
  features: [
    "Removibles – Te los retiras para comer y cepillarte",
    "Facilidad para hacer tu higiene oral",
    "Estéticos – casi invisibles",
    "Planificación Digital 3D con previsualización del resultado final",
    "Citas menos frecuentes y más rápidas",
    "Más cómodos",
  ],
};

export const testimonials = [
  {
    text: "Terminé mi tratamiento de Invisalign con la Dra. Isabel y el resultado superó todas mis expectativas. El proceso fue muy cómodo y ella estuvo pendiente en cada paso.",
    name: "Mariana López",
    service: "Invisalign · 18 meses",
    initial: "M",
    accent: "teal" as const,
  },
  {
    text: "La mejor especialista en ortodoncia de Cali. Sus explicaciones son claras, el consultorio impecable y la tecnología que usa es de primer nivel. Mi sonrisa quedó perfecta.",
    name: "Santiago Reyes",
    service: "Brackets metálicos · 2 años",
    initial: "S",
    accent: "gold" as const,
  },
  {
    text: "Llevé a mi hija desde los 8 años. La Dra. Jaramillo es increíblemente paciente con los niños. El consultorio les genera confianza desde el primer día.",
    name: "Claudia Bermúdez",
    service: "Ortodoncia pediátrica",
    initial: "C",
    accent: "teal-dark" as const,
  },
  {
    text: "La recomiendo por su profesionalismo y calidad humana.",
    name: "Daniela Tello",
    service: "Paciente",
    initial: "D",
    accent: "teal" as const,
  },
];

export const galleryLabels = [
  "Invisalign",
  "Antes y Después",
  "Escáner 3D Intraoral",
  "Aclaramiento Dental",
  "Carillas",
  "Láser",
  "Endodoncia",
  "Higiene Oral",
  "Cirugía Maxilofacial",
  "Brackets",
];

export const formServices = [
  "Odontología Integral",
  "Ortodoncia",
  "Diseño de Sonrisa, Aclaramiento y Carillas",
  "Escáner Intraoral iTero®",
  "Láser de Diodo Gemini®",
  "Rehabilitación Oral",
  "Periodoncia",
  "Cirugía Maxilofacial",
  "Endodoncia",
  "Consulta de valoración",
  "Otro",
];

export const footerServices = [
  { href: "#servicios", label: "Odontología Integral" },
  { href: "#invisalign", label: "Invisalign®" },
  { href: "#servicios", label: "Ortodoncia" },
  { href: "#servicios", label: "Carillas" },
  { href: "#servicios", label: "Láser de Diodo" },
  { href: "#servicios", label: "Endodoncia" },
];

export const footerInfo = [
  { href: "#sobre-mi", label: "Sobre la Dra." },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#galeria", label: "Instagram" },
  { href: "#contacto", label: "Contacto" },
];
