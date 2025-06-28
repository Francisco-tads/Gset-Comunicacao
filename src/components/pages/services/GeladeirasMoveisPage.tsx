import React from 'react';
import { ArrowLeft, Star, CheckCircle } from 'lucide-react';

type PageType = 'home' | 'empresa' | 'produtos' | 'clientes' | 'contato' | 
  'geladeiras' | 'banners' | 'adesivagem' | 'feiras' | 'parede' | 'fachadas';

interface GeladeirasMoveisPageProps {
  setCurrentPage: (page: PageType) => void;
}

const GeladeirasMoveisPage: React.FC<GeladeirasMoveisPageProps> = ({ setCurrentPage }) => {
  const images = [
    {
      url: "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Geladeira Personalizada - Floral",
      description: "Adesivo decorativo com padrão floral moderno"
    },
    {
      url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Móveis com Adesivos Geométricos",
      description: "Transformação completa com padrões geométricos"
    },
    {
      url: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Geladeira Vintage Retrô",
      description: "Estilo vintage com cores vibrantes"
    },
    {
      url: "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Armários Personalizados",
      description: "Adesivos para armários de cozinha"
    },
    {
      url: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Geladeira Minimalista",
      description: "Design clean e moderno"
    },
    {
      url: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Móveis Infantis",
      description: "Adesivos temáticos para quartos infantis"
    }
  ];

  const features = [
    "Material resistente à umidade",
    "Fácil aplicação e remoção",
    "Cores que não desbotam",
    "Designs exclusivos personalizados",
    "Proteção contra riscos",
    "Garantia de 2 anos"
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
            Geladeiras e Móveis
          </h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Transforme seus eletrodomésticos e móveis com adesivos personalizados de alta qualidade. 
            Crie ambientes únicos e surpreendentes com nossa linha exclusiva.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Galeria de Trabalhos</h2>
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

      {/* Features */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Características dos Nossos Adesivos</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Por que escolher nossos adesivos?</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Nossos adesivos para geladeiras e móveis são desenvolvidos com tecnologia de ponta, 
                garantindo durabilidade, facilidade de aplicação e resultados impressionantes. 
                Transforme seus ambientes com designs únicos e personalizados.
              </p>
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-300">5.0 (200+ clientes satisfeitos)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para Transformar seus Móveis?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e solicite um orçamento personalizado para seus projetos.
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

export default GeladeirasMoveisPage;