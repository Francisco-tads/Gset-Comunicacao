import React from 'react';
import { ArrowLeft, Star, CheckCircle } from 'lucide-react';

type PageType = 'home' | 'empresa' | 'produtos' | 'clientes' | 'contato' | 
  'geladeiras' | 'banners' | 'adesivagem' | 'feiras' | 'parede' | 'fachadas';

interface FachadasLetreirosPageProps {
  setCurrentPage: (page: PageType) => void;
}

const FachadasLetreirosPage: React.FC<FachadasLetreirosPageProps> = ({ setCurrentPage }) => {
  const images = [
    {
      url: "https://images.pexels.com/photos/2899714/pexels-photo-2899714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Fachada Comercial Moderna",
      description: "Letreiro luminoso com LED"
    },
    {
      url: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Restaurante Gourmet",
      description: "Identidade visual completa"
    },
    {
      url: "https://images.pexels.com/photos/2899714/pexels-photo-2899714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Loja de Roupas",
      description: "Fachada elegante e atrativa"
    },
    {
      url: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Clínica Médica",
      description: "Sinalização profissional"
    },
    {
      url: "https://images.pexels.com/photos/2899714/pexels-photo-2899714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Shopping Center",
      description: "Letreiros de grande porte"
    },
    {
      url: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Posto de Combustível",
      description: "Sinalização externa resistente"
    }
  ];

  const services = [
    "Letreiros luminosos LED",
    "Fachadas em ACM",
    "Letras caixas",
    "Totens de identificação",
    "Sinalização externa",
    "Projeto e instalação"
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
            Fachadas e Letreiros
          </h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Sinalização externa de impacto para sua empresa. Letreiros luminosos, 
            fachadas em ACM e identidade visual completa para destacar seu negócio.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Projetos Executados</h2>
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
              <h3 className="text-2xl font-bold mb-4">Tecnologia e Qualidade</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <strong className="text-white">LED:</strong> Tecnologia de última geração
                </div>
                <div>
                  <strong className="text-white">ACM:</strong> Material resistente às intempéries
                </div>
                <div>
                  <strong className="text-white">Projeto 3D:</strong> Visualização antes da execução
                </div>
                <div>
                  <strong className="text-white">Instalação:</strong> Equipe técnica especializada
                </div>
                <div>
                  <strong className="text-white">Garantia:</strong> 2 anos para equipamentos
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Destaque sua Empresa</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Solicite um projeto personalizado e torne sua fachada um marco na região.
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

export default FachadasLetreirosPage;