
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PackageCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  type: 'economy' | 'standard' | 'premium';
  link: string;
}

const PackageCard: React.FC<PackageCardProps> = ({
  title,
  price,
  description,
  features,
  type,
  link
}) => {
  const getBgClass = () => {
    switch (type) {
      case 'premium':
        return 'border-secondary/50 shadow-lg';
      case 'standard':
        return 'border-primary/30';
      default:
        return '';
    }
  };

  const getButtonClass = () => {
    switch (type) {
      case 'premium':
        return 'bg-secondary hover:bg-secondary-dark text-secondary-foreground';
      case 'standard':
        return 'bg-primary hover:bg-primary-dark text-white';
      default:
        return 'bg-primary hover:bg-primary-dark text-white';
    }
  };

  return (
    <Card className={`${getBgClass()} h-full flex flex-col`}>
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <div className="mt-4">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-muted-foreground"> XOF</span>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className={`${getButtonClass()} w-full`}>
          <Link to={link}>Réserver Maintenant</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
