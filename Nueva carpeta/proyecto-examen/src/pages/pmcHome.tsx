export const PmcHome = () => (
  // Mantenemos el fondo oscuro y la altura. 
  // Cambiamos flex-center por un padding superior para posicionar el texto.
  <div className="min-h-screen bg-[#0f172a] text-white pt-32 pb-20">
    <div className="container mx-auto px-10 lg:px-20">
      
      {/* Título: Blanco, fuente grande y bold, pero sin itálicas ni uppercase */}
      <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight max-w-4xl">
        Ya estamos en más de 50 puntos de Venta y Tasación por toda España
      </h1>

      {/* Párrafo: Más pequeño, con interlineado cómodo y un max-width para que se lea mejor */}
      <p className="text-lg md:text-xl font-light text-zinc-300 max-w-5xl leading-relaxed">
        En Autocaravanas Norte, disponemos de puntos de tasación y venta repartidos por toda España, 
        para que siempre tengas un punto cerca de casa. Puedes vender o tasar tu 
        autocaravana sin ningún tipo de compromiso. Te daremos el mejor precio del mercado.
      </p>

    </div>
  </div>
);