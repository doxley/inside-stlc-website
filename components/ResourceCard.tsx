import { Download, FileText } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  href: string;
  badge?: string;
}

export default function ResourceCard({
  title,
  description,
  href,
  badge,
}: ResourceCardProps) {
  const external = href.startsWith("http");
  return (
    <div className="card flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="icon-tile">
          <FileText size={18} />
        </div>
        {badge && <span className="chip-green chip">{badge}</span>}
      </div>
      <h3 className="font-semibold text-white text-base mb-2">{title}</h3>
      <p className="text-muted text-sm flex-1 leading-relaxed mb-5">{description}</p>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="btn-outline btn-sm justify-center"
      >
        <Download size={14} />
        Download
      </a>
    </div>
  );
}
