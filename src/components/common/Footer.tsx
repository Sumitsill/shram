import React from 'react';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-xl">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">SHRAM</h3>
                <p className="text-gray-400">Empowering Lives</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Bridging child welfare and education access through technology-driven solutions. 
              Together, we're building a world where every child has access to health, education, and opportunity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:contact@shram.org" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* SDG Goals */}
          <div>
            <h4 className="text-lg font-semibold mb-4">SDG Impact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">
                <span className="text-blue-400 font-medium">SDG 3:</span> Good Health & Well-being
              </li>
              <li className="text-gray-300">
                <span className="text-green-400 font-medium">SDG 4:</span> Quality Education
              </li>
              <li className="text-gray-300">
                <span className="text-orange-400 font-medium">SDG 10:</span> Reduced Inequalities
              </li>
            </ul>
            
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-gray-300 mb-2">Contact</h5>
              <p className="text-gray-400 text-sm">contact@shram.org</p>
              <p className="text-gray-400 text-sm">+91 98765 43200</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} SHRAM. All rights reserved. Built with 💙 for social impact.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;