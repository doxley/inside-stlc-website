import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  accent?: "blue" | "green";
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  accent = "blue",
}: ServiceCardProps) {
  return (
    <div className="card group flex flex-col">
      <div className={`icon-tile mb-4 ${accent === "green" ? "green" : ""}`}>
        <Icon size={20} />
      </div>
      <h3 className="font-semibold text-white text-lg mb-2">{title}</h3>
      <p className="text-muted text-sm flex-1 leading-relaxed">{description}</p>
      {href && (
        <Link
          href={href}
          className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-blue group-hover:gap-2 transition-all"
        >
          Learn more <ArrowRight size={14} />
        </Link>
      )}
    </div>
  );
}
