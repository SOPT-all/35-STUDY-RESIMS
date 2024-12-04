import React, { createContext, useState } from "react";

export const ElementsContext = createContext();

export const ElementsProvider = ({ children }) => {
  const [elements, setElements] = useState([
    { id: 1, name: "박스1", color: "#E57373" },
    { id: 2, name: "박스2", color: "#FFB74D" },
    { id: 3, name: "박스3", color: "#4DD0E1" },
  ]);

  const updateElementColor = (id, color) => {
    setElements((prevElements) =>
      prevElements.map((el) => (el.id === id ? { ...el, color } : el))
    );
  };

  return (
    <ElementsContext.Provider value={{ elements, updateElementColor }}>
      {children}
    </ElementsContext.Provider>
  );
};
