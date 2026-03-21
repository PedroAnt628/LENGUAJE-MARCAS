import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="bg-black border-b border-yellow-400/30 p-5 sticky top-0 z-50 backdrop-blur-md bg-black/80">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-black italic text-yellow-400 tracking-tighter">
          VITALITY.
        </Link>
        <div className="flex gap-8 font-bold uppercase text-sm tracking-widest">
          <Link to="/" className="hover:text-yellow-400 transition-colors">Inicio</Link>
          <Link to="/plantilla" className="hover:text-yellow-400 transition-colors">Plantilla</Link>
          <Link to="/logros" className="hover:text-yellow-400 transition-colors">Logros</Link>
        </div>
      </div>
    </nav>
  );
};