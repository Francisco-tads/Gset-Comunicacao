import React from 'react';
import { ArrowLeft, Star, CheckCircle } from 'lucide-react';

type PageType = 'home' | 'empresa' | 'produtos' | 'clientes' | 'contato' | 
  'geladeiras' | 'banners' | 'adesivagem' | 'feiras' | 'parede' | 'fachadas';

interface FeirasStandsPageProps {
  setCurrentPage: (page: PageType) => void;
}

const FeirasStandsPage: React.FC<FeirasStandsPageProps> = ({ setCurrentPage }) => {
  const images = [
    {
      url: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Stand Corporativo Moderno",
      description: "Design clean com letras em alto relevo"
    },
    {
      url: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Feira de Negócios",
      description: "Logotipia impressa em alta resolução"
    },
    {
      url: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Stand Interativo",
      description: "Comunicação visual integrada"
    },
    {
      url: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Exposição Temática",
      description: "Recorte eletrônico personalizado"
    },
    {
      url: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Stand Premium",
      description: "Acabamento de alta qualidade"
    },
    {
      url: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Feira Internacional",
      description: "Padrão internacional de qualidade"
    }
  ];

  const products = [
    "Logotipia impressa",
    "Recorte eletrônico",
    "Letras em alto relevo",
    "Painéis modulares",
    "Displays promocionais",
    "Sinalização direcional"
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
            Feiras e Stands
          </h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Atendimento especializado para montadoras de stands com alta qualidade. 
            Fornecemos logotipia impressa, recorte eletrônico e letras em alto relevo.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Stands Realizados</h2>
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

      {/* Products */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Produtos para Stands</h2>
              <div className="space-y-4">
                {products.map((product, index) => (
                  <div key={index} className="flex items-center bg-gray-800 p-4 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-300">{product}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Diferenciais GSET</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <strong className="text-white">Experiência:</strong> Mais de 500 stands produzidos
                </div>
                <div>
                  <strong className="text-white">Qualidade:</strong> Materiais premium importados
                </div>
                <div>
                  <strong className="text-white">Prazo:</strong> Entrega expressa em 48h
                </div>
                <div>
                  <strong className="text-white">Suporte:</strong> Acompanhamento na montagem
                </div>
                <div>
                  <strong className="text-white">Garantia:</strong> 100% de satisfação
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Destaque-se na Próxima Feira</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Solicite um orçamento personalizado e garante o sucesso do seu stand com nossa expertise.
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

export default FeirasStandsPage;