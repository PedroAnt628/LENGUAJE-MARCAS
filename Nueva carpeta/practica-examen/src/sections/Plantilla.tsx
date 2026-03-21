import { useState } from "react";
import dataPlayers from "@/model/data/players.json";
import { PlayersCard } from "@/components/Main/Players/PlayersCard";
import type { IPlayer } from "@/model/interfaces/iPlayer";

const Plantilla = () => {
    // 1. Estado para el filtro
    const [rolActual, setRolActual] = useState("Todos");

    // 2. Extraer roles únicos para los botones
    const players = dataPlayers as IPlayer[];
    const roles = ["Todos", ...new Set(players.map(p => p.role))];

    // 3. Filtrar
    const filtrados = rolActual === "Todos" 
        ? players 
        : players.filter(p => p.role === rolActual);

    return (
        <section id="plantilla" className="bg-slate-900 py-24 px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black italic text-white uppercase tracking-tighter">
                        La <span className="text-yellow-400">Plantilla</span>
                    </h2>
                    <p className="text-gray-400 mt-4">Filtra por rol en el equipo</p>
                </div>

                {/* BOTONES DE FILTRO (Tailwind puro para no depender de Shadcn) */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {roles.map((rol) => (
                        <button
                            key={rol}
                            onClick={() => setRolActual(rol)}
                            className={`px-6 py-2 font-bold uppercase text-xs transition-all border ${
                                rolActual === rol 
                                ? "bg-yellow-400 text-black border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.3)]" 
                                : "bg-transparent text-gray-400 border-gray-700 hover:text-white hover:border-gray-500"
                            }`}
                        >
                            {rol}
                        </button>
                    ))}
                </div>

                {/* LISTADO DE TARJETAS */}
                {filtrados.length > 0 ? (
                    <PlayersCard players={filtrados} />
                ) : (
                    <p className="text-center text-gray-500">No hay jugadores con este rol.</p>
                )}
                
            </div>
        </section>
    );
};

export default Plantilla;