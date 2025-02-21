import React, { useState, useContext } from "react";
import HomeMainHeader from "./home/homeHeader";
import HomeMainActions from "./home/homeMainActions";
import HomeMainBtns from "./home/homeMainBtns";
import HomeMainFooter from "./home/homeMainFooter";

const Home = () => {
  const [selectedSection, setSelectedSection] = useState("consultasPublicas");
  const [activeComponent, setActiveComponent] = useState(""); // New state to track active component

  // Handle section selection
  const handleSelectSection = (section) => {
    setSelectedSection(section);
  };

  // Handle component selection
  const handleSelectComponent = (component) => {
    setActiveComponent(component); // Set the active component based on button click
  };

  return (
    <div className="container home">
      <div>
        <HomeMainHeader onSelectSection={handleSelectSection} />
        <HomeMainBtns selectedSection={selectedSection} onSelectComponent={handleSelectComponent} />
      </div>
      <div style={{flex:'1'}}>

      </div>
      <HomeMainFooter />
    </div>
  );
};

export default Home;
