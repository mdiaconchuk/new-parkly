import logo from "../../assets/logo.png";
import { MENU_ITEMS } from "../../constants/navigation";
import NavItem from "../ui/NavItem";
import Footer from "./Footer";

export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-sidebar text-foreground flex flex-col">

      {/* Logo */}
      <div className="px-6 mb-8 mt-8 scale-80 transition-transform">
        <img src={logo} alt="Parkly Logo"/>
      </div>

      {/* NavItems */}
      <nav className="flex flex-col gap-2 px-6">
        {MENU_ITEMS.map((item) => (
          <NavItem key={item.label} item={item} />
        ))}
      </nav>

      {/* Top Footer Line */}
      <div className="border-b border-sidebar-active mx-7 mt-auto mb-6">line</div>

      {/* Footer */}
      <Footer/>
    </aside>
  );
}
