import cvAsset from "@/assets/efrain-gonzalez-cv.pdf.asset.json";

export type Lang = "es" | "en";

export const SITE_URL = "https://efra.biz";
export const BRAND_NAME = "EFRA";
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
  "usb-stock",
  "acerca",
  "fluxsalud",
  "glop-contadores",
  "colicontjal",
] as const;
export type ProjectSlug = (typeof PROJECT_SLUGS)[number];

export const SECTION_IDS: Record<
  Lang,
  Record<
    "projects" | "experience" | "technologies" | "about" | "contact" | "specialties" | "process",
    string
  >
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
  sections?: { title: string; paragraphs: string[] }[];
  links?: { label: string; href: string }[];
  screenshots?: { url: string; alt: string; caption?: string }[];
};

export type Content = {
  meta: { title: string; description: string };
  nav: {
    home: string;
    projects: string;
    experience: string;
    technologies: string;
    about: string;
    contact: string;
  };
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
    mainNav: string;
    screenshotLabel: string;
  };
  hero: {
    role: string;
    titleA: string;
    titleNum: string;
    titleB: string;
    subtitle: string;
    description: string;
    explore: string;
    photoAlt: string;
    caption: string;
  };
  indicators: Indicator[];
  indicatorsNote: string;
  specialties: { label: string; title: string; items: { title: string; text: string }[] };
  infrastructure: {
    title: string;
    intro: string;
    groups: { title: string; items: string[] }[];
    conclusion: string;
  };
  projects: { label: string; title: string; intro: string; items: Project[] };
  process: { label: string; title: string; steps: string[] };
  experience: {
    label: string;
    title: string;
    items: {
      company: string;
      period?: string;
      role?: string;
      text: string;
      details?: { title: string; items: string[] }[];
      links?: { label: string; href: string }[];
    }[];
  };
  technologies: {
    label: string;
    title: string;
    intro: string;
    groups: { name: string; items: string[] }[];
  };
  about: {
    label: string;
    title: string;
    text: string;
    summary: string[];
    location: string;
    focus: { title: string; paragraphs: string[]; topics: string[] };
    educationTitle: string;
    education: { title: string; school: string; detail: string }[];
    languagesTitle: string;
    languages: { name: string; level: string }[];
  };
  contact: { label: string; title: string; message: string; emailLabel: string };
  footer: { rights: string };
  errors: {
    notFound: string;
    notFoundText: string;
    home: string;
    failed: string;
    failedText: string;
    retry: string;
    projectUnavailable: string;
  };
};

const es: Content = {
  meta: {
    title: "EFRA — Efraín González | Software empresarial e infraestructura",
    description:
      "Ingeniero de software senior en Guadalajara con casi 20 años de experiencia en aplicaciones empresariales, sistemas backend, ERP y administración de infraestructura Linux.",
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
    scope: "Funcionalidad principal",
    previous: "Proyecto anterior",
    next: "Siguiente proyecto",
    skip: "Saltar al contenido",
    cvMailSubject: "Solicitud de CV",
    mainNav: "Principal",
    screenshotLabel: "Capturas del proyecto",
  },
  hero: {
    role: "Ingeniero de software senior | Aplicaciones empresariales, backend e infraestructura",
    titleA: "Casi",
    titleNum: "20 años",
    titleB: "desarrollando software.",
    subtitle: "Software empresarial, sistemas backend e infraestructura.",
    description:
      "Desarrollo y modernizo aplicaciones de negocio e integro sus sistemas. También administro los servidores Linux y entornos de hosting que las mantienen en operación.",
    explore: "Explorar proyectos",
    photoAlt: "Efraín González Macías, ingeniero de software, de pie con traje oscuro",
    caption: "Efraín González Macías",
  },
  indicators: [
    {
      value: "20",
      unit: "años",
      label: "Cerca de 20 años de experiencia desarrollando software.",
    },
    {
      value: "3",
      unit: "ERP activos",
      label: "Sistemas de gestión empresarial desarrollados y actualmente en uso.",
    },
    {
      value: "100+",
      label: "Sitios y aplicaciones web desarrollados a lo largo de mi carrera.",
    },
  ],
  indicatorsNote: "ERP activos: Grupo Talento · GLOP Contadores · COLICONTJAL.",
  specialties: {
    label: "Especialidades",
    title: "Sistemas que sostienen la operación de un negocio.",
    items: [
      {
        title: "Software empresarial",
        text: "ERP, CRM, procesos comerciales y administrativos, automatización y modernización de aplicaciones legadas.",
      },
      {
        title: "Backend e integración",
        text: "PHP, Laravel, bases de datos relacionales, APIs REST y servicios externos conectados a procesos de negocio.",
      },
      {
        title: "Infraestructura y operación",
        text: "Administración Linux, VPS y hosting, despliegue de aplicaciones, seguridad web y mantenimiento en producción.",
      },
    ],
  },
  infrastructure: {
    title: "Infraestructura que mantiene el software en operación.",
    intro:
      "La administración de servidores y entornos de hosting ha sido una responsabilidad central a lo largo de mi carrera, junto con el desarrollo de aplicaciones empresariales.",
    groups: [
      {
        title: "Linux y administración de servidores",
        items: [
          "Administración de VPS Linux, configuración y mantenimiento de servidores",
          "Entornos Plesk y cPanel; Apache, Nginx, PHP y PHP-FPM",
          "Administración de servidores de bases de datos",
          "Dominios, subdominios y configuración y diagnóstico de DNS",
          "Configuración y renovación de certificados SSL",
        ],
      },
      {
        title: "Infraestructura web y seguridad",
        items: [
          "Configuración de entornos de hosting y seguridad de aplicaciones y servidores",
          "Control de acceso, permisos y mecanismos de seguridad web",
          "Mantenimiento y refuerzo de la configuración de servidores",
          "Supervisión y resolución de problemas en producción",
        ],
      },
      {
        title: "Ciclo de vida y continuidad operativa",
        items: [
          "Preparación del alojamiento y configuración del entorno de ejecución",
          "Despliegue de aplicaciones y actualizaciones",
          "Mantenimiento de bases de datos y servicios",
          "Diagnóstico de incidencias en servidores y aplicaciones",
          "Copias de seguridad, recuperación y continuidad operativa",
        ],
      },
    ],
    conclusion:
      "Mi responsabilidad no termina al entregar código: incluye mantener los entornos, servicios y configuraciones que permiten que el software siga funcionando.",
  },
  projects: {
    label: "Proyectos destacados",
    title: "Software en contexto.",
    intro:
      "Aplicaciones empresariales, productos independientes y casos de estudio con responsabilidad técnica de principio a fin.",
    items: [
      {
        slug: "grupo-talento",
        name: "Grupo Talento ERP",
        kicker: "Ecosistema de gestión empresarial",
        summary:
          "Desarrollo y evolución de un ERP que conecta ventas, compras, producción y logística con plataformas comerciales.",
        description:
          "Ecosistema de gestión empresarial desarrollado y mantenido durante varios años. Integra procesos comerciales y operativos, plataformas de cotización y servicios logísticos, con responsabilidad continua sobre software e infraestructura.",
        scope: [
          "Cotizaciones, ventas, pedidos y validación automatizada",
          "CRM y cálculo de comisiones",
          "Proveedores, portal de cotización y costos de importación",
          "Costos de producción y requisiciones de compra",
          "Roles, permisos y flujos de aprobación",
          "Integración de múltiples plataformas de cotización",
          "Seguimiento logístico y múltiples guías por pedido",
        ],
        areas: ["ERP y CRM", "APIs REST", "Webhooks", "Infraestructura Linux"],
        stack: ["PHP", "APIs REST", "Webhooks", "Linux", "Telegram", "17TRACK"],
        status: "Sistema activo",
        sections: [
          {
            title: "Contexto y responsabilidad",
            paragraphs: [
              "Colaboro con Grupo Talento desde 2010 y mantengo responsabilidad principal continua sobre sus sistemas desde 2022. Mi trabajo combina ingeniería de software, integración de sistemas y operación de la infraestructura que sostiene aplicaciones críticas para el negocio.",
            ],
          },
          {
            title: "Procesos empresariales y evolución del ERP",
            paragraphs: [
              "El ERP reúne cotizaciones y ventas, pedidos, CRM, comisiones, proveedores, compras y logística. Las reglas de negocio, validaciones automáticas y flujos de aprobación se vinculan con roles y permisos operativos.",
              "El portal de cotización de proveedores incorpora cálculos automatizados de costos de importación. Los módulos de costos de producción y requisiciones de compra conectan necesidades comerciales con la operación interna.",
            ],
          },
          {
            title: "Integración de plataformas y logística",
            paragraphs: [
              "APIs REST conectan varias plataformas corporativas de cotización con el ERP central, estandarizando el intercambio de información comercial.",
              "La integración con la API REST de 17TRACK permite seguimiento de DHL Express, Estafeta, Paquetexpress y Tresguerras. Los webhooks procesan eventos de envío y admiten múltiples números de seguimiento por pedido. La deduplicación evita eventos repetidos; la normalización de estados permite notificaciones internas por Telegram.",
            ],
          },
          {
            title: "Infraestructura y mantenimiento",
            paragraphs: [
              "Mantengo y evoluciono software legado y los entornos Linux de hosting. La responsabilidad incluye despliegues, dominios, DNS, configuración de alojamiento y resolución de incidencias en bases de datos y aplicaciones.",
              "La operación también abarca los sitios corporativos de Grupo Talento, con soporte a los sistemas empresariales y sus plataformas comerciales.",
            ],
          },
        ],
        links: [
          {
            label: "grupotalento.com.mx",
            href: "https://grupotalento.com.mx",
          },
          {
            label: "usbstock.mx",
            href: "https://usbstock.mx",
          },
          {
            label: "usbpromocional.com.mx",
            href: "https://usbpromocional.com.mx",
          },
          {
            label: "usbpromotional.com",
            href: "https://usbpromotional.com",
          },
          {
            label: "usbirdy.com",
            href: "https://usbirdy.com",
          },
          {
            label: "publimarca.com.mx",
            href: "https://publimarca.com.mx",
          },
          {
            label: "fastgate.com.mx",
            href: "https://fastgate.com.mx",
          },
          {
            label: "promoestres.com",
            href: "https://promoestres.com",
          },
        ],
      },
      {
        slug: "usb-stock",
        name: "USB Stock",
        kicker: "Catálogo B2B y plataforma de cotización",
        summary:
          "Modernización de un catálogo comercial con reglas de precios, cotizaciones PDF y APIs de integración.",
        description:
          "Modernización de una plataforma B2B de catálogo y cotización que reemplaza un sitio legado, preservando datos de negocio relevantes y lógica de precios.",
        scope: [
          "Catálogo de productos, variantes y búsqueda",
          "Importación CSV, normalización e información de inventario",
          "Solicitudes de cotización y carrito",
          "Precios por volumen, descuentos, impuestos y envío",
          "Generación de cotizaciones PDF con mPDF",
          "Instantáneas históricas de cotizaciones",
          "API REST con autenticación Bearer Token",
          "Recuperación segura de PDF y registros de auditoría",
        ],
        stack: [
          "Laravel 12",
          "PHP 8.2",
          "MariaDB",
          "Blade",
          "JavaScript",
          "Tailwind CSS",
          "Vite",
          "mPDF",
          "REST API",
          "Git",
          "Linux",
        ],
        highlight: {
          value: "200+",
          label: "pruebas automatizadas",
        },
        sections: [
          {
            title: "Modernización y responsabilidad técnica",
            paragraphs: [
              "Desarrollo la evolución del catálogo y la plataforma de cotización, trasladando datos y reglas comerciales relevantes del sistema legado a una aplicación Laravel. La importación CSV normaliza productos y variantes para conservar información utilizable.",
            ],
          },
          {
            title: "Cotizaciones y decisiones técnicas",
            paragraphs: [
              "Las reglas de precios consideran cantidades, descuentos, impuestos y envío. Las cotizaciones generadas en PDF mantienen instantáneas históricas para preservar el contexto comercial de cada documento.",
              "La API REST utiliza autenticación Bearer Token. La recuperación de documentos PDF se realiza de forma segura y queda respaldada por registros de auditoría.",
            ],
          },
          {
            title: "Pruebas y entorno de demostración",
            paragraphs: [
              "Más de 200 pruebas automatizadas respaldan el desarrollo. La aplicación utiliza Laravel 12, PHP 8.2 y MariaDB, con Blade, JavaScript y Tailwind CSS en la interfaz y Vite como herramienta de compilación.",
              "usbstock.efra.biz es un entorno de demostración, separado del entorno operativo de producción de la organización; no debe confundirse con usbstock.mx.",
            ],
          },
        ],
        links: [
          {
            label: "Demostración",
            href: "https://usbstock.efra.biz/",
          },
          {
            label: "Repositorio en GitHub",
            href: "https://github.com/ingefrain/usbstock",
          },
        ],
      },
      {
        slug: "acerca",
        name: "ACERCA",
        kicker: "Plataforma SaaS con NFC y QR",
        summary:
          "Producto independiente que conecta negocios físicos con experiencias digitales mediante NFC y QR.",
        description:
          "Plataforma SaaS desarrollada de forma independiente para conectar negocios físicos con experiencias digitales a través de tecnología NFC y QR.",
        scope: [
          "Enlaces NFC y QR dinámicos",
          "Smart Links con destinos editables",
          "Micrositios de negocios y menús digitales",
          "Agendas, citas y reservas",
          "Experiencias de fidelización",
          "Gestión multiempresa, usuarios, roles y permisos",
          "Suscripciones y flujos de pago",
          "Analítica de uso",
        ],
        stack: ["Laravel", "PHP", "PostgreSQL", "JavaScript", "Linux", "VPS"],
        sections: [
          {
            title: "Producto y responsabilidad",
            paragraphs: [
              "Desarrollé el software de ACERCA de forma independiente. El producto reúne herramientas para que negocios físicos mantengan una presencia digital conectada a puntos de contacto NFC y QR.",
            ],
          },
          {
            title: "Arquitectura y funcionalidades",
            paragraphs: [
              "Laravel y PostgreSQL sostienen la plataforma, con gestión multiempresa y control de acceso mediante roles y permisos. Los enlaces dinámicos y Smart Links permiten actualizar destinos sin sustituir el punto de contacto físico.",
              "Micrositios, menús digitales, agendas y reservas se complementan con experiencias de fidelización, flujos de suscripción y pago, y analítica de uso.",
            ],
          },
          {
            title: "Infraestructura y entornos",
            paragraphs: [
              "La plataforma utiliza infraestructura Linux y VPS. La demostración está disponible en acerca.efra.biz y el sitio comercial del producto en acerca.mx.",
            ],
          },
        ],
        links: [
          {
            label: "Demostración",
            href: "https://acerca.efra.biz/",
          },
          {
            label: "Sitio comercial",
            href: "https://acerca.mx/",
          },
        ],
      },
      {
        slug: "fluxsalud",
        name: "FluxSalud",
        kicker: "Sistema de gestión clínica",
        summary:
          "Caso de estudio con frontend React, API REST independiente y PostgreSQL en infraestructura propia.",
        description:
          "Aplicación de gestión clínica desarrollada para pacientes, citas, expedientes digitales, médicos, consultorios, usuarios, roles y pagos. Se presenta como proyecto de software y caso de estudio técnico, no como servicio comercial en operación.",
        scope: [
          "Pacientes y citas",
          "Expedientes digitales",
          "Médicos y consultorios",
          "Usuarios y roles",
          "Pagos",
          "Migración a infraestructura autogestionada",
        ],
        stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
        status: "Caso de estudio técnico",
        sections: [
          {
            title: "Propósito y responsabilidad técnica",
            paragraphs: [
              "Desarrollé la aplicación y su evolución hacia infraestructura propia, con un panel administrativo para los procesos de gestión clínica. El proyecto no opera actualmente como servicio comercial.",
            ],
          },
          {
            title: "Arquitectura desacoplada",
            paragraphs: [
              "El frontend React y el panel administrativo consumen una API REST independiente desarrollada con Node.js y Express. La API opera detrás de un proxy inverso y utiliza PostgreSQL como base de datos. Es una arquitectura desacoplada de frontend y API, no de microservicios.",
            ],
          },
          {
            title: "Autenticación y despliegue",
            paragraphs: [
              "La migración desde Supabase a infraestructura autogestionada incorpora autenticación JWT y hash de contraseñas. Se separan la interfaz, el servicio API y la base de datos para mantener límites claros de ejecución.",
              "La demostración está prevista en https://fluxsalud.efra.biz/; todavía no se presenta como un servicio disponible.",
            ],
          },
        ],
        links: [],
      },
      {
        slug: "glop-contadores",
        name: "GLOP Contadores",
        kicker: "Gestión contable y portal de clientes",
        summary:
          "Sistema activo para gestión documental, solicitudes y comunicación entre un despacho contable y sus clientes.",
        description:
          "Aplicación PHP/MySQL desarrollada de forma independiente para un despacho contable y sus clientes. Es uno de los tres sistemas de gestión empresarial que he desarrollado y que actualmente siguen activos.",
        scope: [
          "Carga y descarga de documentos",
          "Solicitudes de clientes",
          "Flujos administrativos",
          "Gestión documental",
          "Comunicación entre despacho y clientes",
        ],
        stack: ["PHP", "MySQL"],
        status: "Sistema activo",
        sections: [
          {
            title: "Contexto y responsabilidad",
            paragraphs: [
              "Desarrollé de forma independiente la aplicación que organiza el intercambio de información entre el despacho contable y sus clientes, con responsabilidad sobre la implementación del software.",
            ],
          },
          {
            title: "Aplicación y procesos",
            paragraphs: [
              "La aplicación utiliza PHP y MySQL para gestionar documentos, solicitudes y flujos administrativos. El portal permite cargar y descargar archivos y sostener la interacción entre el despacho y sus clientes.",
            ],
          },
        ],
        links: [
          {
            label: "Sitio web",
            href: "https://glop.mx/",
          },
        ],
      },
      {
        slug: "colicontjal",
        name: "COLICONTJAL",
        kicker: "ERP y plataforma de cursos en línea",
        summary:
          "Sistema activo de gestión y formación para el Colegio de Licenciados en Contaduría Pública de Jalisco A.C.",
        description:
          "ERP y plataforma de capacitación en línea desarrollados de forma independiente para el Colegio de Licenciados en Contaduría Pública de Jalisco A.C. Es uno de mis tres sistemas de gestión empresarial actualmente activos.",
        scope: [
          "Sistema ERP para la asociación contable",
          "Plataforma de cursos y capacitación en línea",
          "Desarrollo independiente con framework PHP propio",
        ],
        stack: ["PHP", "Framework PHP propio"],
        status: "Sistema activo",
        sections: [
          {
            title: "Contexto y responsabilidad",
            paragraphs: [
              "Desarrollé de forma independiente el ERP y la plataforma de formación para el Colegio de Licenciados en Contaduría Pública de Jalisco A.C., combinando gestión de la asociación y capacitación en línea.",
            ],
          },
          {
            title: "Base técnica",
            paragraphs: [
              "El proyecto utiliza un framework PHP propio como base reutilizable para el software de gestión y la plataforma de cursos. El sitio institucional y una demostración en video permiten conocer el proyecto.",
            ],
          },
        ],
        links: [
          {
            label: "Sitio web",
            href: "https://colicontjal.org.mx/",
          },
          {
            label: "Demostración en video",
            href: "https://youtu.be/hYDTpx5ikcI",
          },
        ],
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
        role: "Ingeniero de software y desarrollador de sistemas",
        text: "Colaboraciones desde 2010 y responsabilidad principal continua sobre los sistemas de software desde 2022. Mi función combina desarrollo empresarial, integración de sistemas y operación de infraestructura.",
        details: [
          {
            title: "Aplicaciones empresariales y ERP",
            items: [
              "Módulos críticos de cotizaciones, pedidos, CRM, comisiones, compras, proveedores, producción y logística.",
              "Reglas de negocio, aprobaciones, permisos por rol y validación automatizada de pedidos.",
              "Portal de cotización de proveedores, costos de importación y costos de producción.",
            ],
          },
          {
            title: "Integración de sistemas",
            items: [
              "APIs REST entre plataformas de cotización y el ERP central; estandarización de información comercial.",
              "Servicios logísticos mediante APIs y webhooks, múltiples guías por pedido, normalización de estados y notificaciones.",
            ],
          },
          {
            title: "Infraestructura y operación",
            items: [
              "Administración de hosting Linux, despliegue, mantenimiento de aplicaciones y sitios corporativos.",
              "Dominios, DNS, alojamiento y resolución de incidencias en aplicaciones y bases de datos.",
              "Soporte operativo a sistemas críticos para el negocio.",
            ],
          },
        ],
        links: [
          {
            label: "grupotalento.com.mx",
            href: "https://grupotalento.com.mx",
          },
          {
            label: "usbstock.mx",
            href: "https://usbstock.mx",
          },
          {
            label: "usbpromocional.com.mx",
            href: "https://usbpromocional.com.mx",
          },
          {
            label: "usbpromotional.com",
            href: "https://usbpromotional.com",
          },
          {
            label: "usbirdy.com",
            href: "https://usbirdy.com",
          },
          {
            label: "publimarca.com.mx",
            href: "https://publimarca.com.mx",
          },
          {
            label: "fastgate.com.mx",
            href: "https://fastgate.com.mx",
          },
          {
            label: "promoestres.com",
            href: "https://promoestres.com",
          },
        ],
      },
      {
        company: "Wozial",
        period: "2019 – 2021",
        role: "Líder de proyectos de software",
        text: "Liderazgo de proyectos y evolución de un framework PHP reutilizable. Desarrollo de componentes comunes de enrutamiento, autenticación, acceso a bases de datos, usuarios y administración modular. Establecí una base compartida para proyectos internos y apoyé a otros desarrolladores en su adopción.",
      },
      {
        company: "Desarrollo independiente",
        period: "2010 – actualidad",
        role: "Desarrollador de software",
        text: "Aplicaciones empresariales a medida, sitios web y plataformas ecommerce. Desarrollo y evolución de un framework PHP reutilizable, con responsabilidad sobre requisitos, implementación, despliegue y mantenimiento.",
      },
    ],
  },
  technologies: {
    label: "Tecnologías",
    title: "Herramientas de trabajo.",
    intro:
      "PHP, Laravel, bases de datos relacionales y operación Linux son áreas centrales de mi práctica. React, Node.js y Express complementan proyectos con frontend y API independientes.",
    groups: [
      {
        name: "Desarrollo backend",
        items: ["PHP", "Laravel", "Node.js", "Express", "REST APIs", "JSON", "Webhooks"],
      },
      {
        name: "Desarrollo frontend",
        items: ["JavaScript", "TypeScript", "React", "Blade", "HTML5", "CSS3", "Tailwind CSS"],
      },
      {
        name: "Bases de datos",
        items: ["MariaDB", "MySQL", "PostgreSQL", "SQL", "Diseño relacional"],
      },
      {
        name: "Arquitectura e integración",
        items: [
          "ERP",
          "CRM",
          "Aplicaciones modulares",
          "Autenticación de APIs",
          "Interoperabilidad",
          "Procesamiento de eventos",
          "Modernización de sistemas legados",
        ],
      },
      {
        name: "Pruebas y seguridad",
        items: [
          "PHPUnit",
          "Pruebas automatizadas",
          "Control de acceso por roles",
          "Auditoría",
          "Seguridad de aplicaciones",
        ],
      },
      {
        name: "Infraestructura y operación",
        items: [
          "Linux",
          "VPS",
          "Plesk",
          "cPanel",
          "Nginx",
          "Apache",
          "PHP-FPM",
          "DNS",
          "SSL",
          "Administración de hosting",
          "Despliegue",
          "Mantenimiento de servidores",
          "Diagnóstico en producción",
        ],
      },
      {
        name: "Herramientas",
        items: ["Git", "GitHub", "Vite", "mPDF"],
      },
    ],
  },
  about: {
    label: "Sobre mí",
    title: "Ingeniería con visión de negocio.",
    text: "Desarrollador de software senior con cerca de 20 años de experiencia en el diseño, desarrollo, mantenimiento y modernización de aplicaciones empresariales, sistemas de gestión y plataformas web.",
    summary: [
      "Especializado en PHP, Laravel, bases de datos relacionales, desarrollo backend e integración de APIs REST. Transformo procesos de negocio complejos en soluciones de software, integro servicios externos y automatizo operaciones comerciales y administrativas.",
      "Combino desarrollo Full Stack con responsabilidad práctica en administración de servidores Linux, entornos VPS y hosting, mantenimiento de infraestructura, despliegue de aplicaciones, configuración de seguridad web y resolución de incidencias en producción.",
      "Actualmente curso la Maestría en Ingeniería de Software y Sistemas Informáticos, con formación académica en computación en la nube y AWS.",
    ],
    location: "Guadalajara, México",
    educationTitle: "Formación",
    education: [
      {
        title: "Maestría en Ingeniería de Software y Sistemas Informáticos",
        school: "UNIR México | 2026 – actualidad",
        detail: "En curso. Finalización estimada: julio de 2027.",
      },
      {
        title: "Ingeniería Civil",
        school: "Universidad Michoacana de San Nicolás de Hidalgo (UMSNH)",
        detail: "Licenciatura.",
      },
    ],
    languagesTitle: "Idiomas",
    languages: [
      {
        name: "Español",
        level: "Nativo",
      },
      {
        name: "Inglés",
        level: "B2",
      },
      {
        name: "Ruso",
        level: "A2",
      },
    ],
    focus: {
      title: "Enfoque profesional: computación en la nube y AWS",
      paragraphs: [
        "Amplío mi formación en computación en la nube y AWS mediante estudios de posgrado y ejercicios prácticos, con interés en arquitectura de redes, seguridad y despliegue de aplicaciones.",
        "Mi experiencia en backend, aplicaciones empresariales, administración Linux e infraestructura de producción aporta una base práctica para contribuir a proyectos que utilizan AWS. Esta formación no equivale a experiencia profesional administrando infraestructura AWS en producción.",
      ],
      topics: [
        "AWS VPC",
        "Subredes públicas y privadas",
        "EC2",
        "RDS",
        "Seguridad de red",
        "Despliegue de aplicaciones en la nube",
      ],
    },
  },
  contact: {
    label: "Contacto",
    title: "Conversemos.",
    message:
      "Estoy interesado en oportunidades de ingeniería de software con empresas que necesitan desarrollar, mantener o modernizar aplicaciones empresariales, sistemas backend e infraestructura.",
    emailLabel: "Correo",
  },
  footer: {
    rights: "Todos los derechos reservados.",
  },
  errors: {
    notFound: "Página no encontrada",
    notFoundText: "La página que buscas no existe o se ha movido.",
    home: "Volver al inicio",
    failed: "No se pudo cargar esta página",
    failedText: "Ocurrió un problema. Puedes volver a intentarlo o regresar al inicio.",
    retry: "Volver a intentar",
    projectUnavailable: "Proyecto no disponible — EFRA",
  },
};

const en: Content = {
  meta: {
    title: "EFRA — Efraín González | Enterprise Software & Infrastructure",
    description:
      "Senior Software Engineer in Guadalajara, Mexico, with nearly 20 years of experience in enterprise applications, backend systems, ERP and Linux infrastructure operations.",
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
    scope: "Core functionality",
    previous: "Previous project",
    next: "Next project",
    skip: "Skip to content",
    cvMailSubject: "CV request",
    mainNav: "Main",
    screenshotLabel: "Project screenshots",
  },
  hero: {
    role: "Senior Software Engineer | Enterprise Applications, Backend Systems & Infrastructure",
    titleA: "Nearly",
    titleNum: "20 years",
    titleB: "building software.",
    subtitle: "Enterprise software, backend systems and infrastructure.",
    description:
      "I build and modernize business applications and integrate their systems. I also administer the Linux servers and hosting environments that keep them running.",
    explore: "Explore projects",
    photoAlt: "Efraín González Macías, software engineer, standing in a dark suit",
    caption: "Efraín González Macías",
  },
  indicators: [
    {
      value: "20",
      unit: "years",
      label: "Nearly 20 years of software development experience.",
    },
    {
      value: "3",
      unit: "active ERPs",
      label: "Business management systems developed and currently in use.",
    },
    {
      value: "100+",
      label: "Websites and web applications developed throughout my career.",
    },
  ],
  indicatorsNote: "Active ERPs: Grupo Talento · GLOP Contadores · COLICONTJAL.",
  specialties: {
    label: "Specialties",
    title: "Systems that keep a business running.",
    items: [
      {
        title: "Enterprise software",
        text: "ERP, CRM, commercial and administrative workflows, automation and legacy application modernization.",
      },
      {
        title: "Backend and integration",
        text: "PHP, Laravel, relational databases, REST APIs and external services connected to business processes.",
      },
      {
        title: "Infrastructure and operations",
        text: "Linux, VPS and hosting administration, application deployment, web security and production maintenance.",
      },
    ],
  },
  infrastructure: {
    title: "Infrastructure that keeps software running.",
    intro:
      "Server administration and hosting operations have been core responsibilities throughout my career, alongside enterprise application development.",
    groups: [
      {
        title: "Linux and server administration",
        items: [
          "Linux VPS administration, server configuration and maintenance",
          "Plesk and cPanel environments; Apache, Nginx, PHP and PHP-FPM",
          "Database server administration",
          "Domains, subdomains, DNS configuration and troubleshooting",
          "SSL certificate configuration and renewal",
        ],
      },
      {
        title: "Web infrastructure and security",
        items: [
          "Hosting setup and application and server security configuration",
          "Access control, permissions and web security mechanisms",
          "Server hardening and ongoing configuration maintenance",
          "Production monitoring and troubleshooting",
        ],
      },
      {
        title: "Application lifecycle and continuity",
        items: [
          "Hosting preparation and runtime configuration",
          "Application deployment and updates",
          "Database and service maintenance",
          "Server and application incident troubleshooting",
          "Backups, recovery procedures and operational continuity",
        ],
      },
    ],
    conclusion:
      "My responsibility does not end with delivering code: it includes maintaining the environments, services and configurations that allow the software to keep operating.",
  },
  projects: {
    label: "Selected projects",
    title: "Software in context.",
    intro:
      "Enterprise applications, independent products and technical case studies with end-to-end technical responsibility.",
    items: [
      {
        slug: "grupo-talento",
        name: "Grupo Talento ERP",
        kicker: "Enterprise management ecosystem",
        summary:
          "Development and evolution of an ERP connecting sales, purchasing, production and logistics with commercial platforms.",
        description:
          "An enterprise management ecosystem developed and maintained over several years. It brings together commercial and operational workflows, quotation platforms and logistics services, with ongoing responsibility for both software and infrastructure.",
        scope: [
          "Quotations, sales, orders and automated validation",
          "CRM and commission calculations",
          "Suppliers, quotation portal and import costs",
          "Production costs and purchasing requisitions",
          "Roles, permissions and approval workflows",
          "Integration with multiple quotation platforms",
          "Shipment tracking and multiple tracking numbers per order",
        ],
        areas: ["ERP and CRM", "REST APIs", "Webhooks", "Linux infrastructure"],
        stack: ["PHP", "REST APIs", "Webhooks", "Linux", "Telegram", "17TRACK"],
        status: "Active system",
        sections: [
          {
            title: "Context and responsibility",
            paragraphs: [
              "I have collaborated with Grupo Talento since 2010 and held continuous primary responsibility for its software systems since 2022. The role combines software engineering, systems integration and operation of the infrastructure supporting business-critical applications.",
            ],
          },
          {
            title: "Business processes and ERP evolution",
            paragraphs: [
              "The ERP brings together quotations and sales, orders, CRM, commissions, suppliers, purchasing and logistics. Business rules, automated validation and approval workflows are tied to operational roles and permissions.",
              "The supplier quotation portal includes automated import-cost calculations. Production costing and purchasing requisitions connect commercial requirements with internal operations.",
            ],
          },
          {
            title: "Platform and logistics integration",
            paragraphs: [
              "REST APIs connect multiple corporate quotation platforms to the central ERP, standardizing the exchange of commercial information.",
              "Integration with the 17TRACK REST API supports DHL Express, Estafeta, Paquetexpress and Tresguerras. Webhooks process shipment events and support multiple tracking numbers per order. Event deduplication avoids repeated updates; status normalization supports internal Telegram notifications.",
            ],
          },
          {
            title: "Infrastructure and maintenance",
            paragraphs: [
              "I maintain and evolve legacy software and Linux hosting environments. Responsibilities include deployment, domains, DNS, hosting configuration and troubleshooting databases and applications.",
              "Operational support also covers Grupo Talento corporate websites, business systems and commercial platforms.",
            ],
          },
        ],
        links: [
          {
            label: "grupotalento.com.mx",
            href: "https://grupotalento.com.mx",
          },
          {
            label: "usbstock.mx",
            href: "https://usbstock.mx",
          },
          {
            label: "usbpromocional.com.mx",
            href: "https://usbpromocional.com.mx",
          },
          {
            label: "usbpromotional.com",
            href: "https://usbpromotional.com",
          },
          {
            label: "usbirdy.com",
            href: "https://usbirdy.com",
          },
          {
            label: "publimarca.com.mx",
            href: "https://publimarca.com.mx",
          },
          {
            label: "fastgate.com.mx",
            href: "https://fastgate.com.mx",
          },
          {
            label: "promoestres.com",
            href: "https://promoestres.com",
          },
        ],
      },
      {
        slug: "usb-stock",
        name: "USB Stock",
        kicker: "B2B catalog and quotation platform",
        summary:
          "Modernization of a commercial catalog with pricing rules, PDF quotations and integration APIs.",
        description:
          "Modernization of a B2B product catalog and quotation platform, replacing a legacy website while preserving relevant business data and pricing logic.",
        scope: [
          "Product catalog, variants and search",
          "CSV import, normalization and inventory information",
          "Quotation requests and cart interactions",
          "Quantity tiers, discounts, taxes and shipping",
          "PDF quotation generation with mPDF",
          "Historical quotation snapshots",
          "REST API with Bearer Token authentication",
          "Secure PDF retrieval and audit records",
        ],
        stack: [
          "Laravel 12",
          "PHP 8.2",
          "MariaDB",
          "Blade",
          "JavaScript",
          "Tailwind CSS",
          "Vite",
          "mPDF",
          "REST API",
          "Git",
          "Linux",
        ],
        highlight: {
          value: "200+",
          label: "automated tests",
        },
        sections: [
          {
            title: "Modernization and technical ownership",
            paragraphs: [
              "I develop the evolution of the catalog and quotation platform, transferring relevant commercial data and rules from the legacy system to a Laravel application. CSV import normalizes products and variants to preserve usable business information.",
            ],
          },
          {
            title: "Quotations and technical decisions",
            paragraphs: [
              "Pricing rules account for quantity tiers, discounts, taxes and shipping. Generated PDF quotations retain historical snapshots to preserve each document’s commercial context.",
              "The REST API uses Bearer Token authentication. PDF documents are retrieved securely, with audit records supporting traceability.",
            ],
          },
          {
            title: "Testing and demonstration environment",
            paragraphs: [
              "More than 200 automated tests support development. The application uses Laravel 12, PHP 8.2 and MariaDB, with Blade, JavaScript and Tailwind CSS for the interface and Vite for compilation.",
              "usbstock.efra.biz is a demonstration environment, separate from the organization’s operational production environment; it should not be confused with usbstock.mx.",
            ],
          },
        ],
        links: [
          {
            label: "Live demonstration",
            href: "https://usbstock.efra.biz/",
          },
          {
            label: "GitHub repository",
            href: "https://github.com/ingefrain/usbstock",
          },
        ],
      },
      {
        slug: "acerca",
        name: "ACERCA",
        kicker: "NFC and QR business SaaS platform",
        summary:
          "An independently developed product connecting physical businesses with digital experiences through NFC and QR.",
        description:
          "An independently developed SaaS platform connecting physical businesses with digital experiences through NFC and QR technology.",
        scope: [
          "Dynamic NFC and QR links",
          "Smart Links with editable destinations",
          "Business microsites and digital menus",
          "Appointment scheduling and reservations",
          "Customer loyalty experiences",
          "Multi-company management, users, roles and permissions",
          "Subscription and payment workflows",
          "Usage analytics",
        ],
        stack: ["Laravel", "PHP", "PostgreSQL", "JavaScript", "Linux", "VPS"],
        sections: [
          {
            title: "Product and ownership",
            paragraphs: [
              "I independently developed ACERCA’s software. The product brings together tools for physical businesses to maintain a digital presence connected to NFC and QR touchpoints.",
            ],
          },
          {
            title: "Architecture and functionality",
            paragraphs: [
              "Laravel and PostgreSQL support the platform, with multi-company management and role-based access control. Dynamic links and Smart Links allow destinations to change without replacing the physical touchpoint.",
              "Microsites, digital menus, scheduling and reservations are complemented by loyalty experiences, subscription and payment workflows, and usage analytics.",
            ],
          },
          {
            title: "Infrastructure and environments",
            paragraphs: [
              "The platform uses Linux and VPS infrastructure. A demonstration is available at acerca.efra.biz, while acerca.mx is the product’s commercial website.",
            ],
          },
        ],
        links: [
          {
            label: "Live demonstration",
            href: "https://acerca.efra.biz/",
          },
          {
            label: "Commercial website",
            href: "https://acerca.mx/",
          },
        ],
      },
      {
        slug: "fluxsalud",
        name: "FluxSalud",
        kicker: "Clinical management system",
        summary:
          "A technical case study with a React frontend, independent REST API and PostgreSQL on self-managed infrastructure.",
        description:
          "A developed clinical management application for patients, appointments, digital records, physicians, offices, users, roles and payments. Presented as a software project and technical case study, not an operating commercial service.",
        scope: [
          "Patients and appointments",
          "Digital medical records",
          "Physicians and offices",
          "Users and roles",
          "Payments",
          "Migration to self-managed infrastructure",
        ],
        stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
        status: "Technical case study",
        sections: [
          {
            title: "Purpose and technical responsibility",
            paragraphs: [
              "I developed the application and its evolution toward self-managed infrastructure, with an administrative dashboard for clinical workflows. The project is not currently operating as a commercial service.",
            ],
          },
          {
            title: "Decoupled architecture",
            paragraphs: [
              "The React frontend and administrative dashboard consume an independent REST API built with Node.js and Express. The API runs behind a reverse proxy and uses PostgreSQL. This is a decoupled frontend/API architecture, not a microservices architecture.",
            ],
          },
          {
            title: "Authentication and deployment",
            paragraphs: [
              "Migration from Supabase to self-managed infrastructure incorporates JWT authentication and password hashing. The interface, API service and database have distinct execution boundaries.",
              "A demonstration is planned at https://fluxsalud.efra.biz/; it is not yet presented as an available service.",
            ],
          },
        ],
        links: [],
      },
      {
        slug: "glop-contadores",
        name: "GLOP Contadores",
        kicker: "Accounting management and client portal",
        summary:
          "An active system for document management, requests and communication between an accounting firm and its clients.",
        description:
          "An independently developed PHP/MySQL application for an accounting firm and its clients. One of the three business management systems I have developed that remain active today.",
        scope: [
          "Document upload and download",
          "Client requests",
          "Administrative workflows",
          "Document management",
          "Firm–client communication",
        ],
        stack: ["PHP", "MySQL"],
        status: "Active system",
        sections: [
          {
            title: "Context and ownership",
            paragraphs: [
              "I independently developed the application organizing information exchange between the accounting firm and its clients, with responsibility for software implementation.",
            ],
          },
          {
            title: "Application and workflows",
            paragraphs: [
              "The application uses PHP and MySQL for documents, requests and administrative workflows. The portal supports file upload and download and ongoing interaction between the firm and its clients.",
            ],
          },
        ],
        links: [
          {
            label: "Website",
            href: "https://glop.mx/",
          },
        ],
      },
      {
        slug: "colicontjal",
        name: "COLICONTJAL",
        kicker: "Accounting association ERP and online courses",
        summary:
          "An active management and training system for Colegio de Licenciados en Contaduría Pública de Jalisco A.C.",
        description:
          "An independently developed ERP and online training platform for Colegio de Licenciados en Contaduría Pública de Jalisco A.C. One of my three currently active business management systems.",
        scope: [
          "ERP for the accounting association",
          "Online courses and training platform",
          "Independent development using a custom PHP framework",
        ],
        stack: ["PHP", "Custom PHP framework"],
        status: "Active system",
        sections: [
          {
            title: "Context and ownership",
            paragraphs: [
              "I independently developed the ERP and training platform for Colegio de Licenciados en Contaduría Pública de Jalisco A.C., combining association management and online learning.",
            ],
          },
          {
            title: "Technical foundation",
            paragraphs: [
              "The project uses a custom PHP framework as a reusable foundation for the management software and course platform. The institutional website and a video demonstration provide access to the project.",
            ],
          },
        ],
        links: [
          {
            label: "Website",
            href: "https://colicontjal.org.mx/",
          },
          {
            label: "Video demonstration",
            href: "https://youtu.be/hYDTpx5ikcI",
          },
        ],
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
        role: "Software Engineer & Systems Developer",
        text: "Project collaborations since 2010, with continuous primary responsibility for the organization’s software systems since 2022. My role combines enterprise development, systems integration and infrastructure operations.",
        details: [
          {
            title: "Enterprise applications and ERP",
            items: [
              "Business-critical modules for quotations, orders, CRM, commissions, purchasing, suppliers, production and logistics.",
              "Business rules, approvals, role-based permissions and automated order validation.",
              "Supplier quotation portal, import-cost calculations and production costing.",
            ],
          },
          {
            title: "Systems integration",
            items: [
              "REST APIs connecting quotation platforms with the central ERP; standardized commercial information.",
              "Logistics APIs and webhooks, multiple tracking numbers per order, status normalization and notifications.",
            ],
          },
          {
            title: "Infrastructure and operations",
            items: [
              "Linux hosting administration, deployment and maintenance of applications and corporate websites.",
              "Domains, DNS, hosting and troubleshooting applications and databases.",
              "Operational support for business-critical systems.",
            ],
          },
        ],
        links: [
          {
            label: "grupotalento.com.mx",
            href: "https://grupotalento.com.mx",
          },
          {
            label: "usbstock.mx",
            href: "https://usbstock.mx",
          },
          {
            label: "usbpromocional.com.mx",
            href: "https://usbpromocional.com.mx",
          },
          {
            label: "usbpromotional.com",
            href: "https://usbpromotional.com",
          },
          {
            label: "usbirdy.com",
            href: "https://usbirdy.com",
          },
          {
            label: "publimarca.com.mx",
            href: "https://publimarca.com.mx",
          },
          {
            label: "fastgate.com.mx",
            href: "https://fastgate.com.mx",
          },
          {
            label: "promoestres.com",
            href: "https://promoestres.com",
          },
        ],
      },
      {
        company: "Wozial",
        period: "2019 – 2021",
        role: "Software Project Lead",
        text: "Software project leadership and evolution of a reusable PHP framework. Developed common components for routing, authentication, database access, user management and modular administration. Established a shared foundation for internal projects and supported other developers adopting the framework.",
      },
      {
        company: "Independent Software Development",
        period: "2010 – present",
        role: "Software Developer",
        text: "Custom business applications, websites and ecommerce platforms. Development and evolution of a reusable PHP framework, with responsibility for requirements, implementation, deployment and maintenance.",
      },
    ],
  },
  technologies: {
    label: "Technologies",
    title: "Tools of the trade.",
    intro:
      "PHP, Laravel, relational databases and Linux operations are core areas of my practice. React, Node.js and Express complement projects with independent frontends and APIs.",
    groups: [
      {
        name: "Backend development",
        items: ["PHP", "Laravel", "Node.js", "Express", "REST APIs", "JSON", "Webhooks"],
      },
      {
        name: "Frontend development",
        items: ["JavaScript", "TypeScript", "React", "Blade", "HTML5", "CSS3", "Tailwind CSS"],
      },
      {
        name: "Databases",
        items: ["MariaDB", "MySQL", "PostgreSQL", "SQL", "Relational database design"],
      },
      {
        name: "Architecture and integration",
        items: [
          "ERP",
          "CRM",
          "Modular applications",
          "API authentication",
          "Interoperability",
          "Event processing",
          "Legacy modernization",
        ],
      },
      {
        name: "Testing and security",
        items: [
          "PHPUnit",
          "Automated testing",
          "Role-based access control",
          "Audit trails",
          "Application security",
        ],
      },
      {
        name: "Infrastructure and operations",
        items: [
          "Linux",
          "VPS",
          "Plesk",
          "cPanel",
          "Nginx",
          "Apache",
          "PHP-FPM",
          "DNS",
          "SSL",
          "Hosting administration",
          "Deployment",
          "Server maintenance",
          "Production troubleshooting",
        ],
      },
      {
        name: "Tools",
        items: ["Git", "GitHub", "Vite", "mPDF"],
      },
    ],
  },
  about: {
    label: "About",
    title: "Engineering with business understanding.",
    text: "Senior Software Engineer with nearly 20 years of experience designing, developing, maintaining and modernizing business applications, enterprise systems and web platforms.",
    summary: [
      "Specialized in PHP, Laravel, relational databases, backend development and REST API integrations. I translate complex business processes into software, integrate external services and automate commercial and operational workflows.",
      "I combine Full Stack development with hands-on responsibility for Linux server administration, VPS and hosting environments, infrastructure maintenance, application deployment, web security configuration and production troubleshooting.",
      "I am currently pursuing a Master’s Degree in Software Engineering and Computer Systems, with postgraduate coursework in cloud computing and AWS.",
    ],
    location: "Guadalajara, Mexico",
    educationTitle: "Education",
    education: [
      {
        title: "Master’s Degree in Software Engineering and Computer Systems",
        school: "UNIR México | 2026 – present",
        detail: "In progress. Expected completion: July 2027.",
      },
      {
        title: "Bachelor’s Degree in Civil Engineering",
        school: "Universidad Michoacana de San Nicolás de Hidalgo (UMSNH)",
        detail: "Undergraduate degree.",
      },
    ],
    languagesTitle: "Languages",
    languages: [
      {
        name: "Spanish",
        level: "Native",
      },
      {
        name: "English",
        level: "B2",
      },
      {
        name: "Russian",
        level: "A2",
      },
    ],
    focus: {
      title: "Professional Focus: Cloud Computing & AWS",
      paragraphs: [
        "I am expanding my cloud computing and AWS expertise through postgraduate studies and practical exercises, with an interest in network architecture, security and application deployment.",
        "My background in backend engineering, enterprise applications, Linux administration and production infrastructure provides a practical foundation for contributing to projects that use AWS. This training does not represent professional experience managing production AWS infrastructure.",
      ],
      topics: [
        "AWS VPC",
        "Public and private subnets",
        "EC2",
        "RDS",
        "Network security",
        "Cloud application deployment",
      ],
    },
  },
  contact: {
    label: "Contact",
    title: "Let’s talk.",
    message:
      "I’m interested in software engineering opportunities with companies that need to develop, maintain or modernize enterprise applications, backend systems and infrastructure.",
    emailLabel: "Email",
  },
  footer: {
    rights: "All rights reserved.",
  },
  errors: {
    notFound: "Page not found",
    notFoundText: "The page you’re looking for doesn’t exist or has moved.",
    home: "Back to home",
    failed: "This page didn’t load",
    failedText: "Something went wrong. You can try again or head back home.",
    retry: "Try again",
    projectUnavailable: "Project unavailable — EFRA",
  },
};

export const CONTENT: Record<Lang, Content> = { es, en };

export function getProject(lang: Lang, slug: string) {
  return CONTENT[lang].projects.items.find((p) => p.slug === slug);
}

export function cvHref(lang: Lang) {
  return (
    CV_URL ??
    `mailto:${CONTACT.email}?subject=${encodeURIComponent(CONTENT[lang].ui.cvMailSubject)}`
  );
}

export function cvLabel(lang: Lang) {
  return CV_URL ? CONTENT[lang].ui.cv : CONTENT[lang].ui.cvRequest;
}
