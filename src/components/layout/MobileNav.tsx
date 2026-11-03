import { NavLink } from 'react-router-dom';
import { MENU_ITEMS } from '../../constants/navigation';

export default function MobileNav() {
  return (
    <nav className="flex items-center justify-around h-16 bg-sidebar border-t border-gray-800 px-2">
      {MENU_ITEMS.map((item) => (
        <NavLink
          key={item.label}
          to={item.path}
          className={({ isActive }) => `
            flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors
            ${isActive 
              ? 'text-sidebar-text' 
              : 'text-muted'
            }
          `}
        >
          <span className="w-6 h-6 flex items-center justify-center">
            {item.icon}
          </span>
          <span className="text-[10px] font-medium tracking-wide">
            {item.label}
          </span>
        </NavLink>
      ))}
    </nav>
  );
}