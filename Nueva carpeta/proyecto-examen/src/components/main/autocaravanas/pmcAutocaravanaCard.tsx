import { Link } from "react-router-dom";
import type { PmcIAutocaravanas } from "@/model/interfaces/pmcIAutocaravanas";
import { User } from "lucide-react";

export const PmcAutocaravanaCard = ({ auto }: { auto: PmcIAutocaravanas }) => {
  return (
    // Contenedor principal: Blanco, bordes redondeados y sombra suave
    <div className="bg-white rounded-3xl overflow-hidden flex flex-col shadow-lg border border-zinc-100 h-full">
      
      {/* 1. Zona de Imagen: Fondo gris claro y padding para que la foto no toque los bordes */}
      <div className="bg-[#f3f4f6] p-4 flex justify-center items-center h-48">
        <img 
          src={auto.imagenes[0]} 
          alt={auto.modelo} 
          className="max-h-full object-contain mix-blend-multiply" 
        />
      </div>

      {/* 2. Cabecera: Nombre y Badge de Marca */}
      <div className="px-4 py-3 flex justify-between items-center">
        <h3 className="font-bold text-zinc-900 text-sm truncate">
          {auto.marca} {auto.modelo}
        </h3>
        <span className="bg-[#002855] text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase">
          {auto.marca}
        </span>
      </div>

      {/* 3. Bloques de especificaciones (Azul y Rosa) */}
      <div className="px-4 pb-3 grid grid-cols-[1fr_2fr] gap-2">
        {/* Plazas: Fondo azul muy claro */}
        <div className="bg-[#f0f7ff] border border-blue-100 rounded-lg py-2 flex items-center justify-center gap-1">
          <User className="w-3 h-3 text-blue-900" />
          <span className="font-bold text-zinc-800 text-xs">{auto.personas}</span>
        </div>
        
        {/* Medidas: Fondo rosa muy claro */}
        <div className="bg-[#fff1f2] border border-rose-100 rounded-lg px-2 py-1 text-[10px] text-zinc-600 flex flex-col justify-center leading-tight">
          <p>Longitud: <span className="font-medium text-zinc-800">{auto.medidas.longitud}</span></p>
          <p>Anchura: <span className="font-medium text-zinc-800">{auto.medidas.anchura}</span></p>
          <p>Altura: <span className="font-medium text-zinc-800">{auto.medidas.altura}</span></p>
        </div>
      </div>

      {/* 4. Precio: Pastilla amarilla con texto azul oscuro */}
      <div className="px-4 mb-3">
        <div className="bg-[#fff9c4] text-[#002855] font-black py-2 rounded-xl text-center border border-yellow-200 text-sm">
          {auto.precio_eur.toLocaleString()} €
        </div>
      </div>

      {/* 5. Botón: Negro total con texto blanco centrado */}
      <div className="px-4 pb-4 mt-auto">
        <Link to={`/autocaravanas/detalle/${auto.cod}`}>
          <button className="w-full bg-zinc-950 text-white font-bold py-3 rounded-xl hover:bg-zinc-800 transition-colors text-xs uppercase">
            Ver Detalles
          </button>
        </Link>
      </div>
    </div>
  );
};