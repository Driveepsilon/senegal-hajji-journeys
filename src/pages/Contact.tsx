
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-primary/90 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">Contactez-Nous</h1>
              <p className="text-xl">
                Notre équipe est à votre disposition pour répondre à toutes vos questions
                concernant le Hajj, l'Umrah et nos services.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form and Information */}
        <ContactSection />
        
        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Nous Trouver</h2>
              
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                {/* Placeholder for Google Map */}
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                  <p>Carte Google Maps sera intégrée ici</p>
                </div>
              </div>
              
              <div className="mt-6 text-center text-gray-600">
                <p>123 Avenue Cheikh Anta Diop, Dakar, Sénégal</p>
                <p className="mt-2">À proximité de l'Université Cheikh Anta Diop de Dakar</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Office Hours */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Heures d'Ouverture</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Bureau de Dakar</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex justify-between">
                      <span>Lundi - Vendredi:</span>
                      <span>9h00 - 18h00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Samedi:</span>
                      <span>9h00 - 13h00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Dimanche:</span>
                      <span>Fermé</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Support Téléphonique</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex justify-between">
                      <span>Lundi - Vendredi:</span>
                      <span>8h00 - 20h00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Samedi:</span>
                      <span>9h00 - 17h00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Dimanche:</span>
                      <span>10h00 - 16h00</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Pour les urgences en dehors des heures d'ouverture, veuillez appeler notre numéro d'urgence: 
                  <span className="font-semibold text-primary ml-2">+221 70 123 45 67</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
