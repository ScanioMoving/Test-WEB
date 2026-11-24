import { ExternalLink } from "lucide-react";

export default function StoragePortalLink({
  color,
  onClick,
}: {
  color: string;
  onClick: () => void;
}) {
  return (
    <a
      href="https://storage.scaniomoving.com"
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="inline-flex min-h-11 shrink-0 items-center gap-1.5 border border-current/40 px-2 py-1.5 text-[11px] leading-tight font-bold tracking-[0.08em] uppercase transition-colors duration-300 hover:border-current focus-visible:outline-current! sm:px-3 sm:text-[13px] xl:text-[15px]"
      style={{ color, fontFamily: "var(--font-manrope), 'Inter', 'Helvetica Neue', sans-serif" }}
    >
      <span className="max-[439px]:max-w-min">Storage Portal</span>
      <ExternalLink size={12} aria-hidden="true" />
    </a>
  );
}
