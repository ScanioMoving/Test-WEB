import { ExternalLink } from "lucide-react";

const portalLinks = [
  { label: "Designer Portal", href: "https://designers.scaniomoving.com" },
  { label: "Storage Portal", href: "https://storage.scaniomoving.com" },
];

export default function HeaderPortalLinks({
  className,
  color,
  onClick,
}: {
  className: string;
  color: string;
  onClick: () => void;
}) {
  return portalLinks.map(({ label, href }) => (
    <a
      key={href}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`flex shrink-0 items-center gap-1.5 text-[11px] font-bold tracking-[0.08em] uppercase focus-visible:outline-current! max-lg:min-h-11 min-[360px]:text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[17px] xl:tracking-[0.15em] ${className}`}
      style={{ color, fontFamily: "var(--font-manrope), 'Inter', 'Helvetica Neue', sans-serif" }}
    >
      {label}
      <ExternalLink size={12} className="shrink-0 opacity-60" aria-hidden="true" />
    </a>
  ));
}
