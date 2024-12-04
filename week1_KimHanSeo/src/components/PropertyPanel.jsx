import React, { useContext } from "react";
import { ElementsContext } from "../contexts/ElementContext";
import { SelectionContext } from "../contexts/SelectedContext";
import { PropertyPanelContainer } from "../StyledComponents";
const PropertyPanel = () => {
  const { elements, updateElementColor } = useContext(ElementsContext);
  const { selectedElementId } = useContext(SelectionContext);
  const selectedElement = elements.find((el) => el.id === selectedElementId);

  console.log("PropertyPanel 렌더링");

  const handleColorChange = (e) => {
    if (selectedElement) {
      updateElementColor(selectedElement.id, e.target.value);
    }
  };

  return (
    <PropertyPanelContainer>
      <h3>Properties</h3>
      {selectedElement ? (
        <div>
          <p>Selected Element: {selectedElement.name}</p>
          <input
            type="color"
            value={selectedElement.color}
            onChange={handleColorChange}
          />
        </div>
      ) : (
        <p>No element selected</p>
      )}
    </PropertyPanelContainer>
  );
};

export default PropertyPanel;
