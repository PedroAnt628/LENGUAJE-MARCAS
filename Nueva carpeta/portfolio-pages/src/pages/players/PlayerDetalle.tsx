import { useParams, Link } from "react-router-dom";
import playersData from "@/model/data/players.json";
import type { IPlayer } from "@/model/interfaces/iPlayer";
import { Button } from "@/components/ui/button"; // Revisa si es 'componets' con errata
import { Badge } from "@/components/ui/badge";

export const PlayerDetalle = () => {
  // 1. CAPTURAR EL PARÁMETRO DE LA URL (:id)
  const { id } = useParams();

  // 2. BUSCAR AL JUGADOR (CONVIRTIENDO EL ID A NÚMERO)
  // Como explicó el profesor, de la URL viene un 'string', pero en el JSON es un 'number'.
  const player = (playersData as IPlayer[]).find((p) => p.id === Number(id));

  // 3. MANEJAR ERRORES (Si alguien pone un ID inventado)
  if (!player) {
    return (
      <div className="text-center py-20 px-10">
        <h2 className="text-4xl font-black uppercase text-red-500 italic">Jugador no encontrado</h2>
        <p className="text-zinc-400 mt-2">Parece que ese ID no corresponde a ningún miembro de Vitality.</p>
        <Link to="/plantilla" className="inline-block mt-8">
          <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
            ← VOLVER A LA PLANTILLA
          </Button>
        </Link>
      </div>
    );
  }

  // 4. EL RENDERIZADO DEL DETALLE
  return (
    <div className="max-w-6xl mx-auto py-10 px-6 space-y-12">
      
      {/* Sección Superior: Imagen y Info Básica */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square overflow-hidden rounded-3xl border-4 border-yellow-400 shadow-[0_0_50px_rgba(250,204,21,0.3)]">
          <img 
            src={player.image} 
            alt={player.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="space-y-6">
          <Badge className="bg-yellow-400 text-black font-black uppercase italic text-sm rounded-none">
            {player.role}
          </Badge>
          
          <h1 className="text-8xl font-black italic uppercase text-white tracking-tighter leading-none">
            {player.name}
          </h1>
          
          <p className="text-zinc-500 font-bold tracking-widest uppercase text-xs">
            {player.country} 🇫🇷
          </p>

          <p className="text-2xl text-zinc-300 leading-relaxed italic">
            "{player.description}"
          </p>
          
          <div className="flex flex-wrap gap-2 pt-6">
             {player.tags.map(tag => (
                <span key={tag} className="text-[10px] px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-500 font-bold uppercase tracking-widest">
                  {tag}
                </span>
             ))}
          </div>
        </div>
      </div>

      {/* Sección Inferior: Estadísticas (Simuladas para el examen) */}
      <div className="bg-zinc-900/50 p-10 rounded-3xl border border-zinc-800 space-y-6">
        <h2 className="text-4xl font-bold italic uppercase text-yellow-400">Estadísticas RLCS (2026)</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
             <div className="text-5xl font-black">2.1</div>
             <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Goles/Partido</div>
          </div>
          <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
             <div className="text-5xl font-black">1.5</div>
             <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Asistencias/Partido</div>
          </div>
          <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
             <div className="text-5xl font-black">1.8</div>
             <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Salvadas/Partido</div>
          </div>
          <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800">
             <div className="text-5xl font-black">3</div>
             <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">MVP de la Temporada</div>
          </div>
        </div>
      </div>

      {/* Botón de volver */}
      <div className="pt-10">
        <Link to="/plantilla">
          <Button variant="outline" className="w-full text-zinc-600 hover:text-white hover:border-white">
            ← VOLVER A LA PLANTILLA
          </Button>
        </Link>
      </div>
    </div>
  );
};