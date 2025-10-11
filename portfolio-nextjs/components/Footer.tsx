import React from 'react';

const Footer = () => {
  return (
    <footer className="text-text-light py-8 px-6 mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">Made by Ashif<span className="text-red-500">❤️</span></p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm hover:text-neon-cyan transition duration-300">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-neon-cyan transition duration-300">Terms of Service</a>
            <a href="#" className="text-sm hover:text-neon-cyan transition duration-300">Sitemap</a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
          <p>© 2025 Ashif. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;