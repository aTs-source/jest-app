import React, { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [tabs, setTabs] = useState([
    {
      label: "Home",
    },
    {
      label: "Settings",
    },
    {
      label: "Contact",
    },
  ]);

  return (
    <AppContext.Provider value={{ tabs, setTabs }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
