import React, { useEffect, useState } from "react";
import axios from "axios";
import LeaderCard from "./LeaderCard";
import "./LeaderBoard.css"

const LeaderBoard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`https://student-task-portal.onrender.com/api/v1/userlist`);
        console.log(res.data);
        setUsers(res.data.users);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [setUsers]);
  return (
    <>
      <div className="task-container">
        <h2> users List</h2>
        {users.map((user, index) => {
          return <LeaderCard key={index + 1} user={user}/>
        })}
      </div>
    </>
  );
};

export default LeaderBoard;
