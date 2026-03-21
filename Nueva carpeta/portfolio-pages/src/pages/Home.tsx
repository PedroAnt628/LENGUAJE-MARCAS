const Qsomos = () => {
  return (
    <section id="qsomos" className="py-20 bg-slate-950 text-white overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Lado Izquierdo: Texto */}
        <div className="md:w-1/2 space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-yellow-400 text-black font-bold text-sm tracking-widest uppercase">
            Nuestra Historia
          </div>
          <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter">
            LA <span className="text-yellow-400">COLMENA</span> <br /> 
            DOMINANDO EL CAMPO
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Fundado en Francia en 2013, <span className="text-white font-bold">Team Vitality</span> ha pasado de ser un sueño europeo a convertirse en la organización de esports más dominante del mundo. 
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Nuestra división de <span className="text-yellow-400 font-bold">Rocket League</span> no solo compite; marca una era. Con leyendas como Zen, Alpha54 y Radosin, hemos conquistado la RLCS demostrando que el trabajo en equipo y la precisión mecánica son nuestro ADN.
          </p>
          
          {/* Un par de stats rápidas que lucen mucho */}
          <div className="flex gap-8 pt-4">
            <div>
              <p className="text-3xl font-black text-yellow-400">2013</p>
              <p className="text-xs text-gray-500 uppercase font-bold">Fundación</p>
            </div>
            <div>
              <p className="text-3xl font-black text-yellow-400">+50</p>
              <p className="text-xs text-gray-500 uppercase font-bold">Trofeos</p>
            </div>
            <div>
              <p className="text-3xl font-black text-yellow-400">#1</p>
              <p className="text-xs text-gray-500 uppercase font-bold">Mundial RLCS</p>
            </div>
          </div>
        </div>

        {/* Lado Derecho: Decoración visual */}
        <div className="md:w-1/2 relative">
          {/* El cuadrado amarillo de fondo que le da el toque "pro" */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative border-l-8 border-yellow-400 p-8 bg-slate-900 shadow-2xl rounded-r-xl">
            <blockquote className="italic text-2xl font-medium text-gray-200">
              "V para la Victoria. En Vitality no buscamos el éxito, lo perseguimos hasta que no tiene más remedio que ser nuestro."
            </blockquote>
            <p className="mt-4 text-yellow-400 font-bold uppercase tracking-widest">— Neo, Fundador</p>
          </div>
          
          {/* Un detalle de diseño extra: líneas diagonales estilo Vitality */}
          <div className="mt-8 flex gap-2">
            <div className="h-2 w-20 bg-yellow-400"></div>
            <div className="h-2 w-10 bg-yellow-400/50"></div>
            <div className="h-2 w-5 bg-yellow-400/20"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Qsomos;