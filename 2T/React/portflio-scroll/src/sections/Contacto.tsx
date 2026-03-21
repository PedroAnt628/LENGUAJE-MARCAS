import { Button } from "@/components/ui/button";

const Contacto = () => {
    return (
        <section id="contacto" className="relative isolate bg-gray-900 py-24 sm:py-32 min-h-[60vh] flex items-center">
            
            {/* 1. LOS BLOBS DE COLOR ORIGINALES (Rosa/Morado) */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-1155/678 -translate-x-1/2 from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)]"
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    
                    {/* Badge con tus colores originales */}
                    <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20 mb-8">
                        ¿Hablamos?
                    </span>

                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        ¿Tienes un proyecto en <span className="text-indigo-400">mente</span>?
                    </h2>
                    
                    <p className="mt-8 text-lg leading-8 text-gray-400">
                        Si necesitas ayuda con el despliegue de una infraestructura, configuración de redes 
                        o el desarrollo de una aplicación web, no dudes en escribirme.
                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                        {/* Botón corregido (Sin asChild) */}
                        <a href="mailto:tuemail@ejemplo.com" className="w-full sm:w-auto">
                            <Button className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-6 text-lg w-full">
                                Enviar un correo
                            </Button>
                        </a>

                        <a 
                            href="https://linkedin.com/in/tu-usuario" 
                            target="_blank" 
                            className="text-sm font-semibold leading-6 text-white hover:text-indigo-400 transition-colors"
                        >
                            Ver mi LinkedIn <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Degradado inferior original */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-1155/678 -translate-x-1/2 from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)]"
                />
            </div>
        </section>
    );
};

export default Contacto;