export default function ConfiguratorIcon({ name }: { name: string }) {
  const common = "h-5 w-5";
  switch (name) {
    case "layout":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="16" rx="1.5" />
          <path d="M3 9h18" />
        </svg>
      );
    case "image":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="4" width="18" height="16" rx="1.5" />
          <circle cx="9" cy="10" r="1.5" />
          <path d="m21 16-5-5-4 4-3-3-5 5" />
        </svg>
      );
    case "zap":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
        </svg>
      );
    case "cart":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="9" cy="20" r="1" />
          <circle cx="18" cy="20" r="1" />
          <path d="M2 3h2l2.4 12.2a2 2 0 0 0 2 1.8h8.2a2 2 0 0 0 2-1.6L21 8H6" />
        </svg>
      );
    case "cloud":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 18a4.5 4.5 0 0 1-.5-8.98A5.5 5.5 0 0 1 17 9.5 4 4 0 0 1 17 18H7Z" />
        </svg>
      );
    case "chart":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 20V10M12 20V4M20 20v-7" />
        </svg>
      );
    case "gauge":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 12H1M23 12h-3M6 6l2 2M18 6l-2 2" />
          <circle cx="12" cy="14" r="7" />
          <path d="M12 14l3-3" />
        </svg>
      );
    case "shield":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" />
        </svg>
      );
    case "user":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c1.5-4 6-6 8-6s6.5 2 8 6" />
        </svg>
      );
    case "sparkles":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v6M12 16v6M2 12h6M16 12h6M4.5 4.5l4 4M15.5 15.5l4 4M19.5 4.5l-4 4M8.5 15.5l-4 4" />
        </svg>
      );
    case "bolt":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      );
    case "plug":
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 2v4M15 2v4M7 6h10v4a5 5 0 0 1-10 0V6Z" />
          <path d="M12 15v7" />
        </svg>
      );
    default:
      return null;
  }
}