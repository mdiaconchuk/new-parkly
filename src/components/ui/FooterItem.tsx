import React from "react";
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
      className={`transition-opacity hover:opacity-80 flex items-center justify-center w-6 h-6 ${item.normalColor} hover:${item.hoverColor}`}
    >
      {item.icon}
    </a>
  );
}
