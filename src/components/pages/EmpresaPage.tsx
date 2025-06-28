import React from 'react';
import { Users, Award, Clock, Target } from 'lucide-react';

const EmpresaPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Sobre a GSET Comunicação Visual
          </h1>
          <p className="text-xl lg:text-2xl text-red-100 max-w-4xl mx-auto">
            Atuando no mercado de comunicação visual desde 1995, somos referência em qualidade e inovação
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Nossa História</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  A Gset Comunicação Visual Ltda é uma empresa prestadora de serviços em impressão digital (plotagem) 
                  e sinalização computadorizada, atuando no mercado desde 1995 com excelência e dedicação.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Localizada em Bom Jesus, Piauí, nossa empresa tem se destacado pela qualidade dos serviços prestados 
                  e pela constante busca por inovação tecnológica no setor de comunicação visual.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Desenvolvemos projetos personalizados que atendem às necessidades específicas de cada cliente, 
                  sempre priorizando a criatividade, qualidade e pontualidade na entrega.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Equipe GSET"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Nossos Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Qualidade</h3>
              <p className="text-gray-300">
                Compromisso com a excelência em todos os nossos serviços e produtos.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Atendimento</h3>
              <p className="text-gray-300">
                Foco no cliente com atendimento personalizado e dedicado.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Pontualidade</h3>
              <p className="text-gray-300">
                Cumprimento rigoroso de prazos e compromissos assumidos.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Inovação</h3>
              <p className="text-gray-300">
                Sempre em busca das melhores tecnologias e soluções do mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-red-500">Missão</h3>
              <p className="text-gray-300 leading-relaxed">
                Oferecer soluções criativas e eficazes em comunicação visual, 
                superando as expectativas dos clientes através de serviços de alta qualidade.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-red-500">Visão</h3>
              <p className="text-gray-300 leading-relaxed">
                Ser reconhecida como a principal referência em comunicação visual na região, 
                expandindo nossa atuação e mantendo a excelência nos serviços.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-red-500">Valores</h3>
              <p className="text-gray-300 leading-relaxed">
                Ética, transparência, compromisso com a qualidade, respeito ao cliente 
                e responsabilidade social em todas as nossas ações.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmpresaPage;