export interface SiteContent {
  lang: 'en' | 'es';
  path: string;
  altPath: string;
  altLabel: string;
  meta: { title: string; description: string };
  nav: { home: string; about: string; services: string; results: string; speaking: string; resources: string; contact: string; cta: string };
  hero: { eyebrow: string; title: string; subtitle: string; ctaPrimary: string; ctaSecondary: string; tagline: string; badge: string };
  about: {
    eyebrow: string; title: string; body: string;
    stats: { label: string; desc: string }[];
    credentials: string[];
    ctaLabel: string;
  };
  services: { title: string; icon: string; desc: string }[];
  servicesIntro: { eyebrow: string; title: string };
  whyWork: {
    eyebrow: string; title: string; body: string; ctaLabel: string;
    points: { label: string; desc: string }[];
  };
  outcomes: { eyebrow: string; title: string; items: { label: string; desc: string }[] };
  results: {
    eyebrow: string; title: string; intro: string;
    cases: { property: string; role: string; period: string; metric: string; summary: string }[];
    recognition: string;
    brandsLabel: string;
  };
  speaking: {
    eyebrow: string; title: string; body: string; ctaLabel: string;
    items: { label: string; desc: string }[];
    podcastNote: string;
  };
  resources: { eyebrow: string; title: string; body: string; newsletterName: string; newsletterCta: string; placeholder: string };
  contact: { title: string; body: string; emailLabel: string; whatsappLabel: string; ctaButton: string; formFirstName: string; formLastName: string; formEmail: string; formPhone: string; formServiceLabel: string; formServicePlaceholder: string; formServiceOther: string; formMessageLabel: string; formMessagePlaceholder: string; formSend: string };
  footer: { tagline: string; rights: string };
}

export const en: SiteContent = {
  lang: 'en',
  path: '/',
  altPath: '/es/',
  altLabel: 'ES',
  meta: {
    title: 'LuxePeak Advisory | Luxury Hospitality Strategy & Leadership — Vicky Pérez',
    description: 'Helping hotels, owners and teams elevate performance, strengthen service culture and drive operational excellence. Executive hospitality advisory led by Vicky Pérez.',
  },
  nav: {
    home: 'Home', about: 'About', services: 'Services', results: 'Results',
    speaking: 'Speaking', resources: 'Resources', contact: 'Contact', cta: "Let's Connect",
  },
  hero: {
    eyebrow: 'LEADERSHIP · PEOPLE · PERFORMANCE',
    title: 'Luxury Hospitality Strategy. Leadership. Transformation.',
    subtitle: 'Helping hotels, owners and teams elevate performance, strengthen service culture and drive operational excellence.',
    ctaPrimary: 'Work With Vicky',
    ctaSecondary: 'Explore Services',
    tagline: 'Excellence in Every Experience',
    badge: 'Maxwell Leadership Certified Team',
  },
  about: {
    eyebrow: 'About Vicky Pérez',
    title: 'A Partner in Performance and Lasting Impact',
    body: 'With more than two decades of executive hospitality leadership across brands including The Ritz-Carlton, Marriott, Hyatt, Renaissance, Hard Rock and Radisson, I partner with owners, operators and leadership teams to solve complex challenges, strengthen culture and unlock results that endure.',
    stats: [
      { label: 'Real-World Experience', desc: 'Deep operational and leadership expertise across luxury hotels and resorts.' },
      { label: 'People-First Approach', desc: 'We develop leaders and teams to deliver exceptional experiences.' },
      { label: 'Measurable Results', desc: 'Practical strategies that drive performance, profitability and long-term value.' },
      { label: 'Trusted Advisor', desc: 'A confidential partner you can rely on to challenge, guide and deliver.' },
    ],
    credentials: [
      '30+ years in luxury hospitality leadership',
      'Cornell School of Hotel Administration',
      'Maxwell Leadership Certified Team member',
    ],
    ctaLabel: 'More About Vicky',
  },
  servicesIntro: { eyebrow: 'Services', title: 'Strategic Solutions. Tangible Results.' },
  services: [
    { title: 'Executive Hospitality Advisory', icon: 'crown', desc: 'Strategic guidance to overcome obstacles and execute better.' },
    { title: 'Hotel Turnaround Strategy', icon: 'refresh', desc: 'Stabilize operations, improve performance and drive growth.' },
    { title: 'Leadership Development', icon: 'people', desc: 'Build confident leaders and high-performing teams.' },
    { title: 'Luxury Service Culture Training', icon: 'bell', desc: 'Elevate service standards and create lasting impressions.' },
    { title: 'Operations Performance Improvement', icon: 'gear', desc: 'Optimize systems, processes and KPIs for sustainable excellence.' },
    { title: 'Conference Speaking & Executive Coaching', icon: 'mic', desc: 'Inspire audiences and coach leaders to greater impact.' },
  ],
  whyWork: {
    eyebrow: 'Why Work With', title: 'Vicky Pérez',
    body: 'I blend luxury hospitality expertise with leadership development to help you achieve exceptional results — together.',
    ctaLabel: 'View Credentials',
    points: [
      { label: '30+ Years', desc: 'Executive hospitality leadership across iconic luxury brands and properties.' },
      { label: 'Global Perspective', desc: 'Experience across diverse markets, cultures and operational environments.' },
      { label: 'Certified Leadership Coach', desc: 'Maxwell Leadership Certified Team member.' },
      { label: 'Trusted Advisor', desc: 'Confidential partner to owners, executives and senior leadership teams.' },
    ],
  },
  outcomes: {
    eyebrow: 'Outcomes', title: 'Impact That Lasts',
    items: [
      { label: 'Stronger Performance', desc: 'Improved operating results and profitability.' },
      { label: 'Empowered People', desc: 'Confident leaders and engaged, aligned teams.' },
      { label: 'Elevated Experiences', desc: 'Guest loyalty and a reputation that sets you apart.' },
      { label: 'Sustainable Growth', desc: 'Strategies that create long-term value and competitive advantage.' },
    ],
  },
  results: {
    eyebrow: 'Results', title: 'Proven Across Brands and Portfolios',
    intro: 'Real roles, real outcomes — a track record built across luxury and branded hospitality.',
    cases: [
      {
        property: 'Hotel Indigo Silverthorne', role: 'General Manager, IHG Hotels & Resorts', period: '2024 – 2025',
        metric: 'Top 10 USA · RevPAR +5.5%',
        summary: 'Ranked Top 10 Hotel Indigo in the USA and the Americas & Caribbean for two consecutive years. QA rose from 95% to 96%; guest satisfaction from 91.92% to 92.93%; RevPAR grew 5.5% YoY — all while managing a full ownership transition without disrupting operations.',
      },
      {
        property: 'Renaissance Denver Central Park', role: 'Assistant General Manager', period: '2023',
        metric: 'Quality Audit 60% → 85%',
        summary: 'Raised the Quality Audit score from 60% to 85% and guest satisfaction from 30% to 47% within the first three months — rebuilding front-desk procedures and reorganizing housekeeping operations.',
      },
      {
        property: 'The Mill Resort → Courtyard by Marriott, Aruba', role: 'Transition / Dual General Manager', period: '2018 – 2020',
        metric: '$42M Brand Conversion',
        summary: 'Led the renovation and conversion that created the first Courtyard by Marriott Resort in the CALA region — 200 rooms, 4 F&B outlets, spa and event space — building every Standard Operating Procedure from the ground up.',
      },
      {
        property: '13-Property Portfolio, Simar Management', role: 'VP of Hotel Operations & Transitions', period: '2022 – 2023',
        metric: '13 Properties · 4 Brands',
        summary: 'Oversaw a portfolio spanning Marriott, Hilton, IHG and Best Western across three states, leading a full Clarion-to-Best Western brand conversion that opened on schedule with all 65 team members trained.',
      },
      {
        property: 'The Ritz-Carlton, Aruba', role: 'Marketing & Guest Relations Manager', period: '2013 – 2017',
        metric: 'EES +40 pts YoY',
        summary: 'Grew engagement scores 40 points year-over-year and achieved a 100% Credit & Collection Audit score, expanding the team from 7 to 13 — earning personal recognition from Hervé Humler, President & CEO of The Ritz-Carlton Hotel Company.',
      },
    ],
    recognition: 'Recognized directly by Hervé Humler, President & CEO of The Ritz-Carlton Hotel Company, for outstanding performance.',
    brandsLabel: 'Other Brands I\'ve Worked With',
  },
  speaking: {
    eyebrow: 'Speaking, Training & Coaching', title: 'Inspire. Educate. Elevate.',
    body: 'From keynotes to workshops and executive coaching, Vicky delivers powerful, practical insights that motivate audiences and drive action.',
    ctaLabel: 'Book Vicky to Speak',
    items: [
      { label: 'Keynotes', desc: 'Inspiring messages that ignite leadership and growth.' },
      { label: 'Training & Workshops', desc: 'Interactive sessions that build skills and strengthen teams.' },
      { label: 'Executive Coaching', desc: 'Personalized coaching for leaders ready to excel.' },
    ],
    podcastNote: 'Look out for The Five-Star Conversation — a podcast on leadership and service excellence.',
  },
  resources: {
    eyebrow: 'Resources', title: 'The Service Architect',
    body: 'Insights on luxury hospitality leadership, service culture and performance.',
    newsletterName: 'The Service Architect',
    newsletterCta: 'Subscribe',
    placeholder: 'Your email address',
  },
  contact: {
    title: "Let's Achieve Extraordinary — Together",
    body: 'Ready to elevate performance, strengthen leadership and create lasting impact? Let’s start the conversation.',
    emailLabel: 'Email', whatsappLabel: 'WhatsApp / Direct',
    ctaButton: 'Schedule a Consultation',
    formFirstName: 'First Name', formLastName: 'Last Name', formEmail: 'Email', formPhone: 'Phone',
    formServiceLabel: 'Service of Interest', formServicePlaceholder: 'Select a service...', formServiceOther: 'General Inquiry / Other',
    formMessageLabel: 'How can we help you?', formMessagePlaceholder: 'Enter your message...',
    formSend: 'Send Message',
  },
  footer: { tagline: 'LEADERSHIP · PEOPLE · PERFORMANCE', rights: 'All rights reserved.' },
};

export const es: SiteContent = {
  lang: 'es',
  path: '/es/',
  altPath: '/',
  altLabel: 'EN',
  meta: {
    title: 'LuxePeak Advisory | Estrategia y Liderazgo en Hospitalidad de Lujo — Vicky Pérez',
    description: 'Ayudamos a hoteles, propietarios y equipos a elevar el desempeño, fortalecer la cultura de servicio e impulsar la excelencia operativa. Asesoría ejecutiva liderada por Vicky Pérez.',
  },
  nav: {
    home: 'Inicio', about: 'Sobre mí', services: 'Servicios', results: 'Resultados',
    speaking: 'Conferencias', resources: 'Recursos', contact: 'Contacto', cta: 'Conectemos',
  },
  hero: {
    eyebrow: 'LIDERAZGO · PERSONAS · DESEMPEÑO',
    title: 'Estrategia en Hospitalidad de Lujo. Liderazgo. Transformación.',
    subtitle: 'Ayudo a hoteles, propietarios y equipos a elevar el desempeño, fortalecer la cultura de servicio e impulsar la excelencia operativa.',
    ctaPrimary: 'Trabaja con Vicky',
    ctaSecondary: 'Explora los Servicios',
    tagline: 'Excelencia en Cada Experiencia',
    badge: 'Equipo Certificado Maxwell Leadership',
  },
  about: {
    eyebrow: 'Sobre Vicky Pérez',
    title: 'Una Aliada en Desempeño e Impacto Duradero',
    body: 'Con más de dos décadas de liderazgo ejecutivo en hospitalidad —incluyendo marcas como The Ritz-Carlton, Marriott, Hyatt, Renaissance, Hard Rock y Radisson— acompaño a propietarios, operadores y equipos de liderazgo a resolver desafíos complejos, fortalecer la cultura y generar resultados que perduran.',
    stats: [
      { label: 'Experiencia Real', desc: 'Profunda experiencia operativa y de liderazgo en hoteles y resorts de lujo.' },
      { label: 'Enfoque en las Personas', desc: 'Desarrollamos líderes y equipos que ofrecen experiencias excepcionales.' },
      { label: 'Resultados Medibles', desc: 'Estrategias prácticas que impulsan el desempeño, la rentabilidad y el valor a largo plazo.' },
      { label: 'Asesora de Confianza', desc: 'Una aliada confidencial en quien apoyarse para desafiar, guiar y entregar resultados.' },
    ],
    credentials: [
      'Más de 30 años en liderazgo de hospitalidad de lujo',
      'Cornell School of Hotel Administration',
      'Miembro certificado del equipo Maxwell Leadership',
    ],
    ctaLabel: 'Más Sobre Vicky',
  },
  servicesIntro: { eyebrow: 'Servicios', title: 'Soluciones Estratégicas. Resultados Tangibles.' },
  services: [
    { title: 'Asesoría Ejecutiva en Hospitalidad', icon: 'crown', desc: 'Orientación estratégica para superar obstáculos y ejecutar mejor.' },
    { title: 'Estrategia de Recuperación Hotelera', icon: 'refresh', desc: 'Estabiliza operaciones, mejora el desempeño e impulsa el crecimiento.' },
    { title: 'Desarrollo de Liderazgo', icon: 'people', desc: 'Forma líderes seguros y equipos de alto desempeño.' },
    { title: 'Capacitación en Cultura de Servicio de Lujo', icon: 'bell', desc: 'Eleva los estándares de servicio y crea impresiones duraderas.' },
    { title: 'Mejora del Desempeño Operativo', icon: 'gear', desc: 'Optimiza sistemas, procesos e indicadores para una excelencia sostenible.' },
    { title: 'Conferencias y Coaching Ejecutivo', icon: 'mic', desc: 'Inspira audiencias y guía a líderes hacia un mayor impacto.' },
  ],
  whyWork: {
    eyebrow: 'Por Qué Trabajar Con', title: 'Vicky Pérez',
    body: 'Combino experiencia en hospitalidad de lujo con desarrollo de liderazgo para ayudarte a alcanzar resultados excepcionales — juntos.',
    ctaLabel: 'Ver Credenciales',
    points: [
      { label: '30+ Años', desc: 'Liderazgo ejecutivo en hospitalidad en marcas y propiedades de lujo reconocidas.' },
      { label: 'Perspectiva Global', desc: 'Experiencia en mercados, culturas y entornos operativos diversos.' },
      { label: 'Coach de Liderazgo Certificada', desc: 'Miembro certificado del equipo Maxwell Leadership.' },
      { label: 'Asesora de Confianza', desc: 'Aliada confidencial de propietarios, ejecutivos y equipos de liderazgo senior.' },
    ],
  },
  outcomes: {
    eyebrow: 'Resultados', title: 'Un Impacto que Perdura',
    items: [
      { label: 'Desempeño Más Sólido', desc: 'Mejores resultados operativos y rentabilidad.' },
      { label: 'Personas Empoderadas', desc: 'Líderes seguros y equipos comprometidos y alineados.' },
      { label: 'Experiencias Elevadas', desc: 'Lealtad del huésped y una reputación que te distingue.' },
      { label: 'Crecimiento Sostenible', desc: 'Estrategias que generan valor a largo plazo y ventaja competitiva.' },
    ],
  },
  results: {
    eyebrow: 'Resultados', title: 'Comprobado en Marcas y Portafolios',
    intro: 'Roles reales, resultados reales — una trayectoria construida en hospitalidad de lujo y de marca.',
    cases: [
      {
        property: 'Hotel Indigo Silverthorne', role: 'Gerente General, IHG Hotels & Resorts', period: '2024 – 2025',
        metric: 'Top 10 EE. UU. · RevPAR +5.5%',
        summary: 'Propiedad entre las 10 mejores Hotel Indigo de EE. UU. y de América y el Caribe durante dos años consecutivos. El QA subió de 95% a 96%; la satisfacción del huésped de 91.92% a 92.93%; el RevPAR creció 5.5% interanual — todo durante una transición completa de propietario sin afectar la operación.',
      },
      {
        property: 'Renaissance Denver Central Park', role: 'Subgerente General', period: '2023',
        metric: 'Auditoría de Calidad 60% → 85%',
        summary: 'Elevó el puntaje de auditoría de calidad de 60% a 85% y la satisfacción del huésped de 30% a 47% en los primeros tres meses, reestructurando los procesos de recepción y housekeeping.',
      },
      {
        property: 'The Mill Resort → Courtyard by Marriott, Aruba', role: 'Gerente General de Transición / Dual', period: '2018 – 2020',
        metric: 'Conversión de Marca de $42M',
        summary: 'Lideró la renovación y conversión que dio origen al primer Courtyard by Marriott Resort de la región CALA — 200 habitaciones, 4 puntos de F&B, spa y espacio para eventos — construyendo cada procedimiento operativo desde cero.',
      },
      {
        property: 'Portafolio de 13 Propiedades, Simar Management', role: 'VP de Operaciones y Transiciones Hoteleras', period: '2022 – 2023',
        metric: '13 Propiedades · 4 Marcas',
        summary: 'Supervisó un portafolio de las marcas Marriott, Hilton, IHG y Best Western en tres estados, liderando una conversión completa de Clarion a Best Western que abrió a tiempo con los 65 miembros del equipo capacitados.',
      },
      {
        property: 'The Ritz-Carlton, Aruba', role: 'Gerente de Marketing y Relaciones con el Huésped', period: '2013 – 2017',
        metric: 'EES +40 pts interanual',
        summary: 'Aumentó los puntajes de compromiso 40 puntos interanuales y logró 100% en la auditoría de crédito y cobranza, haciendo crecer el equipo de 7 a 13 — obteniendo reconocimiento personal de Hervé Humler, presidente y CEO de The Ritz-Carlton Hotel Company.',
      },
    ],
    recognition: 'Reconocida directamente por Hervé Humler, presidente y CEO de The Ritz-Carlton Hotel Company, por su desempeño excepcional.',
    brandsLabel: 'Otras Marcas con las que He Trabajado',
  },
  speaking: {
    eyebrow: 'Conferencias, Formación y Coaching', title: 'Inspirar. Educar. Elevar.',
    body: 'De conferencias magistrales a talleres y coaching ejecutivo, Vicky ofrece ideas poderosas y prácticas que motivan a las audiencias e impulsan la acción.',
    ctaLabel: 'Invitar a Vicky a Hablar',
    items: [
      { label: 'Conferencias Magistrales', desc: 'Mensajes inspiradores que impulsan el liderazgo y el crecimiento.' },
      { label: 'Formación y Talleres', desc: 'Sesiones interactivas que desarrollan habilidades y fortalecen equipos.' },
      { label: 'Coaching Ejecutivo', desc: 'Coaching personalizado para líderes listos para sobresalir.' },
    ],
    podcastNote: 'Próximamente The Five-Star Conversation — un podcast sobre liderazgo y excelencia en el servicio.',
  },
  resources: {
    eyebrow: 'Recursos', title: 'The Service Architect',
    body: 'Ideas sobre liderazgo en hospitalidad de lujo, cultura de servicio y desempeño.',
    newsletterName: 'The Service Architect',
    newsletterCta: 'Suscribirme',
    placeholder: 'Tu correo electrónico',
  },
  contact: {
    title: 'Logremos lo Extraordinario — Juntos',
    body: '¿Lista o listo para elevar el desempeño, fortalecer el liderazgo y crear un impacto duradero? Comencemos la conversación.',
    emailLabel: 'Correo', whatsappLabel: 'WhatsApp / Directo',
    ctaButton: 'Agendar una Consulta',
    formFirstName: 'Nombre', formLastName: 'Apellido', formEmail: 'Correo', formPhone: 'Teléfono',
    formServiceLabel: 'Servicio de Interés', formServicePlaceholder: 'Selecciona un servicio...', formServiceOther: 'Consulta General / Otro',
    formMessageLabel: '¿Cómo podemos ayudarte?', formMessagePlaceholder: 'Escribe tu mensaje...',
    formSend: 'Enviar Mensaje',
  },
  footer: { tagline: 'LIDERAZGO · PERSONAS · DESEMPEÑO', rights: 'Todos los derechos reservados.' },
};
