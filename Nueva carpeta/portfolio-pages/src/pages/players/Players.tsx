import { useState } from "react";
import dataPlayers from "@/model/data/players.json";
import type { IPlayer } from "@/model/interfaces/iPlayer";
import { PlayerCard } from "@/components/Main/Players/PlayerCard"; // Usa tu ruta con errata si es necesario

export const Players = () => {
  const [players] = useState<IPlayer[]>(dataPlayers as IPlayer[]);

  return (
    // Añadimos un fondo oscuro con un efecto de malla (grid) muy sutil
    <div className="min-h-screen bg-zinc-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]">
      <section className="container mx-auto py-16 px-6">
        
        {/* Encabezado Estilo Vitality */}
        <div className="relative mb-16 text-center">
          <span className="text-yellow-400 font-black tracking-[0.3em] uppercase text-sm">Official Roster</span>
          <h1 className="text-7xl md:text-8xl font-black italic uppercase text-white tracking-tighter mt-2">
            La Plantilla <span className="text-yellow-400">.</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-6"></div>
        </div>
        
        {/* Grid de Jugadores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {players.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </section>
    </div>
  );
};