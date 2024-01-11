import React from "react";

const RoadMap = ({ selectedNumber, handleNumberClick }) => {
  return (
    <>
      <div className="col-xl-4">
        <div class="road-cards shadow mb-4 mt-3">
          <div class="card-header py-3 ps-3">
            <h2 class="class-tittle">Road Map</h2>
          </div>
          <div class="card-body">
            {/* Right side list of numbers */}
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20,
            ].map((number) => (
              <span
                key={number}
                className={`number-item ${
                  selectedNumber === number ? "selected" : ""
                } ${number >= 10 ? "last" : ""}`}
                onClick={() => handleNumberClick(number)}
              >
                {number}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadMap;
