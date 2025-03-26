import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Contato</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif mb-6">Entre em Contato</h3>
            <div className="space-y-4">
              <a 
                href="https://api.whatsapp.com/send?1=pt_BR&phone=5544999823193" 
                className="flex items-center gap-3 text-gold hover:text-gold/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-5 h-5" />
                <span>(44) 99982-3193</span>
              </a>
              <div className="flex items-center gap-3 text-gold">
                <MapPin className="w-5 h-5" />
                <span>Paranavaí, PR</span>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">Nome</label>
              <input 
                type="text" 
                id="name"
                className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input 
                type="email" 
                id="email"
                className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Mensagem</label>
              <textarea 
                id="message"
                rows={4}
                className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-2 focus:outline-none focus:border-gold"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="bg-gold text-black px-8 py-3 rounded-full font-medium hover:bg-gold/90 transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;