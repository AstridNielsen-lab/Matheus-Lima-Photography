import React from 'react';
import { Camera } from 'lucide-react';

const SplashScreen = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="animate-fade-in">
        <Camera className="w-16 h-16 text-gold mb-6" />
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 text-center">
          Matheus Lima Fotografias
        </h1>
        <p className="text-gold text-lg md:text-xl text-center italic">
          "Transformando momentos em eternidade através das lentes"
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;