
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Home, FileCheck, MapPin } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Nos Services</h2>
          <p className="text-lg text-gray-600">
            Nous offrons une gamme complète de services pour faciliter votre voyage spirituel, 
            du départ de Dakar jusqu'à votre retour.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Plane className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Vols</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-gray-600">
                Réservation de vols directs entre Dakar et Jeddah avec des compagnies aériennes réputées.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Hébergement</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-gray-600">
                Hôtels confortables à proximité des lieux saints à La Mecque et à Médine.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Visas</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-gray-600">
                Assistance complète pour l'obtention des visas Hajj et Umrah auprès des autorités saoudiennes.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Ziyarat</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-gray-600">
                Visites guidées des sites historiques et religieux de La Mecque et de Médine.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
