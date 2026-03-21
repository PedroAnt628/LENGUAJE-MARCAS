import type { IPlayer } from "@/model/interfaces/iPlayer";
import { PlayerCard } from "./PlayerCard";

interface Props {
    players: IPlayer[];
}

export const PlayersCard = ({ players }: Props) => {
    return (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {players.map((player) => (
                <PlayerCard key={player.id} player={player} />
            ))}
        </div>
    );
};