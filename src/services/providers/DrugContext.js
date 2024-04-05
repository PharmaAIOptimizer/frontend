// DrugContext.js
import React, { createContext, useState, useContext } from 'react';

const DrugContext = createContext();

export const useDrug = () => useContext(DrugContext);

export const DrugProvider = ({ children }) => {
  const [drugData, setDrugData] = useState(null); // This state holds the data you want to make global

  // Function to update drugData
  const updateDrugData = (data) => {
    setDrugData(data);
  };
  
  return (
    <DrugContext.Provider value={{ drugData, updateDrugData }}>
      {children}
    </DrugContext.Provider>
  );
};
