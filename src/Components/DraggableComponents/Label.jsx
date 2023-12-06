import React from 'react'

const labelObj = {
  htmlElement: "label",
  children: "This is label",
  props: {
    for: "unique label",
    style: {
      fontSize: "12px",
      fontWeight: "bold",
      position: "absolute",
      left: "0px",
      top: "0px",
    },
  },
}

const Label = ({ handleDragStart, handleDragEnd }) => {
  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, labelObj)}
      onDragEnd={handleDragEnd}
      className="draggable_item"
    >
      Label
    </div>
  );
};

export default Label