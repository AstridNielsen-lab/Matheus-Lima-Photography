import React from 'react';
import { Camera, MapPin, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-16">Sobre Mim</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              Fotógrafo desde 2018, com mais de 500 eventos e ensaios realizados. 
              Minha paixão pela fotografia me permite capturar momentos únicos e transformá-los em memórias eternas.
            </p>
            <p className="text-lg">
              Além da fotografia, atuo como Assessor Parlamentar do deputado Dr. Leonidas PR 
              e sou Técnico em Mecatrônica, cursando Engenharia Elétrica pelo Instituto Federal do Paraná.
            </p>
            <div className="flex items-center gap-2 text-gold">
              <MapPin className="w-5 h-5" />
              <span>Paranavaí, PR</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <Camera className="w-8 h-8 text-gold mx-auto mb-3" />
              <h3 className="font-serif mb-2">Fotografia Sensual & Casual</h3>
              <p className="text-zinc-400">Ensaios personalizados que revelam sua essência</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg text-center">
              <Award className="w-8 h-8 text-gold mx-auto mb-3" />
              <h3 className="font-serif mb-2">Fotografia de Alimentos</h3>
              <p className="text-zinc-400">Imagens que despertam o apetite</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg text-center col-span-2">
              <Camera className="w-8 h-8 text-gold mx-auto mb-3" />
              <h3 className="font-serif mb-2">Cobertura de Eventos</h3>
              <p className="text-zinc-400">Registrando cada momento especial do seu evento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;