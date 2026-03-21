import type { ILogro } from "@/model/interfaces/iLogros";
import { LogroCard } from "./LogroCard";

export const LogrosCard = ({ logros }: { logros: ILogro[] }) => {
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {logros.map((l) => (
                <LogroCard key={l.id} logro={l} />
            ))}
        </div>
    );
};