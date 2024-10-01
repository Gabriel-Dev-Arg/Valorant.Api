import React from 'react';
import "./App.css";

function Header() {
  return (
    <header className="bg-gray-900 text-white h-20 fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 h-full flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/1280px-Valorant_logo_-_pink_color_version.svg.png" 
            alt="Valorant Logo" 
            className="h-10 mr-4"
          />
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-red-500 transition duration-300 text-lg font-medium">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition duration-300 text-lg font-medium">
                Agentes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition duration-300 text-lg font-medium">
                Mapas
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500 transition duration-300 text-lg font-medium">
                Armas
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;