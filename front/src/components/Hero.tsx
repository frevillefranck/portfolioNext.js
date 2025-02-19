'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  // Fonction pour scroller vers la section contact
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Image d'arrière-plan optimisée */}
      <Image
        src="/images/hero.webp"
        alt="Développeur Web Freelance"
        fill
        priority
        className="object-cover object-center absolute inset-0 -z-10"
      />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black bg-opacity-70 -z-10"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-white">
          Développeur Web Freelance
        </h1>
        <p className="text-xl lg:text-2xl mb-12 max-w-2xl mx-auto text-gray-200">
          Je vous accompagne dans la création de sites web modernes et performants, adaptés à vos besoins.
        </p>
        
        {/* Bouton pour scroller vers Contact */}
        <button
          onClick={scrollToContact}
          className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
        >
          Démarrons un projet
        </button>

        {/* Flèche animée */}
        <div className="mt-16 animate-bounce text-white">
          <ArrowDown className="mx-auto h-8 w-8" />
        </div>
      </div>
    </section>
  );
}
