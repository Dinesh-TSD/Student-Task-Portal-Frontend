import React from "react";

const LeaderCard = ({ user }) => {
  return (
    <div className="leader-cards shadow mb-4 mt-3">
        
      <div className="row">
        <div className="col-xl-6">
          <h3>{user.name}</h3>
        </div>
        <div className="col-xl-6">
          <h4>{user.email}</h4>
        </div>
      </div>
    </div>
  );
};

export default LeaderCard;
