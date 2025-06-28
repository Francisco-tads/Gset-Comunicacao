import React from 'react';
import { MapPin, Phone, Mail, ExternalLink, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <div className="bg-red-600 text-white px-3 py-2 rounded-lg mr-3">
                GSET
              </div>
              Comunicação Visual Adesivos
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Atuando no mercado de comunicação visual desde 1995, a Gset Comunicação Visual Ltda 
              é prestadora de serviços em impressão digital (plotagem) e sinalização computadorizada.
            </p>
            <a
              href="#empresa"
              className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors font-medium"
            >
              Leia mais <ArrowRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <MapPin className="w-6 h-6 mr-2 text-red-500" />
              Localização
            </h3>
            <div className="text-gray-300 mb-4">
              <p className="mb-2">Rua Do Vereador Raimundo Bezerra</p>
              <p className="mb-2">Jd. Japão</p>
              <p className="mb-2">CEP: 64900-000</p>
              <p className="mb-4">Bom Jesus • PI</p>
            </div>
            <a
              href="https://www.google.com/maps/search/Rua+Do+Vereador+Raimundo+Bezerra,+Jd.+Japão,+Bom+Jesus+-+PI,+64900-000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors font-medium"
            >
              Ver o mapa <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Phone className="w-6 h-6 mr-2 text-red-500" />
              Telefones (89)
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+5589981017105"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 mr-3 text-red-500" />
                (89) 98101-7105
              </a>
              <a
                href="tel:+5511986675897"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 mr-3 text-red-500" />
                (11) 98667-5897 Francisco (Tim)
              </a>
              <a
                href="mailto:francisco.veiratads@gmail.com"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 mr-3 text-red-500" />
                francisco.veiratads@gmail.com
              </a>
              <a
                href="mailto:francisco.contatoportfolio@gmail.com"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 mr-3 text-red-500" />
                francisco.contatoportfolio@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 lg:mb-0">
              © 2024 Gset Comunicação Visual - Todos os direitos reservados
            </div>
            <div className="flex items-center space-x-4 text-gray-400">
              <span>Busca Cliente Partners</span>
              <span>•</span>
              <span>By: Francisco Tads</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;