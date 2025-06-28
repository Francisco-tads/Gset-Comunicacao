import React from 'react';
import { ArrowLeft, Star, CheckCircle } from 'lucide-react';

type PageType = 'home' | 'empresa' | 'produtos' | 'clientes' | 'contato' | 
  'geladeiras' | 'banners' | 'adesivagem' | 'feiras' | 'parede' | 'fachadas';

interface AdesivosParadePageProps {
  setCurrentPage: (page: PageType) => void;
}

const AdesivosParedePage: React.FC<AdesivosParadePageProps> = ({ setCurrentPage }) => {
  const images = [
    {
      url: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Decoração Sala de Estar",
      description: "Adesivos decorativos modernos"
    },
    {
      url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Quarto Infantil Temático",
      description: "Personagens e temas infantis"
    },
    {
      url: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Escritório Corporativo",
      description: "Motivacionais e identidade visual"
    },
    {
      url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Cozinha Personalizada",
      description: "Adesivos temáticos para cozinha"
    },
    {
      url: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Banheiro Decorativo",
      description: "Resistente à umidade"
    },
    {
      url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Loja Comercial",
      description: "Ambientação e branding"
    }
  ];

  const applications = [
    "Residências",
    "Escritórios",
    "Lojas comerciais",
    "Consultórios",
    "Restaurantes",
    "Hotéis e pousadas"
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
            Adesivos de Parede
          </h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Transforme ambientes com adesivos decorativos de alta qualidade. 
            Soluções criativas para residências, escritórios e estabelecimentos comerciais.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Ambientes Transformados</h2>
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

      {/* Applications */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Aplicações</h2>
              <div className="space-y-4">
                {applications.map((application, index) => (
                  <div key={index} className="flex items-center bg-gray-800 p-4 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-300">{application}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Características dos Adesivos</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <strong className="text-white">Material:</strong> Vinil autocolante premium
                </div>
                <div>
                  <strong className="text-white">Aplicação:</strong> Fácil instalação sem bolhas
                </div>
                <div>
                  <strong className="text-white">Remoção:</strong> Remove sem deixar resíduos
                </div>
                <div>
                  <strong className="text-white">Durabilidade:</strong> Até 7 anos em ambiente interno
                </div>
                <div>
                  <strong className="text-white">Personalização:</strong> Qualquer design ou medida
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Renove seus Ambientes</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Solicite um projeto personalizado e transforme seus espaços com criatividade e qualidade.
          </p>
          <button
            onClick={() => setCurrentPage('contato')}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            SOLICITAR PROJETO
          </button>
        </div>
      </section>
    </div>
  );
};

export default AdesivosParedePage;