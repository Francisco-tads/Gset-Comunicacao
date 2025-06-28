import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonAction: () => void;
}

interface HeroCarouselProps {
  setCurrentPage: (page: 'home' | 'empresa' | 'produtos' | 'clientes' | 'contato' | 
    'geladeiras' | 'banners' | 'adesivagem' | 'feiras' | 'parede' | 'fachadas') => void;
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Adesivagem de Frotas",
      description: "Faça de sua frota ou seu veículo um outdoor ambulante! Pode-se utilizar a comunicação mais simples (adesivo ou recorte) ou mais completo (envelopamento com adesivo impresso). Certeza para aumento de vendas e divulgação da sua empresa ou negócio com um ótimo custo.",
      image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      buttonText: "SAIBA MAIS",
      buttonAction: () => setCurrentPage('produtos')
    },
    {
      id: 2,
      title: "Vitrinismo / Adesivos para Vitrines",
      description: "Destaque sua loja e atraia clientes com adesivos personalizados para vitrines. Criatividade e impacto visual para seu negócio.",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      buttonText: "SAIBA MAIS",
      buttonAction: () => setCurrentPage('produtos')
    },
    {
      id: 3,
      title: "Banners e Faixas",
      description: "Produto ideal para seu ponto de venda. Impressão em materiais como lona, papel fotográfico, lona perfurada, entre outros.",
      image: "https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      buttonText: "SAIBA MAIS",
      buttonAction: () => setCurrentPage('produtos')
    },
    {
      id: 4,
      title: "Plotagem e Sinalização",
      description: "Serviços de plotagem de alta qualidade para projetos arquitetônicos, engenharia e sinalização interna e externa.",
      image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      buttonText: "SAIBA MAIS",
      buttonAction: () => setCurrentPage('produtos')
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen bg-gray-900 overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex h-full">
              {/* Content */}
              <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
                <div className="max-w-2xl text-white">
                  <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-red-500">
                    {slide.title}
                  </h2>
                  <p className="text-lg lg:text-xl mb-8 leading-relaxed text-gray-300">
                    {slide.description}
                  </p>
                  <button
                    onClick={slide.buttonAction}
                    className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
              
              {/* Image */}
              <div className="flex-1 relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900 opacity-50"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-red-500 scale-125' : 'bg-gray-400 hover:bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;