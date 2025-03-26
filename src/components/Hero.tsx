import React from 'react';
import { Camera } from 'lucide-react';

const Hero = () => {
  return (
    <section id="início" className="min-h-screen relative flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e')] bg-cover bg-center"
        style={{ filter: 'brightness(0.3)' }}
      ></div>
      <div className="relative z-10 text-center px-4">
        <Camera className="w-12 h-12 text-gold mx-auto mb-6" />
        <h1 className="text-5xl md:text-7xl font-serif mb-4">Matheus Lima</h1>
        <p className="text-xl md:text-2xl text-gold font-light mb-8">Fotógrafo Profissional</p>
        <a 
          href="#contato"
          className="inline-block bg-gold text-black px-8 py-3 rounded-full font-medium hover:bg-gold/90 transition-colors"
        >
          Agende seu Ensaio
        </a>
      </div>
    </section>
  );
};

export default Hero;