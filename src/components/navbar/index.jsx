import { Link } from "react-router-dom";
import { useState } from "react";
import { Search, Menu } from "lucide-react"; 

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-brand-background w-full shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-3 gap-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="./codestudio_logo.png" alt="<codestudio/>" className="h-20 w-auto rounded-xl" />
        </Link>

        <div className="flex-1 w-full md:max-w-lg relative order-3 md:order-0">
          <input
            type="text"
            placeholder="Pesquisar..."
            className="w-full px-4 py-2 border-2 bg-brand-text border-brand-accent rounded-full focus:outline-none focus:ring-2 focus:ring-brand-accent"
          />
          <Search className="absolute right-3 top-2.5 text-brand-accent" size={22} />
        </div>

        {/* Ícones do lado direito - agora só menu mobile */}
        <div className="flex items-center gap-4 order-2 md:order-0">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="p-2 md:hidden text-brand-blue hover:bg-gray-200 rounded-lg"
          >
            <Menu size={26} />
            <span className="sr-only">Abrir menu</span>
          </button>
        </div>
      </div>

      {/* MENU DESKTOP */}
      <nav className="bg-brand-blue-dark shadow-inner shadow-brand-blue-dark/50">
        <div className="max-w-7xl mx-auto">
          <ul className="hidden md:flex justify-center text-brand-accent font-bold text-lg">
            <li><Link to="/" className="px-4 py-3 block hover:bg-brand-purple transition hover:text-amber-50">HOME</Link></li>
            <li><Link to="/about" className="px-4 py-3 block hover:bg-brand-purple transition hover:text-amber-50">SOBRE</Link></li>
            <li><Link to="/html" className="px-4 py-3 block hover:bg-brand-purple transition hover:text-amber-50">HTML</Link></li>
            <li><Link to="/css" className="px-4 py-3 block hover:bg-brand-purple transition hover:text-amber-50">CSS</Link></li>
            <li><Link to="/javascript" className="px-4 py-3 block hover:bg-brand-purple transition hover:text-amber-50">JAVASCRIPT</Link></li>
            <li><Link to="/react" className="px-4 py-3 block hover:bg-brand-purple transition hover:text-amber-50">REACT</Link></li>
             <li><Link to="/angular" className="px-4 py-3 block hover:bg-brand-purple transition hover:text-amber-50">ANGULAR</Link></li>
              <li><Link to="/sql" className="px-4 py-3 block hover:bg-brand-purple transition hover:text-amber-50">SQL</Link></li>
          </ul>
        </div>
      </nav>

      {/* MENU MOBILE */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-brand-blue md:hidden z-40 shadow-xl">
          <ul className="flex flex-col items-center space-y-2 p-4">
            <li><Link onClick={() => setIsMenuOpen(false)} className="text-amber-50 text-xl font-bold block py-2 w-full text-center hover:bg-brand-blue-dark" to="/">HOME</Link></li>
            <li><Link onClick={() => setIsMenuOpen(false)} className="text-amber-50 text-xl font-bold block py-2 w-full text-center hover:bg-brand-blue-dark" to="/about">SOBRE</Link></li>
            <li><Link onClick={() => setIsMenuOpen(false)} className="text-amber-50 text-xl font-bold block py-2 w-full text-center hover:bg-brand-blue-dark" to="/html">HTML</Link></li>
            <li><Link onClick={() => setIsMenuOpen(false)} className="text-amber-50 text-xl font-bold block py-2 w-full text-center hover:bg-brand-blue-dark" to="/css">CSS</Link></li>
            <li><Link onClick={() => setIsMenuOpen(false)} className="text-amber-50 text-xl font-bold block py-2 w-full text-center hover:bg-brand-blue-dark" to="/javascript">JAVASCRIPT</Link></li>
            <li><Link onClick={() => setIsMenuOpen(false)} className="text-amber-50 text-xl font-bold block py-2 w-full text-center hover:bg-brand-blue-dark" to="/react">REACT</Link></li>
            <li><Link onClick={() => setIsMenuOpen(false)} className="text-amber-50 text-xl font-bold block py-2 w-full text-center hover:bg-brand-blue-dark" to="/angular">ANGULAR</Link></li>
            <li><Link onClick={() => setIsMenuOpen(false)} className="text-amber-50 text-xl font-bold block py-2 w-full text-center hover:bg-brand-blue-dark" to="/sql">SQL</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};
