import React, { useState } from "react";
import "./Class.css";
import NumberComponent from "./RoadMap";
import ZoomMeeting from "./ZoomMeeting";
import ZoomTest from "./ZoomTest";
import RoadMap from "./RoadMap";
import TaskForm from "./TaskForm";

const Class = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);

  const handleNumberClick = (number) => {
    setSelectedNumber(number);
  };

  return (
    <>
      <div className="content-container">
        <div className="row">
          {/* Left side NumberComponent */}
          {selectedNumber ? (
            <ZoomMeeting number={selectedNumber} />
          ) : (
            <ZoomTest />
          )}

          <RoadMap
            selectedNumber={selectedNumber}
            handleNumberClick={handleNumberClick}
          />

          {selectedNumber ? (
            <TaskForm number={selectedNumber} />
          ) : (
            <ZoomTest />
          )}
          
        </div>
      </div>
    </>
  );
};

export default Class;
