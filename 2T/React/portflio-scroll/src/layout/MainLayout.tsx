// este componente crea el frontend de la aplicacion
//parte publica de la aplicacion

import Header from "../components/main/Header";
import Qsomos from "../sections/QSomos";
import Trabajos from "../sections/Trabajos";
import Formaciones from "../sections/Formaciones";
import Contacto from "../sections/Contacto";
import Servicios from "../sections/Servicios";
import Clientes from "@/sections/Clientes";
import Footer from "../components/main/Footer";


function MainLayout(){

    return(
        <div className="min-h-screen w-full bg-gray-900 text-white">
            <Header />
            <main>
                <Qsomos />
                <Trabajos />
                <Formaciones />
                <Servicios />
                <Contacto />
                <Clientes />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout