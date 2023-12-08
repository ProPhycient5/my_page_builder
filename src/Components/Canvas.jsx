import React from "react";
import { useState, useEffect } from "react";
import _ from "lodash";
import {
  getFromLocalStorage,
  saveToLocalStorage,
  downloadJsonFile,
} from "../utils";
import EditModal from "./EditModal.jsx";

const Canvas = ({ showModal, setShowModal, draggedItem }) => {
  const [elements, setElements] = useState({});
  const [selectedNode, setSelectedNode] = useState(null);
  const [editableData, setEditableData] = useState({});

  useEffect(() => {
    const storedElements = getFromLocalStorage("elements") || {};
    setElements(storedElements);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      console.log("selectedNode_keydown", selectedNode, e.key);
      let clonedElements = _.cloneDeep(elements);
      if (e.key === "Delete" && selectedNode) {
        delete clonedElements[selectedNode];
        setElements(clonedElements);
        saveToLocalStorage("elements", clonedElements);
        setSelectedNode(null);
      } else if (e.key === "Enter" && selectedNode) {
        setShowModal(true);
        setEditableData(clonedElements[selectedNode]);
      }
    };

    // Add event listener to the whole document
    document.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedNode]);

  const handleDrop = (e) => {
    console.log("event_drop", e);
    const uniqueId = Math.random().toString(36).substring(7);
    e.preventDefault();
    if (draggedItem) {
      const clonedElements = _.cloneDeep(elements); // Deep clone of elements state
      const newItem = {
        ...draggedItem,
        props: {
          ...draggedItem.props,
          id: uniqueId,
          style: {
            ...draggedItem.props.style,
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
          },
        },
      };

      // let tempData = _.cloneDeep(newItem);
      setEditableData(newItem); //setting for sending to Modal
      clonedElements[uniqueId] = newItem; // Update the cloned elements object with the new item
      setElements(clonedElements); // Update the state with the modified cloned object
      saveToLocalStorage("elements", clonedElements);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleElementDragStart = (e, element) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(element));
  };

  const handleClick = (event, id) => {
    console.log("event_click", event);
    setSelectedNode(id);
  };

  return (
    <div
      className="canvas_section"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <button
        className="export-button"
        onClick={() => downloadJsonFile(elements)}
      >
        Export JSON
      </button>

      {Object.entries(elements).map(([key, value]) =>
        React.createElement(
          value.htmlElement,
          {
            key: key,
            id: key,
            draggable: true, // Apply draggable attribute
            className: selectedNode === key && "selected_node",
            onDragStart: (e) => handleElementDragStart(e, value),
            onClick: (e) => handleClick(e, key),
            style: value.props.style, // Include custom style from the dropped item
            ...value.props, // Include other props if needed
          },
          value.htmlElement === "input" ? null : value.children
        )
      )}
      {showModal && (
        <EditModal
          setShowModal={setShowModal}
          editableData={editableData}
          elements={elements}
          setElements={setElements}
        />
      )}
    </div>
  );
};

export default Canvas;
