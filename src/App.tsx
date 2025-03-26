import React, { useState, useEffect } from 'react';
import { Camera, MapPin, Facebook, Instagram, MessageSquare, Phone } from 'lucide-react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      
      {/* Chat Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 bg-gold p-4 rounded-full shadow-lg hover:bg-gold/80 transition-all z-50"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
      
      {showChat && <ChatBot onClose={() => setShowChat(false)} />}
      
      {/* Social Links */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-40">
        <a
          href="https://www.instagram.com/matheuslimafotografias/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-gold/80 transition-all"
        >
          <Instagram className="w-6 h-6" />
        </a>
        <a
          href="https://www.facebook.com/theus2lima/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-gold/80 transition-all"
        >
          <Facebook className="w-6 h-6" />
        </a>
        <a
          href="https://api.whatsapp.com/send?1=pt_BR&phone=5544999823193"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:text-gold/80 transition-all"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

export default App;