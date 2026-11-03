import type { FooterItemType } from "../../types";

interface FooterItemProps {
  item: FooterItemType;
}

export default function FooterItem({ item }: FooterItemProps) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-opacity hover:text-muted flex items-center justify-center size-6 text-xl
      text-sidebar-text"
    >
      {item.icon}
    </a>
  );
}
