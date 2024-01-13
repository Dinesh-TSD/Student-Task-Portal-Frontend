import React, { useContext, useEffect, useState } from "react";
import "./Tasks.css";
import axios from "axios";
import { UserContext } from "../../Context/userContext";
import TaskCard from "./TaskCard";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const { taskvalue } = useContext(UserContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const tasks = await axios.get("http://127.0.0.1:8080/api/v1/tasks");
        setTasks(tasks.data.tasks);
        
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
console.log(tasks);


  return (
    <>
      <div className="task-container">
        <h1>Your Tasks List</h1>
          {tasks && tasks.map((task, index) => {
          return <TaskCard taskvalue={taskvalue} />
        })}
        
      </div>
    </>
  );
};

export default Tasks;
