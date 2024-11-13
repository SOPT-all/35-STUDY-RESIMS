import React, { memo } from "react";

const Child = ({ name, tellMe }) => {
  console.log("👶자녀도 렌더링 되었습니다");

  return (
    <div style={{ border: "2px solid powerblue", padding: "10px" }}>
      <h3>👶자녀</h3>
      <p>이름: {name}</p>
      <button onClick={tellMe}>무엇을 말하고 싶어?</button>
    </div>
  );
};

export default memo(Child);
