
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  year: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Moustapha Diop",
    year: "Hajj 2023",
    text: "Un service exceptionnel et un accompagnement spirituel de qualité. Nos guides étaient très compétents et patients avec tous les pèlerins.",
    rating: 5
  },
  {
    name: "Aissatou Sow",
    year: "Umrah 2022",
    text: "J'ai beaucoup apprécié l'organisation impeccable et les hôtels situés à proximité de la Mosquée Sacrée. Une expérience inoubliable.",
    rating: 5
  },
  {
    name: "Ibrahima Fall",
    year: "Hajj 2023",
    text: "Voyages Sacrés a rendu notre Hajj facile et agréable. Les séminaires de préparation nous ont beaucoup aidés à comprendre les rituels.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Témoignages</h2>
          <p className="text-lg text-gray-600">
            Découvrez ce que nos pèlerins disent de leur expérience avec Voyages Sacrés du Sénégal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? 'text-secondary fill-secondary' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.text}"</p>
                <div className="mt-auto">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.year}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
