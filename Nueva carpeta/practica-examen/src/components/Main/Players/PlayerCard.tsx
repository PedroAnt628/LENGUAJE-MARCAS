import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"; // <-- Revisa si es 'componets' o 'components'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { IPlayer } from "@/model/interfaces/iPlayer";

interface Props {
  player: IPlayer;
}

export const PlayerCard = ({ player }: Props) => {
  return (
    <Card className="h-[600px] overflow-hidden border-zinc-800 bg-zinc-950 group hover:border-yellow-400 transition-all duration-300 shadow-2xl">
      {/* Contenedor de Imagen */}
      <div className="relative aspect-square overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 opacity-80" />
        <img 
          src={player.image} 
          alt={player.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <Badge className="absolute top-4 right-4 z-20 bg-yellow-400 text-black font-black uppercase italic">
          {player.role}
        </Badge>
      </div>

      <CardHeader className="relative z-20 -mt-12 pb-2">
        <CardTitle className="text-4xl font-black italic uppercase text-white tracking-tighter">
          {player.name}
        </CardTitle>
        <CardDescription className="text-zinc-400 font-medium">
          {player.country} 🇫🇷
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
          {player.description}
        </p>
        
        {/* Tags de habilidades */}
        <div className="flex flex-wrap gap-2 mt-4">
          {player.tags.map((tag) => (
            <span key={tag} className="text-[10px] px-2 py-0.5 rounded border border-zinc-800 bg-zinc-900 text-zinc-500 font-bold uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-black uppercase italic rounded-none transition-all">
          Ver Estadísticas
        </Button>
      </CardFooter>
    </Card>
  );
};