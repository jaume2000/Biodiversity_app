import React, { useState, useEffect } from "react";

const BiodiversityScore = ({ targetScore }) => {
  const [score, setScore] = useState(0);

  // Animación para contar desde 0 hasta el score objetivo
  useEffect(() => {
    let currentScore = 0;
    const increment = Math.ceil(targetScore / 100); // Incremento gradual para la animación
    const interval = setInterval(() => {
      currentScore += increment;
      if (currentScore >= targetScore) {
        setScore(targetScore);
        clearInterval(interval);
      } else {
        setScore(currentScore);
      }
    }, 30); // Intervalo rápido para una animación suave

    return () => clearInterval(interval);
  }, [targetScore]);

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 p-10 rounded-lg shadow-lg text-center">
      <h2 className="text-4xl font-extrabold text-white mb-4">Biodiversity Score</h2>
      
      {/* Contenedor del score */}
      <div className="flex justify-center items-center">
        <div className="relative">
          <span className="text-9xl font-bold text-white">
            {score}
          </span>
        </div>
      </div>

      {/* Barra de progreso */}
      <div className="mt-8">
        <div className="relative pt-1">
          <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-blue-200">
            <div
              style={{ width: `${score}%` }} // La anchura de la barra es proporcional al score
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-100"
            ></div>
          </div>
        </div>
      </div>

      <p className="text-lg text-white mt-4">
        Your current biodiversity score based on the environmental data.
      </p>
    </div>
  );
};

export default BiodiversityScore;
