import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState(null);
  const [searchHistoryData, setSearchHistoryData] = useState(null);

  // Function to update searchData
  const updateSearchData = (data) => {
    setSearchData(data);
  };

  // Function to update searchHistoryData
  const updateSearchHistoryData = (data) => {
    setSearchHistoryData(data);
  };

  return (
    <SearchContext.Provider value={{ 
      searchData, 
      updateSearchData, 
      searchHistoryData, 
      updateSearchHistoryData 
    }}>
      {children}
    </SearchContext.Provider>
  );
};
