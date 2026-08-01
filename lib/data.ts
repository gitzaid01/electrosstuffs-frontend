import { ewa } from "@/assets/index";

export const services = [
  {
    id: "01",
    icon: "globe",
    title: "Custom Websites",
    desc: "High-performance digital flagship stores and corporate experiences built for speed and conversion.",
    tags: ["NEXT.JS", "TAILWIND"],
  },
  {
    id: "02",
    icon: "device",
    title: "Web Apps",
    desc: "Complex SaaS platforms and internal tools with robust architectures and intuitive workflows.",
    tags: ["REACT", "NODE.JS"],
  },
  {
    id: "03",
    icon: "spark",
    title: "UI/UX Design",
    desc: "Avant-garde visual identities and user-centric interfaces that command attention and drive loyalty.",
    tags: ["FIGMA", "MOTION"],
  },
  {
    id: "04",
    icon: "phone",
    title: "Mobile Apps",
    desc: "Native-grade iOS and Android experiences built for performance, offline resilience, and store-ready polish.",
    tags: ["REACT NATIVE", "SWIFT"],
  },
  {
    id: "05",
    icon: "chip",
    title: "AI Automation",
    desc: "Integrating LLMs and generative AI into your business processes for exponential efficiency.",
    tags: ["OPENAI", "PYTHON"],
  },
  {
    id: "06",
    icon: "rocket",
    title: "Digital Strategy",
    desc: "We don't just build; we consult. Scaling brands from local heroes to global industry disruptors.",
    tags: [],
    isFeatureCard: true,
  },
] as const;

export const clientWork = {
  id: "ewa-transglobal",
  title: "EWA Transglobal",
  tagline: "Precision Engineering. Global Reach.",
  desc: "A full corporate export platform for a precision pump-components exporter — product catalog, admin panel, and a dark gold industrial design system built on Next.js 15.",
  tags: ["NEXT.JS", "TYPESCRIPT", "INDUSTRIAL EXPORT"],
  year: "2024",
  image: ewa,
  url: "https://www.ewatransglobal.com/",
} as const;

export const ownProjects = [
  {
    id: "stymieverse",
    name: "Stymieverse",
    tagline: "Built & powered by ElectroStuffs.",
    desc: "An in-house product built end to end by ElectroStuffs — no client brief, just our own design and engineering direction.",
    tags: ["OWN PRODUCT"],
    image: null,
    url: null,
  },
] as const;

export const techStack = [
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "NODE.JS",
  "GSAP",
  "TAILWIND",
  "THREE.JS",
  "PYTHON",
] as const;

export const testimonials = [
  {
    quote:
      "The layout is clean, visually striking, and the user experience feels seamless. Navigation is smooth and intuitive — fantastic work, creativity, and attention to detail on this project.",
    name: "Manish Sharma",
    role: "Director, EWA TransGlobal Pvt Ltd.",
  },
] as const;

export const journeyMilestones = [
  {
    id: "01",
    tag: "Comms",
    title: "Real-Time Communication",
    desc: "Production-ready in-app audio/video calling architectures, SDK development, and sophisticated user presence management using WebSockets.",
  },
  {
    id: "02",
    tag: "Health Tech",
    title: "Healthcare Technology",
    desc: "Integration within India's ABDM ecosystem, managing complex authentication flows and secure healthcare API infrastructures.",
  },
  {
    id: "03",
    tag: "Extensions",
    title: "Chrome Extension Development",
    desc: "Building high-performance productivity tools and workflow automation layers directly in the browser environment.",
  },
  {
    id: "04",
    tag: "Scale",
    title: "Large Scale Web Applications",
    desc: "Stymieverse educational platforms, focusing on scalable frontend architectures and seamless user experience at mass volume.",
  },
  {
    id: "05",
    tag: "Content",
    title: "Content Engineering",
    desc: "Strategic content architecture including 100+ high-authority SEO articles in the niche Medical Tourism sector.",
  },
  {
    id: "06",
    tag: "Architecture",
    title: "Product Engineering",
    desc: "End-to-end frontend architectures, complex backend integrations, and robust API development lifecycles.",
  },
] as const;

export const buildPrinciples = [
  {
    id: "01",
    title: "Understand the business first",
    desc: "Code is a solution to a problem. Without deep business context, even the cleanest code is a liability.",
  },
  {
    id: "02",
    title: "Design before development",
    desc: "Architecture is mapped before a single line is written to ensure scalability and structural integrity.",
  },
  {
    id: "03",
    title: "Performance is a feature",
    desc: "Speed isn't just a metric; it's the core of user experience. Optimization is integrated into the core build.",
  },
  {
    id: "04",
    title: "Build scalable architecture",
    desc: "System design that handles growth gracefully without requiring constant complete refactors.",
  },
  {
    id: "05",
    title: "Write maintainable code",
    desc: "Writing code for humans to read and machines to execute. Clean code is an act of engineering empathy.",
  },
  {
    id: "06",
    title: "Prioritize user experience",
    desc: "Technology serves people. If the user finds it difficult to navigate, the engineering has failed its purpose.",
  },
] as const;

export const expertiseTechStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase",
  "Redux",
  "Tailwind CSS",
  "GSAP",
  "Framer Motion",
  "Git",
  "Docker",
  "REST APIs",
  "WebSockets",
] as const;

export const workingProcessSteps = [
  {
    id: "01",
    tag: "Research",
    title: "Deep dive into goals and constraints.",
  },
  {
    id: "02",
    tag: "Architecture",
    title: "Technical mapping and system design.",
  },
  {
    id: "03",
    tag: "Design",
    title: "UI/UX and visual prototyping.",
  },
  {
    id: "04",
    tag: "Development",
    title: "High-performance code implementation.",
  },
] as const;

export const caseStudy = {
  slug: "ewa-transglobal",
  eyebrow: "Case Study / Industrial Export",
  title: "EWA Transglobal",
  headline: "Engineering a Global Industrial Export Platform",
  intro:
    "A deep dive into a full corporate export platform — product catalog, secure admin tooling, and a dark gold industrial design system — built for a precision pump-components exporter.",
  url: "https://www.ewatransglobal.com/",
  projectData: {
    timeline: "TBD — add real project timeline",
    scale: "TBD — e.g. number of markets served",
    impact: "TBD — add a real, verifiable metric if available",
  },
  overview:
    "EWA Transglobal exports precision pump components to international B2B buyers. The brief was to replace an outdated web presence with a fast, credible digital storefront — a dynamic product catalog, a secure internal admin system for managing listings and inquiries, and a visual identity that reads as serious industrial engineering rather than a generic template site.",
  challenge:
    "Industrial B2B buyers vet suppliers largely through their website before ever making contact. The challenge was building a catalog architecture flexible enough for a growing product line, alongside an admin panel secure enough to trust with real business operations — all without the budget or timeline of an enterprise CMS.",
  vision:
    "A lean, fast, dark-gold industrial site that functions as both a credibility signal for new buyers and a real operational tool for the team managing it day to day.",
  testimonial: {
    quote:
      "The layout is clean, visually striking, and the user experience feels seamless. Navigation is smooth and intuitive — fantastic work, creativity, and attention to detail on this project.",
    name: "Manish Sharma",
    role: "Director, EWA TransGlobal Pvt Ltd.",
  },
  processSteps: [
    {
      id: "01",
      title: "Research & Design",
      desc: "Mapped the product catalog structure and admin workflows first — dynamic [slug] routing for products, a BFF auth pattern for the admin panel, and a dark gold visual system that felt industrial rather than decorative.",
    },
  ],
  engineeringCore: [
    {
      icon: "layers",
      title: "Modular Architecture",
      desc: "Next.js 15 App Router with TypeScript, dynamic product routes, and a component structure built to scale as the catalog grows.",
    },
    {
      icon: "shield",
      title: "Secure Admin Panel",
      desc: "A BFF auth pattern — httpOnly cookies and role-checked JWTs — so the internal team can manage listings without exposing credentials client-side.",
    },
    {
      icon: "gauge",
      title: "Built for Speed",
      desc: "Server-rendered pages, optimized assets, and GA4 integration for tracking real buyer behavior without bloating load times.",
    },
  ],
  engineeredWith: ["NEXT.JS", "TYPESCRIPT", "TAILWIND", "NODEMAILER"],
} as const;

export const founder = {
  eyebrow: "The Mind Behind the Machine",
  name: "Zaid Siddiqui",
  role: "Founder & Lead Engineer",
  bio: "Founder and Lead Engineer at ElectroStuffs. Driven by the convergence of industrial reliability and digital fluidity. I don't just write code; I architect ecosystems that survive the chaos of scale.",
} as const;

export const philosophy = {
  headline: "Why ElectroStuffs Exists.",
  quote:
    "Technology shouldn't just work; it should dominate its environment. We solve complex problems with scalable, user-centered architecture that bridges the gap between raw power and human intuition.",
  principles: [
    {
      title: "Scalability First",
      desc: "Building with the horizon in mind. Our architectures are designed to handle 10x growth without a single refactor.",
    },
    {
      title: "Precision UI",
      desc: "Micro-interactions aren't polish; they are the interface. We prioritize tactile feedback in every pixel.",
    },
  ],
} as const;

export const technicalEvolution = [
  {
    id: "01",
    title: "Distributed Core Development",
    desc: "Engineered a low-latency messaging backbone for multi-tenant enterprise applications, achieving 99.99% uptime.",
  },
  {
    id: "02",
    title: "Visual Intelligence Layer",
    desc: "Developed a proprietary UI engine that dynamically adapts layouts based on user performance profiles and device hardware.",
  },
  {
    id: "03",
    title: "Eco-System Architecture",
    desc: "Founded ElectroStuffs to unify siloed engineering practices into a singular, high-performance design-to-deployment standard.",
  },
] as const;

export const enjoyBuilding = [
  {
    icon: "radar",
    title: "Low-Latency Systems",
    desc: "Building high-frequency data pipelines where every millisecond is a cost. Precision-first engineering.",
  },
  {
    icon: "grid",
    title: "Complex Dashboards",
    desc: "Transforming overwhelming datasets into intuitive, reactive control centers for modern operations.",
  },
  {
    icon: "stack",
    title: "Full-Stack Arches",
    desc: "End-to-end ecosystems where front-end aesthetics meet back-end industrial strength seamlessly.",
  },
] as const;

export const technicalPrinciples = [
  {
    title: "Scalability Is Not An Option",
    desc: "Every line of code is written with the assumption that the system will handle a 100x surge in traffic tomorrow. We build for the load we haven't seen yet.",
  },
  {
    title: "User-First Engineering",
    desc: "Technology that ignores the human interface is a failed project. We engineer specifically to minimize friction in the user journey.",
  },
] as const;

export const visionColumns = [
  {
    title: "Detail-Oriented",
    desc: "Obsessing over the 1% that makes the difference between a product and a legacy. No pixel or package is left unchecked.",
  },
  {
    title: "Continuous Learning",
    desc: "The stack changes; the principles of engineering remain. We stay at the bleeding edge to ensure our clients never fall behind.",
  },
] as const;

export type ConfiguratorOption = {
  id: string;
  title: string;
  desc: string;
  icon: string;
  price: number;
  days: number;
  intensity: number;
  complexity?: "Simple" | "Standard" | "Elevated" | "Enterprise";
};

export type ConfiguratorPhase = {
  id: string;
  shortLabel: string;
  title: string;
  desc: string;
  type: "single" | "multi";
  options: ConfiguratorOption[];
};

export const configuratorPhases: ConfiguratorPhase[] = [
  {
    id: "base",
    shortLabel: "Base",
    title: "Project Type",
    desc: "Select the architectural foundation of your digital ecosystem.",
    type: "single",
    options: [
      {
        id: "business-website",
        title: "Business Website",
        desc: "Scalable corporate presence with advanced SEO and speed optimization.",
        icon: "layout",
        price: 5000,
        days: 90,
        intensity: 10,
        complexity: "Standard",
      },
      {
        id: "portfolio",
        title: "Portfolio",
        desc: "High-impact visual showcase for creators and agencies.",
        icon: "image",
        price: 2200,
        days: 30,
        intensity: 5,
        complexity: "Simple",
      },
      {
        id: "landing-page",
        title: "Landing Page",
        desc: "Precision conversion machine focused on single-product scaling.",
        icon: "zap",
        price: 1800,
        days: 21,
        intensity: 5,
        complexity: "Simple",
      },
      {
        id: "ecommerce",
        title: "E-Commerce",
        desc: "Full-throttle sales platform with custom checkout logic.",
        icon: "cart",
        price: 7500,
        days: 75,
        intensity: 40,
        complexity: "Elevated",
      },
      {
        id: "saas",
        title: "SaaS / Web App",
        desc: "Complex software architectures with multi-user capabilities.",
        icon: "cloud",
        price: 12000,
        days: 120,
        intensity: 60,
        complexity: "Enterprise",
      },
      {
        id: "dashboard",
        title: "Dashboard",
        desc: "Data-driven internal interfaces and admin systems.",
        icon: "chart",
        price: 6000,
        days: 60,
        intensity: 30,
        complexity: "Standard",
      },
    ],
  },
  {
    id: "volume",
    shortLabel: "Volume",
    title: "Scale & Volume",
    desc: "How much load and how many users does this need to handle?",
    type: "single",
    options: [
      {
        id: "small",
        title: "Small",
        desc: "A few hundred users. Lean and fast to ship.",
        icon: "gauge",
        price: 0,
        days: 0,
        intensity: 0,
      },
      {
        id: "medium",
        title: "Medium",
        desc: "Thousands of monthly users, moderate concurrency.",
        icon: "gauge",
        price: 1500,
        days: 15,
        intensity: 10,
      },
      {
        id: "large",
        title: "Large",
        desc: "Tens of thousands of users, real concurrency demands.",
        icon: "gauge",
        price: 4000,
        days: 30,
        intensity: 20,
      },
      {
        id: "enterprise-scale",
        title: "Enterprise",
        desc: "High-volume, multi-region, mission-critical traffic.",
        icon: "gauge",
        price: 9000,
        days: 45,
        intensity: 35,
      },
    ],
  },
  {
    id: "quality",
    shortLabel: "Quality",
    title: "Quality Level",
    desc: "How refined should the finish and engineering rigor be?",
    type: "single",
    options: [
      {
        id: "standard",
        title: "Standard",
        desc: "Clean, solid, production-ready build.",
        icon: "shield",
        price: 0,
        days: 0,
        intensity: 0,
        complexity: "Standard",
      },
      {
        id: "premium",
        title: "Premium",
        desc: "Custom motion, refined micro-interactions, deeper QA.",
        icon: "shield",
        price: 2000,
        days: 10,
        intensity: 15,
        complexity: "Elevated",
      },
      {
        id: "white-glove",
        title: "White-Glove",
        desc: "Bespoke design system, exhaustive edge-case handling.",
        icon: "shield",
        price: 5000,
        days: 20,
        intensity: 25,
        complexity: "Enterprise",
      },
    ],
  },
  {
    id: "modules",
    shortLabel: "Modules",
    title: "Core Modules",
    desc: "Select any additional systems this project needs.",
    type: "multi",
    options: [
      {
        id: "auth",
        title: "Authentication & Accounts",
        desc: "Login, roles, and user account management.",
        icon: "user",
        price: 500,
        days: 5,
        intensity: 5,
      },
      {
        id: "payments",
        title: "Payments / Checkout",
        desc: "Custom checkout flow and payment gateway integration.",
        icon: "cart",
        price: 900,
        days: 7,
        intensity: 8,
      },
      {
        id: "admin",
        title: "Admin Dashboard",
        desc: "Internal panel for managing content and operations.",
        icon: "chart",
        price: 1200,
        days: 10,
        intensity: 10,
      },
      {
        id: "ai",
        title: "AI Integration",
        desc: "LLM-powered features baked into the product.",
        icon: "sparkles",
        price: 1800,
        days: 12,
        intensity: 15,
      },
      {
        id: "realtime",
        title: "Real-Time Features",
        desc: "Live updates, sockets, and presence systems.",
        icon: "bolt",
        price: 1000,
        days: 8,
        intensity: 10,
      },
      {
        id: "api",
        title: "Third-Party API Integrations",
        desc: "Connecting external services into the core system.",
        icon: "plug",
        price: 700,
        days: 6,
        intensity: 7,
      },
    ],
  },
  {
    id: "delivery",
    shortLabel: "Delivery",
    title: "Delivery Speed",
    desc: "How fast does this need to ship?",
    type: "single",
    options: [
      {
        id: "standard-delivery",
        title: "Standard",
        desc: "Comfortable timeline, no rush surcharge.",
        icon: "zap",
        price: 0,
        days: 0,
        intensity: 0,
      },
      {
        id: "rush",
        title: "Rush",
        desc: "Compressed timeline with dedicated focus.",
        icon: "zap",
        price: 1500,
        days: -15,
        intensity: 10,
      },
      {
        id: "express",
        title: "Express",
        desc: "Maximum priority. Everything else waits.",
        icon: "zap",
        price: 3500,
        days: -30,
        intensity: 20,
      },
    ],
  },
  {
    id: "support",
    shortLabel: "Support",
    title: "Support & SLA",
    desc: "What happens after launch?",
    type: "single",
    options: [
      {
        id: "basic-support",
        title: "Basic",
        desc: "30-day bug-fix window post-launch.",
        icon: "shield",
        price: 0,
        days: 0,
        intensity: 0,
      },
      {
        id: "extended-support",
        title: "Extended",
        desc: "3 months of support and minor iteration.",
        icon: "shield",
        price: 800,
        days: 0,
        intensity: 5,
      },
      {
        id: "priority-support",
        title: "Priority",
        desc: "Ongoing retainer with priority response times.",
        icon: "shield",
        price: 2000,
        days: 0,
        intensity: 10,
      },
    ],
  },
];