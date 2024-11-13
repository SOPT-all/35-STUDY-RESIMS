import { useState } from "react";
import ListItem from "./ListItem";

const Window = () => {
  const [dummy, _] = useState(() => new Array(10000).fill(0));
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        상태 증가
      </button>
      <div>상태 값: {count}</div>
      {dummy.map((_, index) => (
        <ListItem key={index} order={index} />
      ))}
    </>
  );
};

export default Window;