// Definimos los logos aquí mismo (o podrías moverlo a un JSON si prefieres)
// He usado logos de tecnologías que encajan con tu perfil (Redes y Dev)
const logos = [
    { 
        name: 'Cisco', 
        src: 'https://cdn.worldvectorlogo.com/logos/cisco-2.svg', 
        className: 'h-12' // Ajuste de altura específico si alguno se ve muy grande
    },
    { 
        name: 'Linux', 
        src: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg',
        className: 'h-14' 
    },
    { 
        name: 'Kubernetes', 
        src: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
        className: 'h-12'
    },
    { 
        name: 'React', 
        src: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
        className: 'h-12'
    },
    { 
        name: 'Tailwind CSS', 
        src: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg',
        className: 'h-10 mt-2' // Un pequeño ajuste de margen
    },
    { 
        name: 'Docker', 
        src: 'https://cdn.worldvectorlogo.com/logos/docker.svg',
        className: 'h-14'
    },
    // Puedes añadir el logo de tu instituto aquí si lo encuentras en SVG
];

const Clientes = () => {
    return (
        <section id="clientes" className="bg-gray-900 py-24 sm:py-32 border-t border-gray-800">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                
                {/* Título de la sección */}
                <h2 className="text-center text-lg font-semibold leading-8 text-gray-400 uppercase tracking-widest mb-16">
                    Stack Tecnológico y Entornos
                </h2>
                
                {/* Grid de Logos */}
                <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
                    {logos.map((logo) => (
                        <div key={logo.name} className="flex justify-center">
                            <img
                                src={logo.src}
                                alt={`Logo de ${logo.name}`}
                                // Clases clave:
                                // - grayscale opacity-60: Por defecto se ven apagados
                                // - hover:grayscale-0 hover:opacity-100: Al pasar el ratón se ven a color
                                // - transition-all: Suaviza el cambio
                                className={`max-h-12 w-full object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer ${logo.className || ''}`}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Clientes;