import type { IServicio } from "@/model/interfaces/iServicio";
// Importamos usando ./ porque están en la misma carpeta
import { ServicioCard } from "@/components/main/servicios/ServicioCard";;

interface Props {
    servicios: IServicio[];
}

export const ServiciosCard = ({ servicios }: Props) => {
    return (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
            {servicios.map((servicio) => (
                // Añadimos la key obligatoria
                <ServicioCard key={servicio.id} servicio={servicio} />
            ))}
        </div>
    );
};