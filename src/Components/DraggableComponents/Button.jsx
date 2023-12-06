import React from "react";

const buttonObj = {
  htmlElement: "button",
  children: "Click me!",
  props: {
    type: "button",
    style: {
      fontSize: "12px",
      fontWeight: "bold",
      position: "absolute",
      left: "0px",
      top: "0px",
    },
  },
};

const Button = ({ handleDragStart, handleDragEnd }) => {
  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, buttonObj)}
      onDragEnd={handleDragEnd}
      className="draggable_item"
    >
      Button
    </div>
  );
};

export default Button;
