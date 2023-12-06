import React from "react";

const inputObj = {
  htmlElement: "input",
  children: null,
  props: {
    type: "text",
    value:null,
    placeholder: "Enter",
    style: {
      fontSize: "12px",
      fontWeight: "bold",
      position: "absolute",
      left: "0px",
      top: "0px",
    },
  },
};

const Input = ({ handleDragStart, handleDragEnd }) => {
  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, inputObj)}
      onDragEnd={handleDragEnd}
      className="draggable_item"
    >
      Input
    </div>
  );
};

export default Input;
