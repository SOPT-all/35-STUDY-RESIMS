import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FiberDemo from "./FiberDemo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FiberDemo></FiberDemo>
    </>
  );
}

export default App;
