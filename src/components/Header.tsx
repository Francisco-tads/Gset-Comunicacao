import React, { useState } from 'react';
import { Phone, Mail, Facebook, Instagram, Menu, X } from 'lucide-react';

type PageType = 'home' | 'empresa' | 'produtos' | 'clientes' | 'contato' | 
  'geladeiras' | 'banners' | 'adesivagem' | 'feiras' | 'parede' | 'fachadas';

interface HeaderProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const getNavButtonClass = (page: PageType) => {
    const baseClass = "px-6 py-3 rounded-lg font-medium transition-colors";
    const isActive = currentPage === page;
    
    if (page === 'empresa') {
      return `${baseClass} ${isActive ? 'bg-orange-500' : 'bg-orange-500 hover:bg-yellow-500'} text-white`;
    }
    
    return `${baseClass} ${isActive ? 'bg-red-600' : 'bg-red-600 hover:bg-yellow-500'} text-white`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white shadow-lg">
      {/* Top Contact Bar */}
      <div className="bg-gray-800 py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex flex-wrap items-center space-x-4">
            <a href="tel:+5589981017105" className="flex items-center hover:text-red-500 transition-colors">
              <Phone className="w-4 h-4 mr-1" />
              (89) 98101-7105
            </a>
            <a href="tel:+5511986675897" className="flex items-center hover:text-red-500 transition-colors">
              <Phone className="w-4 h-4 mr-1" />
              (11) 98667-5897 (Tim)
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="mailto:francisco.veiratads@gmail.com" className="flex items-center hover:text-red-500 transition-colors">
              <Mail className="w-4 h-4 mr-1" />
              francisco.veiratads@gmail.com
            </a>
            <div className="flex space-x-2">
              <a href="#" className="hover:text-red-500 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gray-900 py-4 px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold text-xl">
              GSET
              <span className="block text-sm font-normal">COMUNICAÇÃO VISUAL</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1">
            <button 
              onClick={() => handleNavClick('home')}
              className={getNavButtonClass('home')}
            >
              HOME
              <span className="block text-xs italic">Página Inicial</span>
            </button>
            <button 
              onClick={() => handleNavClick('empresa')}
              className={getNavButtonClass('empresa')}
            >
              EMPRESA
              <span className="block text-xs italic">Sobre Gset Comunicação Visual</span>
            </button>
            <button 
              onClick={() => handleNavClick('produtos')}
              className={getNavButtonClass('produtos')}
            >
              PRODUTOS
              <span className="block text-xs italic">e Serviços</span>
            </button>
            <button 
              onClick={() => handleNavClick('clientes')}
              className={getNavButtonClass('clientes')}
            >
              CLIENTES
              <span className="block text-xs italic">e Parceiros</span>
            </button>
            <button 
              onClick={() => handleNavClick('contato')}
              className={getNavButtonClass('contato')}
            >
              CONTATO
              <span className="block text-xs italic">e Localização</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-red-500 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-2">
            <button 
              onClick={() => handleNavClick('home')}
              className="block w-full text-left bg-red-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
            >
              HOME - Página Inicial
            </button>
            <button 
              onClick={() => handleNavClick('empresa')}
              className="block w-full text-left bg-orange-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
            >
              EMPRESA - Sobre Gset Comunicação Visual
            </button>
            <button 
              onClick={() => handleNavClick('produtos')}
              className="block w-full text-left bg-red-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
            >
              PRODUTOS e Serviços
            </button>
            <button 
              onClick={() => handleNavClick('clientes')}
              className="block w-full text-left bg-red-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
            >
              CLIENTES e Parceiros
            </button>
            <button 
              onClick={() => handleNavClick('contato')}
              className="block w-full text-left bg-red-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors"
            >
              CONTATO e Localização
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;