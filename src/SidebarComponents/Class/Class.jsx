import React, { useState } from "react";
import "./Class.css";
import ZoomMeeting from "./ZoomMeeting";
import ZoomTest from "./ZoomTest";
import RoadMap from "./RoadMap";
import TaskForm from "./TaskForm";

const Class = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [data, setData] = useState(null);

  const handleNumberClick = (id, title,zoomlink,reflink,tasklink,content) => {
    setSelectedNumber(id);
    setData({id, title,zoomlink,reflink,tasklink,content})
  };
  // console.log("setdata", data);
  // console.log("setid", selectedNumber);
  return (
    <>
      <div className="content-container">
        <div className="row">
          {/* Left side NumberComponent */}
          {selectedNumber ? (
            <ZoomMeeting data={data} />
          ) : (
            <ZoomTest />
          )}

          <RoadMap
            selectedNumber={selectedNumber}
            handleNumberClick={handleNumberClick}
          />

          {selectedNumber ? <TaskForm data={data} number={selectedNumber} /> : <ZoomTest />}
        </div>
      </div>
    </>
  );
};

export default Class;
