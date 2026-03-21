import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const Trabajos = () => {
    return (
        <section id="trabajos" className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 border-t border-gray-800">
            
            {/* Fondo decorativo (Mantenemos tu SVG pero en azul) */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                    aria-hidden="true"
                    className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-700"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="pattern-bg"
                            width={200}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <rect fill="url(#pattern-bg)" width="100%" height="100%" strokeWidth={0} />
                </svg>
            </div>

            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                
                {/* Texto principal */}
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base/7 font-semibold text-blue-400">Proyectos y Laboratorios</p>
                            <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                                Experiencia Técnica en Acción
                            </h1>
                            <p className="mt-6 text-xl/8 text-gray-300">
                                Aunque mi portfolio está en constante crecimiento, he dedicado cientos de horas a configurar entornos de red complejos y desplegar infraestructuras modernas en laboratorios controlados.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Imagen del portfolio (CAMBIADA POR UNA DE CÓDIGO/REDES) */}
                <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img
                        alt="Entorno de desarrollo y redes"
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000" // Una imagen de código limpio
                        className="w-3xl max-w-none rounded-xl bg-gray-800 shadow-xl ring-1 ring-white/10 sm:w-228 grayscale hover:grayscale-0 transition-all duration-500"
                    />
                </div>

                {/* Lista de puntos destacados */}
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base/7 text-gray-400 lg:max-w-lg">
                            <p>
                                Mi enfoque se centra en la <strong>replicabilidad</strong> y la <strong>seguridad</strong>. Cada configuración de red o línea de código sigue estándares profesionales:
                            </p>

                            <ul role="list" className="mt-8 space-y-8 text-gray-400">
                                <li className="flex gap-x-3">
                                    <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-blue-500" />
                                    <span>
                                        <strong className="font-semibold text-white">Infraestructura como Código.</strong> 
                                        Uso de scripts para automatizar el despliegue de servicios, minimizando errores humanos.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-blue-500" />
                                    <span>
                                        <strong className="font-semibold text-white">Hardening de Redes.</strong> 
                                        Aplicación de políticas de seguridad estrictas en routers y switches Cisco.
                                    </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-blue-500" />
                                    <span>
                                        <strong className="font-semibold text-white">Monitoreo de Sistemas.</strong> 
                                        Configuración de paneles para supervisar el estado de la red y el rendimiento de las apps.
                                    </span>
                                </li>
                            </ul>

                            <p className="mt-8">
                                Actualmente me encuentro desarrollando proyectos personales que integran <strong>IA con gestión de redes</strong>, buscando siempre la vanguardia en el sector tecnológico.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trabajos;