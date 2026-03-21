import { useState } from "react";
import { ServiciosCard } from "@/components/main/servicios/ServiciosCard";
import dataServicios from "@/model/data/servicios.json";
import { Button } from "@/components/ui/button";

const Servicios = () => {
    const [categoriaActual, setCategoriaActual] = useState("Todos");

    const categorias = ["Todos", ...new Set(dataServicios.map(s => s.categoria))];

    const serviciosFiltrados = categoriaActual === "Todos" 
        ? dataServicios 
        : dataServicios.filter(s => s.categoria === categoriaActual);

    return (
        <section id="servicios" className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                
                <div className="mx-auto max-w-2xl text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">
                        Servicios Ofrecidos
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Filtra por categoría para encontrar lo que necesitas
                    </p>
                </div>

                {/* --- BLOQUE DE BOTONES DE FILTRO CORREGIDO --- */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categorias.map((cat) => (
                        <Button 
                            key={cat}
                            // Mantenemos el variant pero forzamos colores con Tailwind
                            variant={categoriaActual === cat ? "default" : "outline"}
                            onClick={() => setCategoriaActual(cat)}
                            className={`capitalize transition-all duration-200 ${
                                categoriaActual === cat 
                                ? "bg-blue-800 text-white border-transparent shadow-lg shadow-blue-500/20" 
                                : "bg-transparent text-gray-300 border-gray-600 hover:bg-gray-800 hover:text-white"
                            }`}
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* --- LISTADO DE TARJETAS --- */}
                <div className="mt-10">
                    {serviciosFiltrados.length > 0 ? (
                        <ServiciosCard servicios={serviciosFiltrados} />
                    ) : (
                        <p className="text-center text-gray-400">No hay servicios en esta categoría.</p>
                    )}
                </div>
                
            </div>
        </section>  
    );
};

export default Servicios;