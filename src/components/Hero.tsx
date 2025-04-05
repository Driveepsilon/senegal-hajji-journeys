
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-kaaba-bg bg-cover bg-center min-h-[600px] flex items-center">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="arabic mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              أَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
            </h2>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow">
            Voyages Sacrés du Sénégal
          </h1>
          
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Votre partenaire de confiance pour le Hajj et l'Umrah. Nous vous accompagnons dans ce voyage spirituel avec professionnalisme et dévouement.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white">
              <Link to="/hajj">Packages Hajj 2024</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20">
              <Link to="/umrah">Packages Umrah</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
