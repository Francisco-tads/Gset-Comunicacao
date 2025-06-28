import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import ContactForm from '../ContactForm';

const ContatoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Contato e Localização
          </h1>
          <p className="text-xl lg:text-2xl text-red-100 max-w-4xl mx-auto">
            Entre em contato conosco e solicite seu orçamento personalizado
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Location */}
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Localização</h3>
              <div className="text-gray-300 space-y-2">
                <p>Rua Do Vereador Raimundo Bezerra</p>
                <p>Jd. Japão</p>
                <p>CEP: 64900-000</p>
                <p>Bom Jesus • PI</p>
              </div>
              <a
                href="https://www.google.com/maps/search/Rua+Do+Vereador+Raimundo+Bezerra,+Jd.+Japão,+Bom+Jesus+-+PI,+64900-000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
              >
                Ver no Mapa
              </a>
            </div>

            {/* Phone */}
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Telefones</h3>
              <div className="space-y-4">
                <a
                  href="tel:+5589981017105"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  (89) 98101-7105
                </a>
                <a
                  href="tel:+5511986675897"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  (11) 98667-5897 Francisco (Tim)
                </a>
              </div>
              <a
                href="https://wa.me/5511991298838"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
              >
                WhatsApp
              </a>
            </div>

            {/* Email */}
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">E-mails</h3>
              <div className="space-y-4">
                <a
                  href="mailto:francisco.veiratads@gmail.com"
                  className="block text-gray-300 hover:text-white transition-colors break-all"
                >
                  francisco.veiratads@gmail.com
                </a>
                <a
                  href="mailto:francisco.contatoportfolio@gmail.com"
                  className="block text-gray-300 hover:text-white transition-colors break-all"
                >
                  francisco.contatoportfolio@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-gray-900 p-8 rounded-lg text-center mb-16">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Horário de Funcionamento</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto text-gray-300">
              <div>
                <p className="font-semibold">Segunda a Sexta</p>
                <p>08:00 às 18:00</p>
              </div>
              <div>
                <p className="font-semibold">Sábado</p>
                <p>08:00 às 12:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Map */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">Nossa Localização</h2>
          <div className="bg-gray-900 p-4 rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.123456789!2d-44.123456789!3d-9.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDcnMjQuNCJTIDQ0wrAwNycyNC40Ilc!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContatoPage;