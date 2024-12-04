// ElementBox.js
import React, { useContext } from "react";
import { SelectionContext } from "../contexts/SelectedContext";
import { ElementBoxContainer } from "../StyledComponents";

const ElementBox = React.memo(({ element }) => {
  const { selectedElementId, selectElement } = useContext(SelectionContext);
  const isSelected = selectedElementId === element.id;

  console.log(`ElementBox (${element.name}) 렌더링`);

  return (
    <ElementBoxContainer
      onClick={() => selectElement(element.id)}
      color={element.color}
      $isSelected={isSelected}
    >
      {element.name}
    </ElementBoxContainer>
  );
});

export default ElementBox;
