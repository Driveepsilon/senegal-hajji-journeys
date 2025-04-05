
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/90 sticky top-0 z-50 shadow-md backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <div className="ml-2 text-xl font-bold text-primary">
              <span className="block">Voyages Sacrés</span>
              <span className="text-sm text-secondary font-normal">Sénégal</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link to="/about" className="px-3 py-2 text-gray-700 hover:text-primary transition-colors">
              À Propos
            </Link>
            <Link to="/hajj" className="px-3 py-2 text-gray-700 hover:text-primary transition-colors">
              Hajj
            </Link>
            <Link to="/umrah" className="px-3 py-2 text-gray-700 hover:text-primary transition-colors">
              Umrah
            </Link>
            <Link to="/guide" className="px-3 py-2 text-gray-700 hover:text-primary transition-colors">
              Guide
            </Link>
            <Link to="/contact" className="px-3 py-2 text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
            <Button size="sm" variant="default" className="bg-primary text-white hover:bg-primary-dark ml-2">
              Réserver
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className="px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md"
                onClick={closeMenu}
              >
                Accueil
              </Link>
              <Link 
                to="/about" 
                className="px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md"
                onClick={closeMenu}
              >
                À Propos
              </Link>
              <Link 
                to="/hajj" 
                className="px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md"
                onClick={closeMenu}
              >
                Hajj
              </Link>
              <Link 
                to="/umrah" 
                className="px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md"
                onClick={closeMenu}
              >
                Umrah
              </Link>
              <Link 
                to="/guide" 
                className="px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md"
                onClick={closeMenu}
              >
                Guide
              </Link>
              <Link 
                to="/contact" 
                className="px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Button size="default" variant="default" className="bg-primary text-white hover:bg-primary-dark mt-2">
                Réserver
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
