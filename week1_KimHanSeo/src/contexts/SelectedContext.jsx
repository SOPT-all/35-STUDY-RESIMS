import React, { createContext, useState } from "react";

export const SelectionContext = createContext();

export const SelectionProvider = ({ children }) => {
  const [selectedElementId, setSelectedElementId] = useState(null);

  const selectElement = (id) => {
    setSelectedElementId(id);
  };

  return (
    <SelectionContext.Provider value={{ selectedElementId, selectElement }}>
      {children}
    </SelectionContext.Provider>
  );
};
