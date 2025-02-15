'use client';
import React from 'react';
import { Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="text-gray-600">
            Vous avez un projet en tête ? Je serais ravi d'en discuter avec vous et de voir comment je peux vous aider à le réaliser.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Carte principale */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-50 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <a 
                      href="mailto:freville.franck.dev@gmail.com" 
                      className="text-gray-800 hover:text-indigo-600 transition-colors flex items-center gap-1 group"
                    >
                      freville.franck.dev@gmail.com
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-50 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Téléphone</p>
                    <a 
                      href="tel:+33670711077" 
                      className="text-gray-800 hover:text-indigo-600 transition-colors flex items-center gap-1 group"
                    >
                      06 70 71 10 77
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-indigo-50 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Localisation</p>
                    <p className="text-gray-800">Vendin-le-Vieil, France</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte des disponibilités */}
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="h-6 w-6" />
                  <h3 className="text-xl font-semibold">Disponibilités</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-indigo-100 mb-1">Jours ouvrables</p>
                    <p className="text-lg font-medium">Lundi au Vendredi</p>
                  </div>
                  <div>
                    <p className="text-indigo-100 mb-1">Heures de travail</p>
                    <p className="text-lg font-medium">9h00 - 18h00</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-indigo-500">
                  
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}