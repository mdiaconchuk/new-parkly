import { NavLink } from "react-router-dom";
import type { NavItemType } from "../../types";

interface NavItemProps {
  item: NavItemType;
}

export default function NavItem({ item }: NavItemProps) {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        `flex items-center gap-3 p-2.5 rounded-lg transition-colors w-full text-left font-medium cursor-pointer text-md
        ${
          isActive
            ? "bg-sidebar-active text-white"
            : "text-muted hover:bg-sidebar-active hover:text-sidebar-text"
        }`
      }
    >
      <span className="size-4.5 flex items-center justify-center">
        {item.icon}
      </span>
      {item.label}
    </NavLink>
  );
}