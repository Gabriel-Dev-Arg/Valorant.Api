import React from 'react';
import "./App.css";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/1280px-Valorant_logo_-_pink_color_version.svg.png" 
                            alt="Valorant Logo" 
                            className="h-8 mb-2"
                        />
                        <p className="text-sm text-gray-400">© 2024 Riot Games, Inc. Todos los derechos reservados.</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-8">
                        <div className="mb-4 md:mb-0">
                            <h3 className="font-bold text-lg mb-2">Enlaces rápidos</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-red-500 transition duration-300">Inicio</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-red-500 transition duration-300">Agentes</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-red-500 transition duration-300">Mapas</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-red-500 transition duration-300">Armas</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-2">Síguenos</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-red-500 transition duration-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-red-500 transition duration-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-red-500 transition duration-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;