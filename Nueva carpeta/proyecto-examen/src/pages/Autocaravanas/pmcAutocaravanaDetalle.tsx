import { useParams } from "react-router-dom";
import autosJson from "@/model/data/pmcAutocaravanas.json";
import type { PmcIAutocaravanas } from "@/model/interfaces/pmcIAutocaravanas";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const PmcAutocaravanaDetalle = () => {
  const { cod } = useParams();
  const auto = (autosJson as PmcIAutocaravanas[]).find(a => a.cod === Number(cod));

  if (!auto) return <div className="h-screen bg-[#0f172a]"></div>;

  return (
    <div className="min-h-screen bg-[#0f172a] py-10 px-4 flex justify-center items-start">
      
      {/* Tarjeta Blanca - Alineamos todo al inicio (izquierda) */}
      <div className="bg-white w-full max-w-4xl rounded-[2rem] shadow-2xl p-6 md:p-10 flex flex-col items-start">
        
        {/* 1. Imagen Grande Principal */}
        <div className="w-full flex justify-center mb-6">
          <img 
            src={auto.imagenes[0]} 
            alt={auto.modelo} 
            className="max-h-[350px] object-contain" 
          />
        </div>

        {/* 2. Título a la izquierda */}
        <div className="mb-4">
          <h2 className="text-zinc-800 font-bold text-lg">{auto.marca} {auto.modelo}</h2>
        </div>

        {/* 3. BARRA TÉCNICA (Alineada a la izquierda) */}
        <div className="w-full max-w-2xl grid grid-cols-3 rounded-xl overflow-hidden mb-10 border border-zinc-100 shadow-sm">
          <div className="bg-[#fef9c3] p-4 flex flex-col items-center justify-center">
            <span className="text-xl">👤</span>
            <span className="font-bold text-zinc-700">{auto.personas}</span>
          </div>

          <div className="bg-[#fff1f2] p-4 flex flex-col justify-center text-[11px] text-zinc-600 border-x border-white/50">
            <p>Longitud: {auto.medidas.longitud}</p>
            <p>Anchura: {auto.medidas.anchura}</p>
            <p>Altura: {auto.medidas.altura}</p>
          </div>

          <div className="bg-[#fef9c3] p-4 flex items-center justify-center">
            <span className="text-[#1e3a8a] text-xl font-black">
              {auto.precio_eur.toLocaleString()} €
            </span>
          </div>
        </div>

        {/* 4. CARRUSEL PEQUEÑO (Alineado a la izquierda) */}
        <div className="w-full max-w-sm ml-0"> {/* ml-0 asegura que no se centre */}
          <div className="relative group px-8"> {/* Contenedor relativo para las flechas */}
            
            <Carousel 
              opts={{ align: "start" }} 
              className="w-full"
            >
              <CarouselContent className="-ml-2">
                {auto.imagenes.map((img, i) => (
                  <CarouselItem key={i} className="pl-2 basis-1/3">
                    <div className="rounded-xl border border-zinc-200 overflow-hidden h-20">
                      <img src={img} className="w-full h-full object-cover" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* FLECHAS CORREGIDAS: Con z-50 y puntero habilitado */}
              <CarouselPrevious 
                className="absolute -left-2 top-1/2 -translate-y-1/2 z-50 pointer-events-auto h-8 w-8 bg-zinc-100 border-none shadow-md hover:bg-zinc-200" 
              />
              <CarouselNext 
                className="absolute -right-2 top-1/2 -translate-y-1/2 z-50 pointer-events-auto h-8 w-8 bg-zinc-100 border-none shadow-md hover:bg-zinc-200" 
              />
            </Carousel>

          </div>
        </div>

      </div>
    </div>
  );
};