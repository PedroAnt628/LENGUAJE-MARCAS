import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PmcMainLayout } from "@/layouts/pmcMainLayout";
import { PmcHome } from "@/pages/pmcHome";
import { PmcContacto } from "@/pages/pmcContacto";
import { PmcAutocaravana } from "@/pages/Autocaravanas/pmcAutocaravana";
import { PmcAutocaravanaDetalle } from "@/pages/Autocaravanas/pmcAutocaravanaDetalle";

export const PmcAppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PmcMainLayout />}>
          <Route index element={<PmcHome />} />
          <Route path="contacto" element={<PmcContacto />} />
          
          {/* LA CLAVE: Usamos :tipo para que Params lo capture */}
          <Route path="autocaravanas/:tipo" element={<PmcAutocaravana />} />

          <Route path="autocaravanas/detalle/:cod" element={<PmcAutocaravanaDetalle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};