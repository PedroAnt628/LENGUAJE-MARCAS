const Header = () => {
  const menuItems = [
    { name: 'Inicio', href: '#root' },
    { name: 'Historia', href: '#qsomos' },
    { name: 'Plantilla', href: '#plantilla' },
    { name: 'Logros', href: '#logros' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-sm border-b border-yellow-400/20">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black italic text-yellow-400 tracking-tighter">
          VITALITY <span className="text-white">RL</span>
        </div>
        <ul className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="text-sm font-bold uppercase hover:text-yellow-400 transition-colors">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="bg-yellow-400 text-black px-5 py-2 font-black uppercase text-xs skew-x-[-10deg] hover:bg-white transition-colors">
          Tienda
        </button>
      </nav>
    </header>
  );
};

export default Header;