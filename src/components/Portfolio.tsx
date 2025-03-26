import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    {
      category: 'Sensual & Casual',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04',
      alt: 'Ensaio feminino artístico'
    },
    {
      category: 'Gastronomia',
      image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327',
      alt: 'Fotografia de prato gourmet'
    },
    {
      category: 'Eventos',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
      alt: 'Cobertura de evento'
    }
  ];

  return (
    <section id="portfólio" className="py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Portfólio</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img 
                src={item.image} 
                alt={item.alt}
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-2xl font-serif text-gold">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;