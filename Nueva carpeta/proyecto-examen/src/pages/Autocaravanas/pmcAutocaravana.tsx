import { useParams } from "react-router-dom";
import autosJson from "@/model/data/pmcAutocaravanas.json";
import { PmcAutocaravanaCard } from "@/components/main/autocaravanas/pmcAutocaravanaCard";
import type { PmcIAutocaravanas } from "@/model/interfaces/pmcIAutocaravanas";

export const PmcAutocaravana = () => {
  const { tipo } = useParams();

  const autosFiltrados = (autosJson as PmcIAutocaravanas[]).filter(
    (a) => a.tipo.toLowerCase() === tipo?.toLowerCase()
  );

  return (
    // Fondo oscuro Slate-950 para que coincida con el Navbar y Home
    <div className="min-h-screen bg-[#0f172a] py-12 px-6">
      <div className="container mx-auto">
        
        {/* Título: Rojo, centrado y en minúsculas (solo primera letra) según la imagen */}
        <div className="text-center mb-12">
          <h2 className="text-red-600 font-medium text-lg">
            Autocaravanas {tipo}s
          </h2>
        </div>

        {autosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {autosFiltrados.map((auto) => (
              <PmcAutocaravanaCard key={auto.cod} auto={auto} />
            ))}
          </div>
        ) : (
          <p className="text-zinc-500 text-center italic">No hay vehículos en esta categoría.</p>
        )}
      </div>
    </div>
  );
};