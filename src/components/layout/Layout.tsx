import React from "react";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import Footer from "./Footer"; // Importás tu footer
import logo from "../../assets/logo.png"; // Importás el logo para el celular

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden">
      
      {/* Sidebar PC */}
      <div className="hidden md:block h-full">
        <Sidebar />
      </div>

      {/* Contenedor derecho (Ocupa todo el ancho en mobile) */}
      <div className="flex flex-col flex-1 w-full h-full relative">
        
        {/* Header Mobile */}
        <header className="flex items-center justify-between md:hidden bg-[#1a1c23] px-4 h-16 shrink-0 w-full">
          <img src={logo} alt="Parkly Logo" className="w-24 object-contain" />
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto pb-16 md:pb-0 flex flex-col">
          
          {/* Page */}
          <div className="flex-1 p-4 md:p-8">
            {children}
          </div>

          {/* Footer */}
          <div className="md:hidden block py-4 border-t border-gray-300 mt-auto bg-slate-800">
            <Footer />
          </div>

        </main>

      </div>

      {/* Mobile Nav */}
      <div className="block md:hidden fixed bottom-0 w-full z-50">
        <MobileNav />
      </div>

    </div>
  );
}