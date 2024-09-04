import React from "react";
import BiodiversityScore from "./components/BiodiversityScore";
import MapSection from "./components/MapSection";
import Statements from "./components/Statements";
import ColoredMap from "./components/ColoredMap";
import EvolutionChart from "./components/EvolutionChart";
import TipsSection from "./components/TipsSection";

function App() {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Your Biodiversity Dashboard</h1>
      </header>

      <BiodiversityScore targetScore={85} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <MapSection />
        <Statements />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <ColoredMap />
        <EvolutionChart />
      </div>

      <TipsSection />
    </div>
  );
}

export default App;
