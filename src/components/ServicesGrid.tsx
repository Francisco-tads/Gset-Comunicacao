import React from 'react';
import { ArrowRight, Plus } from 'lucide-react';

type PageType = 'home' | 'empresa' | 'produtos' | 'clientes' | 'contato' | 
  'geladeiras' | 'banners' | 'adesivagem' | 'feiras' | 'parede' | 'fachadas';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: PageType;
  isPrimary?: boolean;
}

interface ServicesGridProps {
  setCurrentPage: (page: PageType) => void;
}

const services: Service[] = [
  {
    id: 1,
    title: "Geladeiras e Móveis",
    description: "Adesivos exclusivos e personalizados para geladeiras e móveis. Crie efeitos ou combinações surpreendentes.",
    image: "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    buttonText: "VER TRABALHOS",
    buttonLink: "geladeiras",
    isPrimary: true
  },
  {
    id: 2,
    title: "Banners e Faixas",
    description: "Produto ideal para seu ponto de venda. Impressão em materiais como lona, papel fotográfico, lona perfurada, entre outros.",
    image: "https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    buttonText: "SAIBA MAIS",
    buttonLink: "banners"
  },
  {
    id: 3,
    title: "Adesivagem Frotas",
    description: "Adesive sua frota e divulgue seus produtos e empresa com um custo acessível. Adesivo em recorte e impresso (envelopar).",
    image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    buttonText: "SAIBA MAIS",
    buttonLink: "adesivagem"
  },
  {
    id: 4,
    title: "Feiras e Stands",
    description: "Atendimento a montadoras de stands com alta qualidade, fornecendo logotipia impressa em recorte eletrônico e letras em alto relevo.",
    image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    buttonText: "SAIBA MAIS",
    buttonLink: "feiras"
  },
  {
    id: 5,
    title: "Adesivos de Parede",
    description: "Transforme ambientes com adesivos decorativos de alta qualidade. Soluções criativas para residências e empresas.",
    image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    buttonText: "SAIBA MAIS",
    buttonLink: "parede"
  },
  {
    id: 6,
    title: "Fachadas e Letreiros",
    description: "Sinalização externa de impacto para sua empresa. Letreiros luminosos, fachadas e identidade visual completa.",
    image: "https://images.pexels.com/photos/2899714/pexels-photo-2899714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    buttonText: "SAIBA MAIS",
    buttonLink: "fachadas"
  }
];

const ServicesGrid: React.FC<ServicesGridProps> = ({ setCurrentPage }) => {
  const handleServiceClick = (page: PageType) => {
    setCurrentPage(page);
  };

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluções completas em comunicação visual para destacar sua marca no mercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <button
                  onClick={() => handleServiceClick(service.buttonLink)}
                  className={`inline-flex items-center px-6 py-3 rounded-lg font-bold text-white transition-all duration-300 transform hover:scale-105 ${
                    service.isPrimary
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-red-600 hover:bg-red-700'
                  }`}
                >
                  {service.isPrimary ? (
                    <Plus className="w-5 h-5 mr-2" />
                  ) : (
                    <Plus className="w-5 h-5 mr-2" />
                  )}
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;