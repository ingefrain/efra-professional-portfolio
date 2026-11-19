import cvAsset from "@/assets/efrain-gonzalez-cv.pdf.asset.json";

export type Lang = "es" | "en";

export const SITE_URL = "https://efra.biz";
export const PERSON_NAME = "Efraín González Macías";

export const CONTACT = {
  email: "info@efra.biz",
  linkedin: "https://www.linkedin.com/in/efra-gonzalez/",
  github: "https://github.com/ingefrain",
  site: "https://efra.biz",
} as const;

/** CV PDF served from the asset CDN; null falls back to an email request. */
export const CV_URL: string | null = cvAsset.url;
export const CV_FILENAME = "Efrain-Gonzalez-Macias-CV.pdf";

export const PROJECT_SLUGS = [
  "grupo-talento",
  "acerca",
  "glop-contadores",
  "fluxsalud",
  "usb-stock",
] as const;
export type ProjectSlug = (typeof PROJECT_SLUGS)[number];

export const SECTION_IDS: Record<
  Lang,
  Record<"projects" | "experience" | "technologies" | "about" | "contact" | "specialties" | "process", string>
> = {
  es: {
    specialties: "especialidades",
    projects: "proyectos",
    process: "forma-de-trabajo",
    experience: "experiencia",
    technologies: "tecnologias",
    about: "sobre-mi",
    contact: "contacto",
  },
  en: {
    specialties: "specialties",
    projects: "projects",
    process: "process",
    experience: "experience",
    technologies: "technologies",
    about: "about",
    contact: "contact",
  },
};

export function homePath(lang: Lang) {
  return lang === "es" ? "/" : "/en";
}

export function projectPath(lang: Lang, slug: string) {
  return lang === "es" ? `/proyectos/${slug}` : `/en/projects/${slug}`;
}

/** Maps a pathname to the equivalent page in the other language. */
export function alternatePath(pathname: string): string {
  const clean = pathname.replace(/\/+$/, "") || "/";
  const en = clean.match(/^\/en\/projects\/([^/]+)$/);
  if (en) return `/proyectos/${en[1]}`;
  const es = clean.match(/^\/proyectos\/([^/]+)$/);
  if (es) return `/en/projects/${es[1]}`;
  if (clean === "/en" || clean.startsWith("/en/")) return "/";
  return "/en";
}

export function langFromPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}

export type Indicator = { value: string; unit?: string; label: string };

export type Project = {
  slug: ProjectSlug;
  name: string;
  kicker: string;
  summary: string;
  description: string;
  scope: string[];
  stack?: string[];
  areas?: string[];
  status?: string;
  highlight?: { value: string; label: string };
};

export type Content = {
  meta: { title: string; description: string };
  nav: { home: string; projects: string; experience: string; technologies: string; about: string; contact: string };
  ui: {
    cv: string;
    cvRequest: string;
    menu: string;
    close: string;
    langLabel: string;
    viewProject: string;
    allProjects: string;
    backHome: string;
    technologies: string;
    areas: string;
    status: string;
    scope: string;
    previous: string;
    next: string;
    skip: string;
    cvMailSubject: string;
  };
  hero: { role: string; titleA: string; titleNum: string; titleB: string; subtitle: string; description: string; explore: string; photoAlt: string; caption: string };
  indicators: Indicator[];
  indicatorsNote: string;
  specialties: { label: string; title: string; items: { title: string; text: string }[] };
  projects: { label: string; title: string; intro: string; items: Project[] };
  process: { label: string; title: string; steps: string[] };
  experience: { label: string; title: string; items: { company: string; period?: string; role?: string; text: string }[] };
  technologies: { label: string; title: string; groups: { name: string; items: string[] }[] };
  about: {
    label: string;
    title: string;
    text: string;
    educationTitle: string;
    education: { title: string; school: string; detail: string }[];
    languagesTitle: string;
    languages: { name: string; level: string }[];
  };
  contact: { label: string; title: string; message: string; emailLabel: string };
  footer: { rights: string };
};

const es: Content = {
  meta: {
    title: "Efraín González — Senior Software Engineer | Full Stack Developer",
    description:
      "Casi 20 años desarrollando software. Ingeniería, desarrollo full stack y sistemas empresariales: ERP, plataformas SaaS e integraciones de sistemas.",
  },
  nav: {
    home: "Inicio",
    projects: "Proyectos",
    experience: "Experiencia",
    technologies: "Tecnologías",
    about: "Sobre mí",
    contact: "Contacto",
  },
  ui: {
    cv: "Descargar CV",
    cvRequest: "Solicitar CV",
    menu: "Menú",
    close: "Cerrar",
    langLabel: "Idioma",
    viewProject: "Ver proyecto",
    allProjects: "Todos los proyectos",
    backHome: "Volver al inicio",
    technologies: "Tecnologías",
    areas: "Áreas",
    status: "Estado",
    scope: "Alcance",
    previous: "Proyecto anterior",
    next: "Siguiente proyecto",
    skip: "Saltar al contenido",
    cvMailSubject: "Solicitud de CV",
  },
  hero: {
    role: "Senior Software Engineer | Full Stack Developer",
    titleA: "Casi",
    titleNum: "20 años",
    titleB: "desarrollando software.",
    subtitle: "Ingeniería, desarrollo full stack y sistemas empresariales.",
    description:
      "Diseño y desarrollo aplicaciones empresariales, plataformas SaaS e integraciones de sistemas. Combino experiencia técnica, comprensión de procesos de negocio y capacidad para desarrollar soluciones completas, desde el análisis hasta su implementación y evolución.",
    explore: "Explorar proyectos",
    photoAlt: "Efraín González Macías, ingeniero de software, de pie con traje oscuro",
    caption: "Efraín González Macías",
  },
  indicators: [
    { value: "20", unit: "años", label: "Experiencia aproximada en desarrollo de software." },
    { value: "100+", label: "Sitios web desarrollados a lo largo de mi trayectoria profesional." },
    { value: "3,100+", label: "Cotizaciones históricas migradas durante un proyecto de integración empresarial." },
    { value: "ERP · SaaS", label: "Experiencia en desarrollo de sistemas empresariales y plataformas de software." },
  ],
  indicatorsNote: "Cifras correspondientes a distintos proyectos y etapas de mi trayectoria.",
  specialties: {
    label: "Especialidades",
    title: "Sistemas que sostienen la operación de un negocio.",
    items: [
      {
        title: "Software empresarial",
        text: "ERP, CRM, inventarios, pedidos, cotizaciones, administración y automatización de procesos.",
      },
      {
        title: "SaaS y desarrollo de producto",
        text: "Aplicaciones web, plataformas multiusuario, gestión de suscripciones y productos digitales.",
      },
      {
        title: "Integración de sistemas",
        text: "APIs REST, comunicación entre plataformas, bases de datos y migraciones de información.",
      },
    ],
  },
  projects: {
    label: "Proyectos destacados",
    title: "Trabajo reciente.",
    intro: "Sistemas empresariales, plataformas SaaS e integraciones desarrolladas de principio a fin.",
    items: [
      {
        slug: "grupo-talento",
        name: "Grupo Talento",
        kicker: "ERP e integración de plataformas",
        summary: "Integración de cuatro plataformas independientes de cotización con un ERP empresarial.",
        description:
          "Integración de cuatro plataformas independientes de cotización con un ERP empresarial. Desarrollo de APIs REST, normalización de información, autenticación mediante API Key y migración de más de 3,100 cotizaciones históricas.",
        scope: [
          "Integración de cuatro plataformas de cotización con el ERP",
          "Desarrollo de APIs REST",
          "Normalización de información",
          "Autenticación mediante API Key",
          "Migración de más de 3,100 cotizaciones históricas",
        ],
        areas: ["ERP", "APIs REST", "Migración de datos"],
        highlight: { value: "3,100+", label: "cotizaciones históricas migradas" },
      },
      {
        slug: "acerca",
        name: "ACERCA",
        kicker: "Plataforma SaaS",
        summary: "Plataforma SaaS para digitalización de negocios.",
        description:
          "Plataforma SaaS para digitalización de negocios. Smart Links, micrositios, menús digitales, agendas, reservas, analítica, gestión multiempresa y suscripciones.",
        scope: ["Smart Links", "Micrositios", "Menús digitales", "Agendas y reservas", "Analítica", "Gestión multiempresa", "Suscripciones"],
        stack: ["Laravel", "PHP", "PostgreSQL", "JavaScript"],
      },
      {
        slug: "glop-contadores",
        name: "GLOP Contadores",
        kicker: "Plataforma para despachos contables",
        summary: "Gestión documental, procesos administrativos y comunicación entre despachos contables y clientes.",
        description:
          "Plataforma independiente para gestión documental, procesos administrativos, información fiscal, nómina y comunicación entre despachos contables y clientes.",
        scope: ["Gestión documental", "Procesos administrativos", "Información fiscal", "Nómina", "Comunicación entre despachos y clientes"],
        stack: ["PHP", "MySQL"],
      },
      {
        slug: "fluxsalud",
        name: "FluxSalud",
        kicker: "Sistema de gestión clínica",
        summary: "Pacientes, citas, expedientes digitales, médicos, consultorios, roles y pagos.",
        description:
          "Sistema de gestión clínica con pacientes, citas, expedientes digitales, médicos, consultorios, usuarios, roles y pagos. Migración desde Supabase a una arquitectura propia.",
        scope: ["Pacientes y citas", "Expedientes digitales", "Médicos y consultorios", "Usuarios y roles", "Pagos", "Migración desde Supabase a una arquitectura propia"],
        stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
      },
      {
        slug: "usb-stock",
        name: "USB Stock",
        kicker: "Modernización de plataforma comercial",
        summary: "Catálogo, cotizaciones, sincronización FTP y APIs de integración.",
        description:
          "Modernización de una plataforma comercial con Laravel, PHP y MariaDB: catálogo, cotizaciones, sincronización FTP y APIs de integración. Más de 200 pruebas automatizadas.",
        scope: ["Catálogo", "Cotizaciones", "Sincronización FTP", "APIs de integración", "Más de 200 pruebas automatizadas"],
        stack: ["Laravel", "PHP", "MariaDB"],
        status: "En desarrollo",
        highlight: { value: "200+", label: "pruebas automatizadas" },
      },
    ],
  },
  process: {
    label: "Forma de trabajo",
    title: "Del proceso de negocio al sistema en producción.",
    steps: [
      "Análisis de necesidades y procesos.",
      "Diseño de arquitectura y modelo de datos.",
      "Desarrollo backend y frontend.",
      "Pruebas y validación.",
      "Despliegue, mantenimiento y evolución.",
    ],
  },
  experience: {
    label: "Experiencia profesional",
    title: "Trayectoria.",
    items: [
      {
        company: "Grupo Talento",
        period: "2010 – actualidad",
        text: "Colaboraciones iniciales y dedicación profesional continua desde 2022. Responsable técnico autónomo del desarrollo y evolución de sistemas empresariales, ERP, CRM y plataformas comerciales.",
      },
      {
        company: "Wozial",
        period: "2019 – 2021",
        role: "Líder de proyectos de desarrollo de software",
        text: "Evolución de framework PHP propio, coordinación técnica y transferencia de conocimientos.",
      },
      {
        company: "Desarrollo independiente y colaboraciones",
        text: "Desarrollo de aplicaciones web, ecommerce y sistemas empresariales para proyectos propios y clientes.",
      },
    ],
  },
  technologies: {
    label: "Tecnologías",
    title: "Herramientas de trabajo.",
    groups: [
      { name: "Backend", items: ["PHP", "Laravel", "Node.js", "Express"] },
      { name: "Frontend", items: ["JavaScript", "TypeScript", "React", "Vite", "Tailwind CSS"] },
      { name: "Bases de datos", items: ["MySQL", "MariaDB", "PostgreSQL"] },
      { name: "Infraestructura", items: ["Linux", "VPS", "Plesk", "Git", "GitHub"] },
      { name: "Integración", items: ["APIs REST", "JSON", "Migración de datos"] },
    ],
  },
  about: {
    label: "Sobre mí",
    title: "Formación e idiomas.",
    text: "Ingeniero de software y desarrollador Full Stack con casi 20 años de experiencia. Combino experiencia técnica, comprensión de procesos de negocio y capacidad para desarrollar soluciones completas.",
    educationTitle: "Formación",
    education: [
      {
        title: "Maestría en Ingeniería de Software y Sistemas Informáticos",
        school: "UNIR México",
        detail: "En curso desde febrero de 2026. Finalización estimada en julio de 2027.",
      },
      {
        title: "Ingeniería Civil",
        school: "Universidad Michoacana de San Nicolás de Hidalgo",
        detail: "Estudios 1997–2002. Título y cédula expedidos en 2003.",
      },
    ],
    languagesTitle: "Idiomas",
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "B2" },
      { name: "Ruso", level: "A2" },
    ],
  },
  contact: {
    label: "Contacto",
    title: "Conversemos.",
    message:
      "Estoy interesado en oportunidades profesionales relacionadas con ingeniería de software, desarrollo de producto, aplicaciones empresariales y plataformas SaaS.",
    emailLabel: "Correo",
  },
  footer: { rights: "Todos los derechos reservados." },
};

const en: Content = {
  meta: {
    title: "Efraín González — Senior Software Engineer | Full Stack Developer",
    description:
      "Nearly 20 years building software. Engineering, full stack development and enterprise systems: ERP, SaaS platforms and systems integration.",
  },
  nav: {
    home: "Home",
    projects: "Projects",
    experience: "Experience",
    technologies: "Technologies",
    about: "About",
    contact: "Contact",
  },
  ui: {
    cv: "Download CV",
    cvRequest: "Request CV",
    menu: "Menu",
    close: "Close",
    langLabel: "Language",
    viewProject: "View project",
    allProjects: "All projects",
    backHome: "Back to home",
    technologies: "Technologies",
    areas: "Areas",
    status: "Status",
    scope: "Scope",
    previous: "Previous project",
    next: "Next project",
    skip: "Skip to content",
    cvMailSubject: "CV request",
  },
  hero: {
    role: "Senior Software Engineer | Full Stack Developer",
    titleA: "Nearly",
    titleNum: "20 years",
    titleB: "building software.",
    subtitle: "Engineering, full stack development and enterprise systems.",
    description:
      "I design and build enterprise applications, SaaS platforms and systems integrations. I bring together technical depth, a solid understanding of business processes and the ability to deliver complete solutions — from analysis through implementation and ongoing evolution.",
    explore: "Explore projects",
    photoAlt: "Efraín González Macías, software engineer, standing in a dark suit",
    caption: "Efraín González Macías",
  },
  indicators: [
    { value: "20", unit: "years", label: "Approximate experience in software development." },
    { value: "100+", label: "Websites built over the course of my career." },
    { value: "3,100+", label: "Historical quotes migrated during an enterprise integration project." },
    { value: "ERP · SaaS", label: "Experience building enterprise systems and software platforms." },
  ],
  indicatorsNote: "Figures refer to different projects and stages of my career.",
  specialties: {
    label: "Specialties",
    title: "Systems that keep a business running.",
    items: [
      {
        title: "Enterprise software",
        text: "ERP, CRM, inventory, orders, quotes, administration and process automation.",
      },
      {
        title: "SaaS and product development",
        text: "Web applications, multi-tenant platforms, subscription management and digital products.",
      },
      {
        title: "Systems integration",
        text: "REST APIs, cross-platform communication, databases and data migrations.",
      },
    ],
  },
  projects: {
    label: "Featured projects",
    title: "Recent work.",
    intro: "Enterprise systems, SaaS platforms and integrations built end to end.",
    items: [
      {
        slug: "grupo-talento",
        name: "Grupo Talento",
        kicker: "ERP and platform integration",
        summary: "Integration of four independent quoting platforms with an enterprise ERP.",
        description:
          "Integration of four independent quoting platforms with an enterprise ERP. Development of REST APIs, data normalization, API key authentication and the migration of more than 3,100 historical quotes.",
        scope: [
          "Integration of four quoting platforms with the ERP",
          "REST API development",
          "Data normalization",
          "API key authentication",
          "Migration of more than 3,100 historical quotes",
        ],
        areas: ["ERP", "REST APIs", "Data migration"],
        highlight: { value: "3,100+", label: "historical quotes migrated" },
      },
      {
        slug: "acerca",
        name: "ACERCA",
        kicker: "SaaS platform",
        summary: "A SaaS platform for business digitalization.",
        description:
          "A SaaS platform for business digitalization: Smart Links, microsites, digital menus, scheduling, bookings, analytics, multi-company management and subscriptions.",
        scope: ["Smart Links", "Microsites", "Digital menus", "Scheduling and bookings", "Analytics", "Multi-company management", "Subscriptions"],
        stack: ["Laravel", "PHP", "PostgreSQL", "JavaScript"],
      },
      {
        slug: "glop-contadores",
        name: "GLOP Contadores",
        kicker: "Platform for accounting firms",
        summary: "Document management, administrative workflows and communication between accounting firms and their clients.",
        description:
          "An independent platform for document management, administrative workflows, tax information, payroll and communication between accounting firms and their clients.",
        scope: ["Document management", "Administrative workflows", "Tax information", "Payroll", "Firm–client communication"],
        stack: ["PHP", "MySQL"],
      },
      {
        slug: "fluxsalud",
        name: "FluxSalud",
        kicker: "Clinic management system",
        summary: "Patients, appointments, digital records, physicians, offices, roles and payments.",
        description:
          "A clinic management system covering patients, appointments, digital medical records, physicians, offices, users, roles and payments. Migrated from Supabase to a self-owned architecture.",
        scope: ["Patients and appointments", "Digital medical records", "Physicians and offices", "Users and roles", "Payments", "Migration from Supabase to a self-owned architecture"],
        stack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL"],
      },
      {
        slug: "usb-stock",
        name: "USB Stock",
        kicker: "Commercial platform modernization",
        summary: "Catalog, quotes, FTP synchronization and integration APIs.",
        description:
          "Modernization of a commercial platform with Laravel, PHP and MariaDB: catalog, quotes, FTP synchronization and integration APIs. More than 200 automated tests.",
        scope: ["Catalog", "Quotes", "FTP synchronization", "Integration APIs", "More than 200 automated tests"],
        stack: ["Laravel", "PHP", "MariaDB"],
        status: "In development",
        highlight: { value: "200+", label: "automated tests" },
      },
    ],
  },
  process: {
    label: "How I work",
    title: "From business process to production system.",
    steps: [
      "Needs and process analysis.",
      "Architecture and data model design.",
      "Backend and frontend development.",
      "Testing and validation.",
      "Deployment, maintenance and evolution.",
    ],
  },
  experience: {
    label: "Professional experience",
    title: "Career.",
    items: [
      {
        company: "Grupo Talento",
        period: "2010 – present",
        text: "Early collaborations, with continuous professional dedication since 2022. Autonomous technical lead responsible for building and evolving enterprise systems, ERP, CRM and commercial platforms.",
      },
      {
        company: "Wozial",
        period: "2019 – 2021",
        role: "Software development project lead",
        text: "Evolution of an in-house PHP framework, technical coordination and knowledge transfer.",
      },
      {
        company: "Independent development and collaborations",
        text: "Web applications, ecommerce and enterprise systems for my own projects and for clients.",
      },
    ],
  },
  technologies: {
    label: "Technologies",
    title: "Tools of the trade.",
    groups: [
      { name: "Backend", items: ["PHP", "Laravel", "Node.js", "Express"] },
      { name: "Frontend", items: ["JavaScript", "TypeScript", "React", "Vite", "Tailwind CSS"] },
      { name: "Databases", items: ["MySQL", "MariaDB", "PostgreSQL"] },
      { name: "Infrastructure", items: ["Linux", "VPS", "Plesk", "Git", "GitHub"] },
      { name: "Integration", items: ["REST APIs", "JSON", "Data migration"] },
    ],
  },
  about: {
    label: "About",
    title: "Education and languages.",
    text: "Software engineer and Full Stack developer with nearly 20 years of experience. I bring together technical depth, an understanding of business processes and the ability to deliver complete solutions.",
    educationTitle: "Education",
    education: [
      {
        title: "Master's in Software Engineering and Computer Systems",
        school: "UNIR México",
        detail: "In progress since February 2026. Expected completion: July 2027.",
      },
      {
        title: "Civil Engineering",
        school: "Universidad Michoacana de San Nicolás de Hidalgo",
        detail: "Studies 1997–2002. Degree and professional license issued in 2003.",
      },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "B2" },
      { name: "Russian", level: "A2" },
    ],
  },
  contact: {
    label: "Contact",
    title: "Let's talk.",
    message:
      "I'm interested in professional opportunities in software engineering, product development, enterprise applications and SaaS platforms.",
    emailLabel: "Email",
  },
  footer: { rights: "All rights reserved." },
};

export const CONTENT: Record<Lang, Content> = { es, en };

export function getProject(lang: Lang, slug: string) {
  return CONTENT[lang].projects.items.find((p) => p.slug === slug);
}

export function cvHref(lang: Lang) {
  return CV_URL ?? `mailto:${CONTACT.email}?subject=${encodeURIComponent(CONTENT[lang].ui.cvMailSubject)}`;
}

export function cvLabel(lang: Lang) {
  return CV_URL ? CONTENT[lang].ui.cv : CONTENT[lang].ui.cvRequest;
}
