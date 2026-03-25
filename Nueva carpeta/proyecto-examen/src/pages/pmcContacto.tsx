import { MapPin, Share2, Mail, Calculator } from "lucide-react";

export const PmcContacto = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] py-10 px-4">
      <div className="container mx-auto max-w-4xl">
        
        {/* 1. Sub-Navegación Interna (Links Rojos, letra pequeña) */}
        <nav className="flex justify-center gap-6 mb-12">
          {["Ubicacion", "Redes Sociales", "Direccion", "Presupuesto"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`} 
              className="text-red-600 font-bold hover:text-red-400 transition-colors text-[10px] uppercase tracking-[0.2em]"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* 2. Bloque: Mapa de Ubicación */}
        <div id="ubicacion" className="bg-white rounded-xl mb-6 overflow-hidden min-h-[200px] flex items-center p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <h3 className="text-blue-600 text-lg font-bold italic">Mapa de ubicacion</h3>
          </div>
        </div>

        {/* 3. Bloque: Redes Sociales */}
        <div id="redes-sociales" className="bg-white rounded-xl mb-6 overflow-hidden min-h-[200px] flex items-center p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <h3 className="text-blue-600 text-lg font-bold italic">Redes Sociales</h3>
          </div>
        </div>

        {/* 4. Bloque: Dirección y Datos */}
        <div id="direccion" className="bg-white rounded-xl mb-6 overflow-hidden p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <h3 className="text-blue-600 text-lg font-bold italic">Dirección y contacto</h3>
          </div>
          <div className="text-zinc-500 text-xs space-y-1 ml-8">
            <p>Calle de las Autocaravanas, 123 - Madrid, España</p>
            <p className="font-semibold text-zinc-700">info@pmcexam.com | +34 900 000 000</p>
          </div>
        </div>

      </div>
    </div>
  );
};