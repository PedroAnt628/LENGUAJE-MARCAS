import { useParams } from "react-router-dom";
import playersJson from "@/model/data/pemorPlayers.json";

export const pemorPlayerDetalle = () => {
  const { id } = useParams();
  
  // Buscamos el jugador único por ID
  const player = playersJson.find((p) => p.id === Number(id));

  if (!player) return <div>Jugador no encontrado</div>;

  return (
    <div className="p-20">
      <h1>{player.name}</h1>
      {/* Aquí el examen pide meter un Carousel de Shadcn con las imágenes */}
    </div>
  );
};