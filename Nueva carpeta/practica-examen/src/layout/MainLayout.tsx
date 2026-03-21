import QuienesSomos from "@/sections/QuienesSomos";
import Plantilla from "@/sections/Plantilla";
import Logros from "@/sections/Logros";
import Sponsors from "@/sections/Sponsors";
import Contacto from "@/sections/Contacto";
import Footer from "@/components/Main/Footer";
import Header from "@/components/Main/Header";


function App() {
  return (
    <div>
      <Header />
      <main>
        <QuienesSomos />
        <Sponsors />
        <Plantilla />
        <Logros />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
