// SearchContext.js
import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState(null); // This state holds the data you want to make global

  // Function to update searchData
  const updateSearchData = (data) => {
    setSearchData(data);
  };

  return (
    <SearchContext.Provider value={{ searchData, updateSearchData }}>
      {children}
    </SearchContext.Provider>
  );
};
