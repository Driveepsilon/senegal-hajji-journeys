
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Book, Users, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">À Propos de Nous</h2>
          <p className="text-lg text-gray-600">
            Voyages Sacrés du Sénégal est une agence spécialisée dans l'organisation des voyages pour le Hajj et l'Umrah,
            avec plus de 10 ans d'expérience au service des pèlerins sénégalais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Book className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expertise</h3>
            <p className="text-gray-600">
              Notre équipe possède une connaissance approfondie des rituels du Hajj et de l'Umrah, ainsi que des 
              procédures administratives nécessaires.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Accompagnement</h3>
            <p className="text-gray-600">
              Des guides religieux expérimentés vous accompagnent tout au long de votre voyage pour vous offrir 
              conseils et assistance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Accréditation</h3>
            <p className="text-gray-600">
              Nous sommes agréés par le Ministère des Affaires Religieuses du Sénégal et les autorités saoudiennes
              pour l'organisation des pèlerinages.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white">
            <Link to="/about">En Savoir Plus</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
