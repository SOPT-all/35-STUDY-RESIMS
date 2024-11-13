import React from "react";

const ListItem = ({ order, style }) => {
  return (
    <div style={{ 
      ...style, 
      padding: "10px", 
      borderBottom: "1px solid #ccc", 
      display: "flex", 
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: order % 2 === 0 ? "#f9f9f9" : "#fff" 
    }}>
      <span>Item {order + 1}</span>
    </div>
  );
};

export default ListItem;