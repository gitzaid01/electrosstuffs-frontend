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