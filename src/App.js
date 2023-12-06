import "./App.css";
import Canvas from "./Components/Canvas";
import SideBar from "./Components/SideBar";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setShowModal(true);
  };

  return (
    <div className="App">
      <Canvas
        showModal={showModal}
        setShowModal={setShowModal}
        draggedItem={draggedItem}
      />
      <SideBar
        handleDragStart={handleDragStart}
        handleDragEnd={handleDragEnd}
      />
    </div>
  );
}

export default App;
