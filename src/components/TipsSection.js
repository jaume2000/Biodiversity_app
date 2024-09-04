import React from "react";

const TipsSection = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-8">
      <h2 className="text-lg font-bold mb-4">Tips for Improving Biodiversity</h2>

      {/* Usamos grid para alinear las tarjetas en columnas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="tip-card bg-gray-100 p-4 rounded flex items-center">
          {/* Imagen a la izquierda */}
          <img
            src="plant.jpg"
            alt="tip 1"
            className="w-24 h-24 object-cover rounded mr-4"
          />
          {/* Texto a la derecha */}
          <p className="text-lg">Plant native species in your garden.</p>
        </div>

        <div className="tip-card bg-gray-100 p-4 rounded flex items-center">
          {/* Imagen a la izquierda */}
          <img
            src="plant.jpg"
            alt="tip 2"
            className="w-24 h-24 object-cover rounded mr-4"
          />
          {/* Texto a la derecha */}
          <p className="text-lg">Reduce water usage to support ecosystems.</p>
        </div>

        <div className="tip-card bg-gray-100 p-4 rounded flex items-center">
          {/* Imagen a la izquierda */}
          <img
            src="plant.jpg"
            alt="tip 3"
            className="w-24 h-24 object-cover rounded mr-4"
          />
          {/* Texto a la derecha */}
          <p className="text-lg">Avoid harmful chemicals in your garden.</p>
        </div>
      </div>
    </div>
  );
};

export default TipsSection;
