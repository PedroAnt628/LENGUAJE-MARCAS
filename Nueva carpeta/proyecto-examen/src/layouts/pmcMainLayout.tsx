import { Outlet } from "react-router-dom";
import { PmcNavBar } from "@/components/pmcNavBar";

export const PmcMainLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <PmcNavBar />
      <main>
        {/* Aquí es donde se renderizan las páginas (Home, Contacto, etc.) */}
        <Outlet />
      </main>
    </div>
  );
};