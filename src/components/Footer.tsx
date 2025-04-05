
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">Voyages Sacrés</h2>
            <p className="mb-4 text-white/80">
              Votre partenaire de confiance pour le Hajj et l'Umrah depuis 2010. Agréé par le Ministère des Affaires Religieuses du Sénégal.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-secondary" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-secondary" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">Liens Rapides</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-secondary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-secondary transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/hajj" className="text-white/80 hover:text-secondary transition-colors">
                  Hajj Packages
                </Link>
              </li>
              <li>
                <Link to="/umrah" className="text-white/80 hover:text-secondary transition-colors">
                  Umrah Packages
                </Link>
              </li>
              <li>
                <Link to="/guide" className="text-white/80 hover:text-secondary transition-colors">
                  Guide de Préparation
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">Services</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/visa" className="text-white/80 hover:text-secondary transition-colors">
                  Assistance Visa
                </Link>
              </li>
              <li>
                <Link to="/hajj" className="text-white/80 hover:text-secondary transition-colors">
                  Packages Hajj
                </Link>
              </li>
              <li>
                <Link to="/umrah" className="text-white/80 hover:text-secondary transition-colors">
                  Packages Umrah
                </Link>
              </li>
              <li>
                <Link to="/guide" className="text-white/80 hover:text-secondary transition-colors">
                  Séminaires de Préparation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-secondary transition-colors">
                  Support 24/7
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white/80">123 Avenue Cheikh Anta Diop, Dakar, Sénégal</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-secondary" />
                <span className="text-white/80">+221 78 123 45 67</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-secondary" />
                <span className="text-white/80">info@voyagessacres.sn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-white/60 text-sm">
          <p>© {currentYear} Voyages Sacrés Sénégal. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
