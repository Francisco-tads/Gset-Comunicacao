import React from 'react';
import { Truck, Store, Image, Building, Palette, Zap } from 'lucide-react';

const ProdutosPage: React.FC = () => {
  const produtos = [
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Adesivagem de Frotas",
      description: "Transforme sua frota em um outdoor ambulante! Oferecemos desde adesivos simples até envelopamento completo com impressão digital.",
      features: ["Adesivos em recorte", "Envelopamento completo", "Impressão digital", "Instalação profissional"],
      image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Store className="w-12 h-12" />,
      title: "Vitrinismo / Adesivos para Vitrines",
      description: "Destaque sua loja e atraia mais clientes com adesivos personalizados para vitrines. Criatividade e impacto visual garantidos.",
      features: ["Design personalizado", "Materiais de alta qualidade", "Instalação precisa", "Efeitos especiais"],
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Image className="w-12 h-12" />,
      title: "Banners e Faixas",
      description: "Produto ideal para seu ponto de venda. Impressão em diversos materiais como lona, papel fotográfico, lona perfurada e muito mais.",
      features: ["Lona vinílica", "Papel fotográfico", "Lona perfurada", "Diversos tamanhos"],
      image: "https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Feiras e Stands",
      description: "Atendimento especializado para montadoras de stands com alta qualidade, fornecendo logotipia impressa e letras em alto relevo.",
      features: ["Logotipia impressa", "Recorte eletrônico", "Letras em alto relevo", "Montagem profissional"],
      image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Adesivos Decorativos",
      description: "Transforme ambientes com adesivos decorativos de alta qualidade. Soluções criativas para residências e empresas.",
      features: ["Adesivos de parede", "Decoração de móveis", "Ambientes corporativos", "Designs exclusivos"],
      image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Fachadas e Letreiros",
      description: "Sinalização externa de impacto para sua empresa. Letreiros luminosos, fachadas e identidade visual completa.",
      features: ["Letreiros luminosos", "Fachadas comerciais", "Sinalização externa", "Identidade visual"],
      image: "https://images.pexels.com/photos/2899714/pexels-photo-2899714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Produtos e Serviços
          </h1>
          <p className="text-xl lg:text-2xl text-red-100 max-w-4xl mx-auto">
            Soluções completas em comunicação visual para destacar sua marca no mercado
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {produtos.map((produto, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <div className="flex-1">
                  <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mb-6 text-white">
                    {produto.icon}
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6">{produto.title}</h3>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    {produto.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {produto.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="#contato"
                    className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    SOLICITAR ORÇAMENTO
                  </a>
                </div>
                <div className="flex-1">
                  <img
                    src={produto.image}
                    alt={produto.title}
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Precisa de um Projeto Personalizado?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Nossa equipe está pronta para desenvolver a solução perfeita para seu negócio. 
            Entre em contato e solicite seu orçamento sem compromisso.
          </p>
          <a
            href="#contato"
            className="inline-block bg-red-600 text-white px-12 py-4 rounded-lg font-bold text-xl hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            FALAR COM ESPECIALISTA
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProdutosPage;