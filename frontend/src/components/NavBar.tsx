'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Accueil', id: 'accueil' },
    { label: 'À propos', id: 'a-propos' },
    { label: 'Compétences', id: 'competences' },
    { label: 'Projets', id: 'projets' },
    { label: 'Contact', id: 'contact' },
  ];

  // Fonction pour scroller vers une section
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false); // Ferme le menu mobile après un clic
  };

  // Fonction pour scroller tout en haut
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full bg-black text-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* LOGO CLIQUABLE */}
          <div className="flex items-center space-x-2">
            <button onClick={scrollToTop} className="text-xl font-bold focus:outline-none">
              Fréville Franck
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="relative py-2 group text-inherit no-underline"
              >
                <span className="relative z-10 hover:text-indigo-400 transition-colors duration-200">
                  {item.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-200"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-x-0 bg-black transition-all duration-300 ease-in-out border-t border-gray-800 
            ${isOpen ? 'top-16 opacity-100 visible' : 'top-[-490px] opacity-0 invisible'}
          `}
        >
          <div className="flex flex-col items-center space-y-6 py-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="text-lg relative group text-inherit no-underline"
              >
                <span className="relative z-10 hover:text-indigo-400 transition-colors duration-200">
                  {item.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-200"></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
