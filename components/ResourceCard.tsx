import { Download, FileText } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  file: string;
  badge?: string;
  size?: string;
}

export default function ResourceCard({
  title,
  description,
  file,
  badge,
  size,
}: ResourceCardProps) {
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
        href={file}
        download
        className="btn-outline btn-sm justify-center"
      >
        <Download size={14} />
        Download PDF{size ? ` · ${size}` : ""}
      </a>
    </div>
  );
}
