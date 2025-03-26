import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ana Silva',
      text: 'O Matheus tem um olhar único! Meu ensaio ficou incrível, super profissional e me deixou super à vontade.',
      rating: 5
    },
    {
      name: 'João Santos',
      text: 'Contratei para a cobertura do meu casamento e não poderia estar mais satisfeito. Cada momento foi registrado com perfeição!',
      rating: 5
    },
    {
      name: 'Restaurante Sabor & Arte',
      text: 'As fotos dos nossos pratos ficaram espetaculares! O Matheus sabe exatamente como valorizar cada detalhe.',
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Depoimentos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-zinc-900 p-8 rounded-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              <p className="mb-4 text-zinc-300">{testimonial.text}</p>
              <p className="font-serif text-gold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;