// HistoryContext.js
import React, { createContext, useState, useContext } from 'react';

const HistoryContext = createContext();

export const useHistory = () => useContext(HistoryContext);

export const HistoryProvider = ({ children }) => {
  const [historyData, setHistoryData] = useState(null); // This state holds the data you want to make global
  const [favoriteID, setFavoriteID] = useState(null); // This state holds the data you want to make global
  const [favoriteData, setFavoriteData] = useState(null); // This state holds the data you want to make global

  // Function to update historyData
  const updateHistoryData = (data) => {
    setHistoryData(data);
  };
  
  // Function to update favoriteData
  const updateFavoriteData = (data) => {
    setFavoriteData(data);
  };
  
  const updateFavoriteID = (data) => {
    setFavoriteID(data);
  };
  
  return (
    <HistoryContext.Provider value={{ historyData, updateHistoryData, favoriteData, updateFavoriteData, favoriteID, updateFavoriteID }}>
      {children}
    </HistoryContext.Provider>
  );
};
