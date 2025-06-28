import React, { useState } from 'react';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `*Solicitação de Orçamento - GSET Comunicação Visual*

*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone}

*Mensagem:*
${formData.message}

---
Enviado através do site da GSET Comunicação Visual`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp URL with the phone number and message
    const whatsappURL = `https://wa.me/5511991298838?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappURL, '_blank');
    
    // Clear the form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="py-16 bg-gray-800" id="contato">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-300">
              Solicite seu orçamento personalizado e tire suas dúvidas
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    <User className="w-5 h-5 inline mr-2" />
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    <Mail className="w-5 h-5 inline mr-2" />
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-2">
                  <Phone className="w-5 h-5 inline mr-2" />
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300"
                  placeholder="(XX) XXXXX-XXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  <MessageSquare className="w-5 h-5 inline mr-2" />
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Descreva seu projeto ou solicite um orçamento..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  <Send className="w-6 h-6 mr-3" />
                  ENVIAR MENSAGEM
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;