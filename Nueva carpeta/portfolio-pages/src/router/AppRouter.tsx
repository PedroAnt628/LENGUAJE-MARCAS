import { BrowserRouter, Routes, Route } from "react-router-dom";
import { pemorMainLayout } from "@/layout/pemorMainLayout";
import { pemorHome } from "@/pages/pemorHome";
import { pemorPlayers } from "@/pages/players/pemorPlayers";
import { pemorPlayerDetalle } from "@/pages/players/pemorPlayerDetalle";

export const pemorAppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<pemorMainLayout />}>
          <Route index element={<pemorHome />} />
          {/* RUTA DINÁMICA POR CATEGORÍA: El :tipo captura 'starter', 'coach', etc. */}
          <Route path="jugadores/:tipo" element={<pemorPlayers />} />
          {/* RUTA DINÁMICA POR ID: Para el detalle individual */}
          <Route path="jugadores/detalle/:id" element={<pemorPlayerDetalle />} />
          <Route path="contacto" element={<div>Página Contacto</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};