import React from "react";

const TipsSection = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-8">
      <h2 className="text-lg font-bold">Tips for Improving Biodiversity</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="tip-card bg-gray-100 p-4 rounded">
          <img src="path_to_image1" alt="tip 1" className="w-full h-32 object-cover rounded" />
          <p className="mt-2">Plant native species in your garden.</p>
        </div>
        <div className="tip-card bg-gray-100 p-4 rounded">
          <img src="path_to_image2" alt="tip 2" className="w-full h-32 object-cover rounded" />
          <p className="mt-2">Reduce water usage to support ecosystems.</p>
        </div>
        <div className="tip-card bg-gray-100 p-4 rounded">
          <img src="path_to_image3" alt="tip 3" className="w-full h-32 object-cover rounded" />
          <p className="mt-2">Avoid harmful chemicals in your garden.</p>
        </div>
      </div>
    </div>
  );
};

export default TipsSection;
