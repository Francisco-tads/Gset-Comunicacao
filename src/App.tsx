import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import EmpresaPage from './components/pages/EmpresaPage';
import ProdutosPage from './components/pages/ProdutosPage';
import ClientesPage from './components/pages/ClientesPage';
import ContatoPage from './components/pages/ContatoPage';
import GeladeirasMoveisPage from './components/pages/services/GeladeirasMoveisPage';
import BannersFaixasPage from './components/pages/services/BannersFaixasPage';
import AdesivagemFrotasPage from './components/pages/services/AdesivagemFrotasPage';
import FeirasStandsPage from './components/pages/services/FeirasStandsPage';
import AdesivosParedePage from './components/pages/services/AdesivosParedePage';
import FachadasLetreirosPage from './components/pages/services/FachadasLetreirosPage';

type PageType = 'home' | 'empresa' | 'produtos' | 'clientes' | 'contato' | 
  'geladeiras' | 'banners' | 'adesivagem' | 'feiras' | 'parede' | 'fachadas';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'empresa':
        return <EmpresaPage />;
      case 'produtos':
        return <ProdutosPage />;
      case 'clientes':
        return <ClientesPage />;
      case 'contato':
        return <ContatoPage />;
      case 'geladeiras':
        return <GeladeirasMoveisPage setCurrentPage={setCurrentPage} />;
      case 'banners':
        return <BannersFaixasPage setCurrentPage={setCurrentPage} />;
      case 'adesivagem':
        return <AdesivagemFrotasPage setCurrentPage={setCurrentPage} />;
      case 'feiras':
        return <FeirasStandsPage setCurrentPage={setCurrentPage} />;
      case 'parede':
        return <AdesivosParedePage setCurrentPage={setCurrentPage} />;
      case 'fachadas':
        return <FachadasLetreirosPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-32">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;