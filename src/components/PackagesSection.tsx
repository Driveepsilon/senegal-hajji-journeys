
import React from 'react';
import PackageCard from './PackageCard';

const PackagesSection = () => {
  const hajjPackages = [
    {
      title: "Hajj Économique",
      price: "5,500,000",
      description: "Package économique idéal pour les pèlerins à budget limité",
      features: [
        "Vol Dakar-Jeddah avec escale",
        "Hôtel 3* à La Mecque (1.5km du Haram)",
        "Hôtel 3* à Médine (800m de la Mosquée)",
        "Transport terrestre en Arabie Saoudite",
        "Repas: petit-déjeuner inclus",
        "Guide religieux francophone",
        "Assistance visa Hajj"
      ],
      type: "economy",
      link: "/hajj/economy"
    },
    {
      title: "Hajj Standard",
      price: "7,200,000",
      description: "Notre package le plus populaire avec un excellent rapport qualité-prix",
      features: [
        "Vol direct Dakar-Jeddah",
        "Hôtel 4* à La Mecque (800m du Haram)",
        "Hôtel 4* à Médine (500m de la Mosquée)",
        "Transport terrestre en Arabie Saoudite",
        "Pension complète",
        "Guide religieux francophone",
        "Assistance visa Hajj",
        "Séminaires de préparation"
      ],
      type: "standard",
      link: "/hajj/standard"
    },
    {
      title: "Hajj Premium",
      price: "9,800,000",
      description: "Une expérience de Hajj luxueuse avec des services exclusifs",
      features: [
        "Vol direct Dakar-Jeddah en classe affaires",
        "Hôtel 5* à La Mecque (vue sur Haram)",
        "Hôtel 5* à Médine (proche de la Mosquée)",
        "Transport VIP en Arabie Saoudite",
        "Pension complète avec menu spécial",
        "Guide religieux personnel",
        "Assistance visa Hajj prioritaire",
        "Séminaires de préparation privés",
        "Tentes VIP à Mina"
      ],
      type: "premium",
      link: "/hajj/premium"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Nos Packages Hajj 2024</h2>
          <p className="text-lg text-gray-600">
            Découvrez nos différentes formules de Hajj adaptées à tous les budgets et à toutes les attentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hajjPackages.map((pkg, index) => (
            <PackageCard
              key={index}
              title={pkg.title}
              price={pkg.price}
              description={pkg.description}
              features={pkg.features}
              type={pkg.type as 'economy' | 'standard' | 'premium'}
              link={pkg.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
