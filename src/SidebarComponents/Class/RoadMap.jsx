import React from "react";
import ClassData from "./ClassData";

const RoadMap = ({ selectedNumber, handleNumberClick }) => {
  return (
    <>
      <div className="col-xl-4 col-lg-7">
        <div className="road-cards shadow mb-4 mt-3">
          <div className="card-header py-3 ps-3">
            <h2 className="class-tittle">Road Map</h2>
          </div>
          
          <div className="card-body">
            {/* Right side list of numbers */}
            {ClassData.map((data,index) => {
              return <span
                key={index +1}
                className={`number-item ${
                  selectedNumber === data.id ? "selected" : ""
                } ${data.id >= 10 ? "last" : ""}`}
                onClick={() => handleNumberClick(data.id,data.title,data.zoomlink,data.reflink,data.tasklink,data.content)}
              >
                {data.id}
              </span>;
            })}
          </div>
        
        </div>
      </div>
    </>
  );
};

export default RoadMap;
