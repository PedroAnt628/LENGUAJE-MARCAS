import { AcademicCapIcon, BookOpenIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const titulos = [
    {
        id: 1,
        title: 'G.S. Desarrollo de Aplicaciones Web (DAW)',
        centro: 'IES Cura Valera',
        description: 'Actualmente cursando el primer año. Especializándome en desarrollo de interfaces, bases de datos y lógica de programación en entornos web.',
        date: '2025 - Actualidad',
        status: 'En curso',
        category: { title: 'Grado Superior', color: 'text-blue-400' },
        icon: <CodeBracketIcon className="size-6 text-blue-400" />
    },
    {
        id: 2,
        title: 'G.M. Sistemas Microinformáticos y Redes (SMR)',
        centro: 'IES Cardenal Cisneros',
        description: 'Formación integral en montaje y mantenimiento de equipos, redes locales, servicios en red y sistemas operativos monopuesto y multiusuario.',
        date: '2023 - 2025',
        status: 'Completado',
        category: { title: 'Grado Medio', color: 'text-gray-400' },
        icon: <AcademicCapIcon className="size-6 text-gray-400" />
    },
    {
        id: 3,
        title: 'Especialización y Autoaprendizaje',
        centro: 'Plataformas Online / Lab',
        description: 'Formación continua en despliegue de contenedores (Kubernetes), administración de servidores Linux y arquitecturas modernas.',
        date: 'Continuo',
        status: 'Aprendizaje activo',
        category: { title: 'Especialización', color: 'text-indigo-400' },
        icon: <BookOpenIcon className="size-6 text-indigo-400" />
    }
]

const Formaciones = () => {
    return (
    <section id="formaciones" className="py-24 bg-gray-900 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            
            {/* Cabecera de la sección */}
            <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Trayectoria Académica
                </h2>
                <p className="mt-4 text-lg text-gray-400">
                    Mi base formativa y certificaciones en el sector tecnológico.
                </p>
            </div>

            {/* Grid de títulos */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {titulos.map((titulo) => (
                    <article 
                        key={titulo.id} 
                        className="flex flex-col items-start bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
                    >
                        <div className="flex items-center gap-x-4 text-xs mb-4">
                            <span className="text-blue-400 font-semibold uppercase tracking-wider">
                                {titulo.status}
                            </span>
                            <time className="text-gray-500">
                                {titulo.date}
                            </time>
                        </div>

                        <div className="flex items-center gap-x-3 mb-4">
                            {titulo.icon}
                            <span className={`text-sm font-medium ${titulo.category.color}`}>
                                {titulo.category.title}
                            </span>
                        </div>

                        <div className="group relative">
                            <h3 className="text-xl font-bold leading-6 text-white group-hover:text-blue-400 transition-colors">
                                {titulo.title}
                            </h3>
                            <p className="mt-2 text-sm text-blue-500 font-medium">
                                {titulo.centro}
                            </p>
                            <p className="mt-5 text-sm leading-6 text-gray-400">
                                {titulo.description}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
    )
}

export default Formaciones;