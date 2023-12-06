import React from "react";
import Label from "./DraggableComponents/Label";
import Button from "./DraggableComponents/Button";
import Input from "./DraggableComponents/Input";

const SideBar = ({ handleDragStart, handleDragEnd }) => {
  return (
    <div className="sidebar_section">
      <Button handleDragStart={handleDragStart} handleDragEnd={handleDragEnd} />
      <Input handleDragStart={handleDragStart} handleDragEnd={handleDragEnd} />
      <Label handleDragStart={handleDragStart} handleDragEnd={handleDragEnd} />
    </div>
  );
};

export default SideBar;
