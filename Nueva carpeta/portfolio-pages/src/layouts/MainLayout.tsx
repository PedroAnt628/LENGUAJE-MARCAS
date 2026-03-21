
import { Outlet } from "react-router-dom";
import { NavBar } from "@/components/NavBar";

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      <NavBar />
      <main className="container mx-auto py-10">
         {/* El componente Outlet es un componente de React Router que se utiliza para
             renderizar los componentes hijos de una ruta. En este caso, el componente Outlet 
             se utiliza para renderizar los componentes Home, Trabajos y Contacto, dependiendo 
             de la ruta que se haya seleccionado en el NavBar. */}
        <Outlet />
      </main>
      <footer className="py-10 text-center text-zinc-500 border-t border-zinc-900">
        &copy; 2026 Team Vitality Fan Page - Práctica Examen
      </footer>
    </div>
  );
};