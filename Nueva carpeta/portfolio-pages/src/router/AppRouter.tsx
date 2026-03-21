import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import  Home  from "@/pages/Home";
import { Players } from "@/pages/players/Players";
import { PlayerDetalle } from "@/pages/players/PlayerDetalle";
import Logros from "@/pages/Logros";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="plantilla" element={<Players />} />
          <Route path="plantilla/:id" element={<PlayerDetalle />} />
          <Route path="logros" element={<Logros />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};