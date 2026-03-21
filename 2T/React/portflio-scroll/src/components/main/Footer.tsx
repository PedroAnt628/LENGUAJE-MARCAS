const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-950 py-12 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-y-6 md:flex-row">
          
          {/* LADO IZQUIERDO: Nombre y estudios */}
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-lg">Pedro Ant</p>
            <p className="text-gray-500 text-sm">Desarrollador Fullstack Junior | 1º DAW</p>
          </div>

          {/* CENTRO: Copyright */}
          <div className="text-gray-500 text-xs">
            © 2026 - Todos los derechos reservados.
          </div>

          {/* LADO DERECHO: Redes y Arriba */}
          <div className="flex items-center gap-x-6">
            <a href="https://linkedin.com" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">LinkedIn</a>
            <a href="https://github.com" className="text-gray-400 hover:text-indigo-400 transition-colors text-sm">GitHub</a>
            <button 
              onClick={scrollToTop}
              className="ml-4 p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-indigo-600 hover:text-white transition-all shadow-lg"
              title="Volver arriba"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;