import React from "react";

import { AppContainer } from "./StyledComponents";
import { ElementsProvider } from "./contexts/ElementContext";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import PropertyPanel from "./components/PropertyPanel";
import { SelectionProvider } from "./contexts/SelectedContext";

function App() {
  console.log("App 렌더링");
  return (
    <ElementsProvider>
      <SelectionProvider>
        <AppContainer>
          <Sidebar />
          <Canvas />
          <PropertyPanel />
        </AppContainer>
      </SelectionProvider>
    </ElementsProvider>
  );
}

export default App;
