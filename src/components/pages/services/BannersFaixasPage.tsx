import React from 'react';
import { ArrowLeft, Star, CheckCircle } from 'lucide-react';

type PageType = 'home' | 'empresa' | 'produtos' | 'clientes' | 'contato' | 
  'geladeiras' | 'banners' | 'adesivagem' | 'feiras' | 'parede' | 'fachadas';

interface BannersFaixasPageProps {
  setCurrentPage: (page: PageType) => void;
}

const BannersFaixasPage: React.FC<BannersFaixasPageProps> = ({ setCurrentPage }) => {
  const images = [
    {
      url: "https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Banner Promocional Loja",
      description: "Banner em lona vinílica para promoções"
    },
    {
      url: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Faixa de Inauguração",
      description: "Faixa personalizada para eventos especiais"
    },
    {
      url: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Banner Roll-up Corporativo",
      description: "Banner portátil para apresentações"
    },
    {
      url: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Faixa de Rua",
      description: "Sinalização externa resistente"
    },
    {
      url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Banner Mesh Perfurado",
      description: "Ideal para locais com vento"
    },
    {
      url: "https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Faixa Promocional",
      description: "Material fotográfico alta resolução"
    }
  ];

  const materials = [
    "Lona vinílica 440g",
    "Papel fotográfico",
    "Lona mesh perfurada",
    "Tecido oxford",
    "Vinil adesivo",
    "Canvas premium"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-red-800">
        <div className="container mx-auto px-4">
          <button
            onClick={() => setCurrentPage('home')}
            className="inline-flex items-center text-white hover:text-red-200 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar ao Início
          </button>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Banners e Faixas
          </h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Produtos ideais para seu ponto de venda e eventos. Impressão de alta qualidade 
            em diversos materiais para máximo impacto visual.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nossos Trabalhos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-gray-300">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Materiais Disponíveis</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {materials.map((material, index) => (
                  <div key={index} className="flex items-center bg-gray-800 p-4 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-300">{material}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Especificações Técnicas</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <strong className="text-white">Resolução:</strong> Até 1440 DPI
                </div>
                <div>
                  <strong className="text-white">Tamanhos:</strong> Desde 30x40cm até 5x10m
                </div>
                <div>
                  <strong className="text-white">Acabamentos:</strong> Ilhós, bastão, velcro
                </div>
                <div>
                  <strong className="text-white">Prazo:</strong> 24h a 72h úteis
                </div>
                <div>
                  <strong className="text-white">Garantia:</strong> Resistência UV por 2 anos
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Precisa de Banners ou Faixas?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Solicite seu orçamento e receba sua arte em alta qualidade no prazo combinado.
          </p>
          <button
            onClick={() => setCurrentPage('contato')}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            SOLICITAR ORÇAMENTO
          </button>
        </div>
      </section>
    </div>
  );
};

export default BannersFaixasPage;