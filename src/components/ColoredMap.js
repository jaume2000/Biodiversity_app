import React from "react";
import { FaCrown } from "react-icons/fa"; // Usaremos un icono de corona para el primer lugar

const ColoredMap = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Biodiversity Map</h2>
      
      {/* Mapa con imagen de fondo */}
      <div 
        className="map-container h-64 bg-cover bg-center rounded-lg shadow-md" 
        style={{ backgroundImage: "url('/heatmap.webp')" }}
      ></div>

      {/* Ranking */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-3">Neighborhood Ranking</h3>
        <ul className="space-y-3">
          {/* Primer lugar con icono de corona */}
          <li className="flex items-center bg-green-100 p-3 rounded-lg shadow-sm">
            <FaCrown className="text-yellow-500 mr-3" size={20} />
            <span className="text-lg font-semibold text-gray-900">1. Benimaclet</span>
            <span className="ml-auto text-lg text-green-600 font-bold">85</span>
          </li>
          {/* Segundo lugar */}
          <li className="flex items-center bg-gray-100 p-3 rounded-lg shadow-sm">
            <span className="text-lg font-semibold text-gray-900">2. Ruzafa</span>
            <span className="ml-auto text-lg text-yellow-500 font-bold">78</span>
          </li>
          {/* Tercer lugar */}
          <li className="flex items-center bg-gray-100 p-3 rounded-lg shadow-sm">
            <span className="text-lg font-semibold text-gray-900">3. El Carmen</span>
            <span className="ml-auto text-lg text-yellow-500 font-bold">70</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ColoredMap;
