import React from 'react';
import HeroCarousel from '../HeroCarousel';
import ServicesGrid from '../ServicesGrid';
import CallToAction from '../CallToAction';
import ContactForm from '../ContactForm';

type PageType = 'home' | 'empresa' | 'produtos' | 'clientes' | 'contato' | 
  'geladeiras' | 'banners' | 'adesivagem' | 'feiras' | 'parede' | 'fachadas';

interface HomePageProps {
  setCurrentPage: (page: PageType) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div>
      <HeroCarousel setCurrentPage={setCurrentPage} />
      <ServicesGrid setCurrentPage={setCurrentPage} />
      <CallToAction />
      <ContactForm />
    </div>
  );
};

export default HomePage;