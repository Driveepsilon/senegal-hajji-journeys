import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import BootstrapExample from '../components/BootstrapExample';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="bg-primary/90 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">À Propos de Nous</h1>
              <p className="text-xl">
                Découvrez l'histoire et la mission de Voyages Sacrés du Sénégal,
                votre partenaire de confiance pour le Hajj et l'Umrah.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Notre Histoire</h2>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  Fondée en 2010 par un groupe d'entrepreneurs sénégalais passionnés par le service aux pèlerins, 
                  Voyages Sacrés du Sénégal est née d'une vision simple mais puissante : permettre aux musulmans 
                  sénégalais d'accomplir les rituels du Hajj et de l'Umrah dans les meilleures conditions possibles.
                </p>
                
                <p>
                  Ce qui a commencé comme une petite agence accompagnant quelques dizaines de pèlerins chaque année 
                  s'est développé pour devenir l'une des principales agences de voyage spécialisées dans le Hajj et 
                  l'Umrah au Sénégal. Aujourd'hui, nous sommes fiers d'accompagner plus de 500 pèlerins chaque année.
                </p>
                
                <p>
                  Notre croissance repose sur des valeurs fortes : un service client exceptionnel, une attention méticuleuse 
                  aux détails, et un profond respect pour la dimension spirituelle de ces voyages sacrés.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Notre Mission et Nos Valeurs</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Mission</h3>
                  <p className="text-gray-700">
                    Notre mission est de faciliter l'accomplissement des rituels du Hajj et de l'Umrah pour les 
                    musulmans sénégalais en leur offrant des services de haute qualité, un accompagnement personnalisé, 
                    et une expérience spirituelle enrichissante, le tout dans le respect des traditions islamiques 
                    et des besoins individuels de chaque pèlerin.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Nos Valeurs</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Intégrité</strong> - Nous agissons avec honnêteté et transparence dans toutes nos interactions.</li>
                    <li><strong>Excellence</strong> - Nous visons l'excellence dans tous nos services et nous nous efforçons de dépasser les attentes.</li>
                    <li><strong>Respect</strong> - Nous respectons la dimension sacrée du Hajj et de l'Umrah et les besoins individuels de chaque pèlerin.</li>
                    <li><strong>Engagement</strong> - Nous sommes engagés à offrir un service personnalisé et attentif à chaque étape du voyage.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Credentials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Nos Accréditations</h2>
              
              <div className="bg-white p-8 shadow-md rounded-lg">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Voyages Sacrés du Sénégal est fière d'être agréée par les autorités compétentes pour l'organisation 
                    des voyages du Hajj et de l'Umrah:
                  </p>
                  
                  <ul>
                    <li>Agréé par le Ministère des Affaires Religieuses du Sénégal</li>
                    <li>Reconnu par le Ministère du Hajj d'Arabie Saoudite</li>
                    <li>Membre de l'Association Sénégalaise des Agences de Voyage et de Tourisme (ASAVT)</li>
                    <li>Partenaire officiel de Saudi Airlines pour les vols Hajj et Umrah</li>
                  </ul>
                  
                  <p>
                    Ces accréditations témoignent de notre professionnalisme et de notre engagement à respecter 
                    les normes les plus élevées dans l'organisation de vos voyages sacrés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Notre Équipe</h2>
              
              <p className="text-center text-gray-700 mb-10">
                Notre équipe est composée de professionnels dévoués qui partagent la même passion: 
                offrir le meilleur service possible aux pèlerins sénégalais.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Team Member 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    {/* Placeholder for team member photo */}
                  </div>
                  <h3 className="text-xl font-semibold">Amadou Diallo</h3>
                  <p className="text-primary font-medium mb-2">Directeur Général</p>
                  <p className="text-gray-600 text-sm">
                    Plus de 15 ans d'expérience dans l'organisation du Hajj et de l'Umrah.
                  </p>
                </div>
                
                {/* Team Member 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    {/* Placeholder for team member photo */}
                  </div>
                  <h3 className="text-xl font-semibold">Fatou Ndiaye</h3>
                  <p className="text-primary font-medium mb-2">Directrice des Opérations</p>
                  <p className="text-gray-600 text-sm">
                    Experte en logistique et en gestion des groupes de pèlerins.
                  </p>
                </div>
                
                {/* Team Member 3 */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    {/* Placeholder for team member photo */}
                  </div>
                  <h3 className="text-xl font-semibold">Cheikh Mbaye</h3>
                  <p className="text-primary font-medium mb-2">Guide Religieux Principal</p>
                  <p className="text-gray-600 text-sm">
                    Diplômé en études islamiques avec 20 ans d'expérience dans le guidage des pèlerins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-primary/90 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Prêt à Partir en Voyage Sacré?</h2>
              <p className="text-xl mb-8">
                Faites confiance à notre expertise pour vous accompagner dans cette expérience spirituelle unique.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Link to="/contact">Contactez-Nous</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link to="/packages">Voir Nos Packages</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
