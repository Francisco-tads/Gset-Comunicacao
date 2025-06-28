import React from 'react';
import { FileText, Phone, Mail } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-red-800">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Precisando de um projeto personalizado e exclusivo?
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed">
            A Gset Comunicação Visual projeta e desenvolve a melhor imagem para seu negócio, 
            produto ou serviço. Solicite agora um orçamento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contato"
              className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <FileText className="w-6 h-6 mr-3" />
              SOLICITAR ORÇAMENTO
            </a>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+5589981017105"
                className="inline-flex items-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                (89) 98101-7105
              </a>
              
              <a
                href="mailto:francisco.veiratads@gmail.com"
                className="inline-flex items-center bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-red-600 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                E-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;