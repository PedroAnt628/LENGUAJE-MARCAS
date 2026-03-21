import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const QuienSoy = () => {
  return (
    <section id="qsomos" className="bg-gray-900 py-24 sm:py-32 flex items-center justify-center border-t border-gray-800">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        
        {/* Badge de estado */}
        <Badge variant="outline" className="mb-6 text-blue-400 border-blue-400/30 bg-blue-400/5 px-4 py-1">
          Disponible para nuevos retos tecnológicos
        </Badge>
        
        {/* Título Principal */}
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-8">
          Sobre <span className="text-blue-500 text-gradient bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">mí</span>
        </h2>
        
        {/* Bio Profesional */}
        <div className="space-y-6 text-lg leading-8 text-gray-300">
          <p>
            Soy un apasionado de la **tecnología e infraestructura**, con un perfil híbrido que me permite moverme con soltura entre el hardware de comunicaciones y el desarrollo de software moderno.
          </p>
          <p>
            Mi objetivo es construir puentes digitales: desde el despliegue físico de **redes de fibra óptica** y configuración de sistemas **Cisco**, hasta la arquitectura de aplicaciones escalables en la nube mediante **Kubernetes** y microservicios.
          </p>
        </div>

        {/* Grid de Habilidades (sustituye visualmente a la foto) */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            "Networking Specialist",
            "Fullstack Dev",
            "Cloud Architect",
            "Fiber Expert"
          ].map((skill) => (
            <div key={skill} className="bg-gray-800/50 border border-gray-700 p-3 rounded-lg text-sm text-blue-400 font-medium hover:bg-gray-800 transition-colors">
              {skill}
            </div>
          ))}
        </div>

        {/* Botones de Acción */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button className="bg-blue-600 hover:bg-blue-700 px-10 py-6 text-lg shadow-lg shadow-blue-500/20 w-full sm:w-auto">
            Descargar mi CV
          </Button>
          <a href="#contacto" className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors">
            Contactar ahora <span aria-hidden="true">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default QuienSoy;

//1.- para definir un componente de react con funcion JS tradicional
// function qsomos(){
//     return(

//     )
// }

// export default qsomos;

//2.- funcion + export
// export default function qsomos1(){
//     return (
//     )
// }


