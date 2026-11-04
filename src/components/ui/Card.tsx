import type { IconType } from "react-icons";
import type { ReactNode } from "react";

interface CardProps {
  title: string;
  active?: boolean;
  icon: IconType;
  children: ReactNode;
}

export default function Card({
  title,
  active,
  icon: Icon,
  children,
}: CardProps) {
  return (
    <div
      className={`border border-border-xl border-border p-5 w-auto rounded-2xl
    ${active ? "bg-highlight border-highlight" : "bg-surface"}`}
    >
      {/* CONTAINER HEADER CARD */}
      <div className="flex justify-between items-start mb-3">
        {/* CARD TITLE */}
        <p className="font-bold text-card-title tracking-tight uppercase text-sm">
          {title}
        </p>

        {/* CARD ICON */}
        <p
          className={`${active ? "bg-icon-highlight" : "bg-surface-muted"} p-2 rounded-lg`}
        >
          <Icon size={20} className="text-card-title" />
        </p>
      </div>
      {/* CARD CONTENT */}
      {children}
    </div>
  );
}
