// HistoryContext.js
import React, { createContext, useState, useContext } from 'react';

const HistoryContext = createContext();

export const useHistory = () => useContext(HistoryContext);

export const HistoryProvider = ({ children }) => {
  const [historyData, setHistoryData] = useState(null); // This state holds the data you want to make global

  // Function to update historyData
  const updateHistoryData = (data) => {
    setHistoryData(data);
  };
  
  return (
    <HistoryContext.Provider value={{ historyData, updateHistoryData }}>
      {children}
    </HistoryContext.Provider>
  );
};
