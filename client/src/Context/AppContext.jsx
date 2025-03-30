import { createContext } from "react";

// 1. First create the context
const AppContext = createContext();

// 2. Create the Provider component
const AppContextProvider = (props) => {
  const value = {};
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

// 3. Properly export both the context and provider
export { AppContext, AppContextProvider };