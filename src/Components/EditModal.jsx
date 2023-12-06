import React from "react";
import { useState } from "react";
import { saveToLocalStorage, capitalizeFirstLetter } from "../utils";
import _ from "lodash";

const EditModal = ({ setShowModal, editableData, elements, setElements }) => {
  console.log("editableData", editableData);
  const [formData, setFormData] = useState({
    text: editableData?.children,
    x: parseInt(editableData?.props?.style?.left),
    y: parseInt(editableData?.props?.style?.top),
    fontSize: parseInt(editableData?.props?.style?.fontSize),
    fontWeight: editableData?.props?.style?.fontWeight,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const clonedElements = _.cloneDeep(elements);
    let tempData = _.cloneDeep(editableData);
    const newItem = {
      ...tempData,
      children: tempData?.htmlElement !== "input" && formData?.text,
      props: {
        ...tempData.props,
        value: tempData?.htmlElement === "input" && formData?.text,
        style: {
          ...tempData.props.style,
          left: `${formData?.x}px`,
          top: `${formData?.y}px`,
          fontSize: `${formData?.fontSize}px`,
          fontWeight: formData?.fontWeight,
        },
      },
    };
    clonedElements[tempData?.props?.id] = newItem;
    setElements(clonedElements);
    saveToLocalStorage("elements", clonedElements);
    setShowModal(false);
    // For example, you can send the form data to an API or perform other actions
  };

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <div className="modal">
      <div className="modal-header">
        <h2>Edit {capitalizeFirstLetter(editableData?.htmlElement)}</h2>
      </div>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="text">Text:</label>
            <input
              type="text"
              id="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="x">X</label>
            <input
              type="text"
              id="x"
              name="x"
              value={formData.x}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="y">Y</label>
            <input
              type="text"
              id="y"
              name="y"
              value={formData.y}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fontSize">Font Size</label>
            <input
              type="text"
              id="fontSize"
              name="fontSize"
              value={formData.fontSize}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fontWeight">Font Weight</label>
            <input
              type="text"
              id="fontWeight"
              name="fontWeight"
              value={formData.fontWeight}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="save-btn">
              Save Changes
            </button>
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
