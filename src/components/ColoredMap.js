import React from "react";

const ColoredMap = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">Biodiversity Map</h2>
      <div className="map-container h-64 bg-green-300 mt-4"></div>
      <div className="mt-4">
        <h3 className="text-md font-semibold">Ranking</h3>
        <ul>
          <li>1. Zone A: 85</li>
          <li>2. Zone B: 78</li>
          <li>3. Zone C: 70</li>
        </ul>
      </div>
    </div>
  );
};

export default ColoredMap;
