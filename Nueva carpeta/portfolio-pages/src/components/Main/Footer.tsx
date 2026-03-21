const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <div className="text-yellow-400 font-black italic text-xl mb-4 italic">VITALITY 🐝</div>
        <p className="text-gray-600 text-sm italic">
          © {new Date().getFullYear()} Team Vitality - Hecho para el examen de DAW por Pedro Antonio.
        </p>
      </div>
    </footer>
  );
};

export default Footer;