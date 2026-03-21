import type { IServicio } from "@/model/interfaces/iServicio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface Props {
    servicio: IServicio;
}

export const ServicioCard = ({ servicio }: Props) => {
    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden flex flex-col justify-between h-full">
            {/* Capa de diseño para que la imagen no se vea tan brillante */}
            <div className="absolute inset-0 z-30 aspect-video bg-black/20 pointer-events-none" />
            
            <img
                // Si el JSON no tiene imagen, ponemos una de redes por defecto
                src={servicio.imagen || "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=400"}
                alt={servicio.titulo}
                className="relative z-20 aspect-video w-full object-cover"
            />

            <CardHeader className="flex-grow">
                <CardAction>
                    {/* Mostramos la categoría real del JSON */}
                    <Badge variant="secondary" className="uppercase text-[10px]">
                        {servicio.categoria}
                    </Badge>
                </CardAction>
                
                <CardTitle className="text-xl line-clamp-1">
                    {servicio.titulo}
                </CardTitle>
                
                <CardDescription className="line-clamp-4">
                    {servicio.descripcion}
                </CardDescription>

                {/* PLUS: Si quieres lucirte, pintamos las tecnologías */}
                <div className="flex flex-wrap gap-1 mt-3">
                    {servicio.tecnologias.map((tec, index) => (
                        <span key={index} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[9px] border">
                            {tec}
                        </span>
                    ))}
                </div>
            </CardHeader>

            <CardFooter>
                <Button className="w-full">Ver detalles</Button>
            </CardFooter>
        </Card>
    );
};