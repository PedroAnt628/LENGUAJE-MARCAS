import { NavLink } from "react-router-dom";
import tiposJson from "@/model/data/pmcTipos.json";

export const PmcNavBar = () => {
  const activeStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? "text-blue-500 font-medium" : "text-white font-medium hover:text-blue-500";

  return (
    <nav className="bg-[#020617] text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-center items-center gap-8">
        <NavLink to="/" className={activeStyle}>Home</NavLink>
        
        <div className="flex gap-8">
          {tiposJson.map((t) => (
            <NavLink 
              key={t.id} 
              // Quitamos la barra del inicio de t.ruta para que no choque con /autocaravanas/
              to={`/autocaravanas${t.ruta}`} 
              className={activeStyle}
            >
              {t.nombre}
            </NavLink>
          ))}
        </div>

        <NavLink to="/contacto" className={activeStyle}>Contacto</NavLink>
      </div>
    </nav>
  );
};