import React from 'react';
import "./App.css";

function Buscador({ buscador, handleChange }) {
    return (
        <div className="relative">
            <input 
                type="text" 
                placeholder="Buscar" 
                className="block appearance-none w-full bg-blue-800 border border-blue-700 text-blue-200 py-3 px-4 pr-10 rounded-lg leading-tight focus:outline-none focus:bg-blue-700 focus:border-blue-500 transition duration-300"
                value={buscador} 
                onChange={(event) => handleChange(event.target.value)}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-200">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
            </div>
        </div>
    )
}

export default Buscador;