import React from 'react';
import { ArrowLeft, Star, CheckCircle } from 'lucide-react';

type PageType = 'home' | 'empresa' | 'produtos' | 'clientes' | 'contato' | 
  'geladeiras' | 'banners' | 'adesivagem' | 'feiras' | 'parede' | 'fachadas';

interface AdesivagemFrotasPageProps {
  setCurrentPage: (page: PageType) => void;
}

const AdesivagemFrotasPage: React.FC<AdesivagemFrotasPageProps> = ({ setCurrentPage }) => {
  const images = [
    {
      url: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Envelopamento Completo Caminhão",
      description: "Transformação total com identidade visual"
    },
    {
      url: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Adesivagem Van Comercial",
      description: "Comunicação visual para delivery"
    },
    {
      url: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Frota de Ônibus",
      description: "Padronização visual da frota"
    },
    {
      url: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Carro Executivo",
      description: "Adesivagem discreta e elegante"
    },
    {
      url: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Motocicleta Delivery",
      description: "Identificação para motoboys"
    },
    {
      url: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Frota Corporativa",
      description: "Identidade visual unificada"
    }
  ];

  const services = [
    "Envelopamento total",
    "Adesivagem parcial",
    "Recorte eletrônico",
    "Impressão digital",
    "Instalação profissional",
    "Manutenção e reparo"
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
            Adesivagem de Frotas
          </h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Transforme sua frota em um outdoor ambulante! Aumente a visibilidade da sua empresa 
            com adesivagem profissional e de alta qualidade.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Projetos Realizados</h2>
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

      {/* Services */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossos Serviços</h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center bg-gray-800 p-4 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Vantagens da Adesivagem</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <strong className="text-white">ROI Comprovado:</strong> Retorno do investimento em 30 dias
                </div>
                <div>
                  <strong className="text-white">Alcance:</strong> Até 70.000 visualizações por mês
                </div>
                <div>
                  <strong className="text-white">Durabilidade:</strong> Material com garantia de 5 anos
                </div>
                <div>
                  <strong className="text-white">Custo-benefício:</strong> Menor custo por impressão
                </div>
                <div>
                  <strong className="text-white">Flexibilidade:</strong> Remoção sem danos à pintura
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Transforme sua Frota em Mídia Móvel</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Solicite uma visita técnica gratuita e descubra como aumentar suas vendas com adesivagem profissional.
          </p>
          <button
            onClick={() => setCurrentPage('contato')}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            AGENDAR VISITA TÉCNICA
          </button>
        </div>
      </section>
    </div>
  );
};

export default AdesivagemFrotasPage;