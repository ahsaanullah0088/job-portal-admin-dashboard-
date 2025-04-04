import { createContext, useState } from "react";

// 1. First create the context
const AppContext = createContext();

// 2. Create the Provider component
const AppContextProvider = (props) => {
  const [searchFilter , setSearchFilter] = useState({
    title: '',
    location:'',
  });
  const [isSearched , setIsSearched] = useState(false)
  const value = {
    setSearchFilter, searchFilter,
    isSearched , setIsSearched
  }
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

// 3. Properly export both the context and provider
export { AppContext, AppContextProvider };