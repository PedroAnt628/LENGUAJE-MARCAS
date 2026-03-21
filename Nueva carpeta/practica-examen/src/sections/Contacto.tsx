export default function Contacto() {
  return (
    <section id="contacto" className="py-24 bg-slate-950 relative overflow-hidden text-center">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-6xl font-black italic uppercase mb-6 italic">Únete a la <span className="text-yellow-400">Colmena</span></h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
          ¿Quieres recibir noticias exclusivas y drops de Team Vitality? Apúntate a nuestra newsletter.
        </p>
        <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Tu email..." 
            className="flex-grow bg-slate-900 border border-white/10 px-6 py-4 rounded-none focus:outline-none focus:border-yellow-400"
          />
          <button className="bg-yellow-400 text-black px-8 py-4 font-black uppercase hover:bg-white transition-colors">
            Unirse
          </button>
        </form>
      </div>
      {/* Círculo de fondo decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-[120px]"></div>
    </section>
  );
}