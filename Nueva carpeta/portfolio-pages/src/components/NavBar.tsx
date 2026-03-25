import { Link } from "react-router-dom";
import tiposJson from "@/model/data/pemorTipos.json";

export const pemorNavBar = () => {
  return (
    <nav className="flex justify-between p-4 bg-black border-b border-yellow-400">
      <Link to="/">Home</Link>
      
      <div className="flex gap-4">
        {tiposJson.map((t) => (
          <Link key={t.id} to={`/jugadores/${t.tipo}`}>
            {t.nombre}
          </Link>
        ))}
      </div>

      <Link to="/contacto">Contacto</Link>
    </nav>
  );
};