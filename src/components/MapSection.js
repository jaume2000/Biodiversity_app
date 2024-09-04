import React from "react";

const MapSection = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Environmental Map</h2>
      
      {/* Contenedor del mapa con la imagen de fondo */}
      <div 
        className="map-container h-64 bg-cover bg-center rounded-lg" 
        style={{ backgroundImage: "url('/map.png')" }}
      ></div>

      {/* Valores ambientales debajo del mapa */}
      <div className="grid grid-cols-2 gap-2 mt-4">
        <div className="p-2 bg-gray-100 rounded">CO2: 400ppm</div>
        <div className="p-2 bg-gray-100 rounded">Humidity: 60%</div>
        <div className="p-2 bg-gray-100 rounded">Radiation: Low</div>
        <div className="p-2 bg-gray-100 rounded">AQI: Good</div>
      </div>
    </div>
  );
};

export default MapSection;
