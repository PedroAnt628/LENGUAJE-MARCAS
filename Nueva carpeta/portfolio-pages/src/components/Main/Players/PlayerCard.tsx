import { Link } from "react-router-dom";
// Mantenemos los imports de Shadcn (revisa tu ruta con errata si es necesario)
import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { IPlayer } from "@/model/interfaces/iPlayer";

interface Props {
  player: IPlayer;
}

export const PlayerCard = ({ player }: Props) => {
  return (
    // La tarjeta principal mantiene su hover y glow amarillo
    <div className="group relative flex flex-col h-full bg-zinc-900 border border-zinc-800 transition-all hover:border-yellow-400/50 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] overflow-hidden">
      
      {/* Contenedor de Imagen con Overlay */}
      <div className="relative aspect-[4/5] overflow-hidden shrink-0">
        
        {/* 1. EL DEGRADADO (Readabilidad): OBLIGATORIO PARA QUE EL NOMBRE SE LEA */}
        {/* Un degradado negro en la parte inferior sobre la imagen */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 opacity-80" />
        
        {/* 2. EL NOMBRE DEL JUGADOR (NUEVO DISEÑO): Absoluto sobre la imagen */}
        <div className="absolute bottom-6 left-6 z-20 space-y-1">
          <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase">{player.role}</p>
          <h3 className="text-4xl font-black italic uppercase text-white tracking-tighter leading-none">
            {player.name}
          </h3>
        </div>

        <img 
          src={player.image} 
          alt={player.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Pie de la tarjeta: Mantenemos la lógica de Link y Button que te funciona */}
      <CardFooter className="p-0 mt-auto">
        <Link to={`/plantilla/${player.id}`} className="w-full">
          {/* Un botón con más "presencia" visual (más alto y con flecha) */}
          <Button className="w-full h-14 bg-yellow-400 text-black hover:bg-white font-black uppercase italic rounded-none flex items-center justify-between px-8 group/btn">
            <span>Ver Detalles Completo</span>
            <span className="text-lg transform transition-transform group-hover/btn:translate-x-2">→</span>
          </Button>
        </Link>
      </CardFooter>
    </div>
  );
};