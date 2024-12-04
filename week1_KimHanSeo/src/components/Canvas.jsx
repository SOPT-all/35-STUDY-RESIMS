// Canvas.js
import React, { useContext } from "react";
import { ElementsContext } from "../contexts/ElementContext";
import ElementBox from "./ElementBox";
import { CanvasContainer } from "../StyledComponents";

const Canvas = () => {
  const { elements } = useContext(ElementsContext);

  console.log("Canvas 렌더링");

  return (
    <CanvasContainer>
      {elements.map((element) => (
        <ElementBox key={element.id} element={element} />
      ))}
    </CanvasContainer>
  );
};

export default Canvas;
