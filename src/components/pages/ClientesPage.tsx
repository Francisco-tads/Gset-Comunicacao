import React from 'react';
import { Star, Quote, Building2, Users, Award, TrendingUp } from 'lucide-react';

const ClientesPage: React.FC = () => {
  const testimonials = [
    {
      name: "João Silva",
      company: "Transportadora Silva & Cia",
      text: "A GSET transformou nossa frota! O trabalho de adesivagem ficou perfeito e já notamos um aumento significativo na visibilidade da nossa empresa.",
      rating: 5,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
    },
    {
      name: "Maria Santos",
      company: "Loja Bella Moda",
      text: "Os adesivos para vitrine ficaram lindos! Aumentaram muito o movimento na loja. Recomendo a GSET para todos os comerciantes.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
    },
    {
      name: "Carlos Oliveira",
      company: "Construtora Oliveira",
      text: "Trabalho impecável! A sinalização da nossa obra ficou profissional e chamou a atenção de muitos clientes. Parceria de longa data garantida!",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1"
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "Clientes Atendidos" },
    { icon: <Building2 className="w-8 h-8" />, number: "1000+", label: "Projetos Realizados" },
    { icon: <Award className="w-8 h-8" />, number: "29", label: "Anos de Experiência" },
    { icon: <TrendingUp className="w-8 h-8" />, number: "98%", label: "Satisfação dos Clientes" }
  ];

  const clientLogos = [
    "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1",
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1",
    "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1",
    "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1",
    "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1",
    "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&dpr=1"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Clientes e Parceiros
          </h1>
          <p className="text-xl lg:text-2xl text-red-100 max-w-4xl mx-auto">
            Conheça quem confia na GSET para suas soluções em comunicação visual
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-red-500 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">O que nossos clientes dizem</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="w-8 h-8 text-red-500 mb-4" />
                  <p className="text-gray-300 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Nossos Parceiros</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientLogos.map((logo, index) => (
              <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300">
                <img
                  src={logo}
                  alt={`Cliente ${index + 1}`}
                  className="max-w-full max-h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Seja Nosso Próximo Parceiro
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Junte-se aos nossos clientes satisfeitos e descubra como a GSET pode 
            transformar a comunicação visual do seu negócio.
          </p>
          <a
            href="#contato"
            className="inline-block bg-red-600 text-white px-12 py-4 rounded-lg font-bold text-xl hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            INICIAR PARCERIA
          </a>
        </div>
      </section>
    </div>
  );
};

export default ClientesPage;