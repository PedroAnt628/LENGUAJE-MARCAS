import { useParams } from "react-router-dom";
import playersJson from "@/model/data/pemorPlayers.json";
import { pemorPlayerCard } from "./pemorPlayerCard";

export const pemorPlayers = () => {
  // 1. Capturamos el tipo de la URL (ej: 'starter')
  const { tipo } = useParams();

  // 2. Filtramos el JSON principal según ese tipo
  const filteredPlayers = playersJson.filter(
    (p) => p.role.toLowerCase() === tipo?.toLowerCase()
  );

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-10 uppercase italic">
        Categoría: <span className="text-yellow-400">{tipo}</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredPlayers.map((player) => (
          <pemorPlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};