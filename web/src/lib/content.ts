export const site = {
  name: "Dra. Isabel Jaramillo",
  tagline: "Ortodoncia · Odontología",
  title: "Dra. Isabel Jaramillo · Ortodoncia & Odontología Integral · Cali",
  description:
    "Ortodoncia de alta precisión e Invisalign Doctor certificada en Cali. Odontología integral con tecnología de última generación.",
  location: "Unicentro, Oasis 503B · Cali",
  instagram: "https://www.instagram.com/ortodoncia.isajaramillo/",
  whatsapp: "https://wa.me/573177372490",
  whatsappMessage:
    "https://wa.me/573177372490?text=Hola%20Dra.%20Isabel%2C%20quiero%20informaci%C3%B3n%20sobre%20un%20tratamiento.",
  email: "contacto@isajaramillo.com",
  phone: "+57 (317) 737-2490",
  hours: "Lun – Sáb · 8:00am – 6:00pm",
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
    "Ortodoncia de alta precisión e Invisalign Doctor certificada. Odontología integral pensada para cada paciente, con tecnología de última generación en el corazón de Cali.",
  stats: [
    { value: "1024", label: "Seguidores Instagram", count: true },
    { value: "+8", label: "Años de experiencia" },
    { value: "✓", label: "Invisalign Doctor Cert." },
  ],
  badgeUniversity: { title: "Universidad del Valle", subtitle: "Especialista en Ortodoncia" },
  badgeSco: { title: "Sociedad Colombiana", subtitle: "de Ortodoncia" },
};

export const marqueeItems = [
  "Ortodoncia de precisión",
  "Invisalign® Doctor",
  "Láser de Diodo",
  "Escáner Intraoral 3D",
  "Carillas de Porcelana",
  "Cali · Colombia",
  "Unicentro Oasis 503B",
  "Sociedad Colombiana de Ortodoncia",
];

export const services = [
  {
    num: "01",
    name: "Ortodoncia con Brackets",
    desc: "Brackets metálicos y estéticos de alta eficiencia para corregir alineación y oclusión con resultados precisos y duraderos.",
  },
  {
    num: "02",
    name: "Invisalign®",
    desc: "Alineadores invisibles a medida. Como Invisalign Doctor certificada, ofrezco el tratamiento más avanzado sin brackets visibles.",
  },
  {
    num: "03",
    name: "Láser de Diodo",
    desc: "Tecnología láser para procedimientos gingivales, blanqueamiento y bioestimulación postquirúrgica de última generación.",
  },
  {
    num: "04",
    name: "Carillas de Porcelana",
    desc: "Carillas cerámicas y de resina para transformar la estética de tu sonrisa con resultados naturales y duraderos.",
  },
  {
    num: "05",
    name: "Escáner Intraoral",
    desc: "Impresiones digitales 3D precisas. Eliminamos moldes físicos para mayor comodidad y precisión en tu tratamiento.",
  },
  {
    num: "06",
    name: "Tratamiento de Conducto",
    desc: "Endodoncia especializada para salvar dientes con infección activa o caries profundas, con mínimo dolor y máxima efectividad.",
  },
];

export const about = {
  tag: "Sobre la doctora",
  title: "Pasión por la",
  titleEm: "ortodoncia",
  bio: [
    "Soy la Dra. Isabel Jaramillo, especialista en Ortodoncia y Odontología Integral con formación en la Universidad del Valle. Mi misión es transformar sonrisas con un enfoque personalizado, combinando ciencia, estética y tecnología de punta.",
    "Como Invisalign Doctor certificada y miembro activa de la Sociedad Colombiana de Ortodoncia, me mantengo a la vanguardia de los últimos avances para ofrecerte los mejores resultados.",
  ],
  years: "+8",
  credentials: [
    "Especialista en Ortodoncia — Universidad del Valle",
    "Miembro de la Sociedad Colombiana de Ortodoncia",
    "Invisalign Doctor Certificada",
    "Congresos internacionales de actualización continua",
  ],
};

export const invisalign = {
  tag: "Invisalign® Doctor",
  title: "Alineadores",
  titleEm: "invisibles",
  titleEnd: "a tu medida",
  desc: "Como proveedora certificada de Invisalign, diseño tu tratamiento con tecnología 3D para que veas el resultado antes de empezar. Sin brackets, sin incomodidades.",
  features: [
    "Removibles — come lo que quieras",
    "Casi invisibles — nadie lo notará",
    "Planificación digital 3D con resultado previsto",
    "Citas menos frecuentes, mayor comodidad",
  ],
};

export const whyChooseUs = {
  tag: "Por qué elegirnos",
  title: "Odontología que te hace",
  titleEm: "sentir bien",
  intro:
    "Combinamos atención personalizada, tecnología de punta y un enfoque sin juicios — para que cada visita sea cómoda y orientada a resultados.",
  points: [
    "Ortodoncia y odontología integral en un solo lugar",
    "Enfoque personalizado para cada paciente",
    "Invisalign Doctor certificada y miembro de la Sociedad Colombiana de Ortodoncia",
    "Tecnología digital: escáner intraoral y láser de diodo",
    "Consultorio en Unicentro, Cali — horarios flexibles",
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
];

export const galleryLabels = [
  "Brackets",
  "Invisalign",
  "Láser",
  "Carillas",
  "Antes/Después",
  "Escáner 3D",
  "Endodoncia",
  "Pacientes",
  "Ortodoncia",
  "Congreso",
  "Carillas",
  "Pacientes IJ",
  "Brackets",
  "Invisalign",
  "Blanqueamiento",
];

export const formServices = [
  "Ortodoncia con brackets",
  "Invisalign®",
  "Consulta de valoración",
  "Carillas",
  "Láser de diodo",
  "Tratamiento de conducto",
  "Odontología general",
  "Otro",
];

export const footerServices = [
  { href: "#servicios", label: "Ortodoncia" },
  { href: "#invisalign", label: "Invisalign®" },
  { href: "#servicios", label: "Carillas" },
  { href: "#servicios", label: "Láser de Diodo" },
  { href: "#servicios", label: "Escáner Intraoral" },
  { href: "#servicios", label: "Endodoncia" },
];

export const footerInfo = [
  { href: "#sobre-mi", label: "Sobre la Dra." },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#galeria", label: "Instagram" },
  { href: "#contacto", label: "Contacto" },
];
