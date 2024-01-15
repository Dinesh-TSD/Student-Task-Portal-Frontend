import React, {  useEffect, useState } from "react";
import "./Tasks.css";
import axios from "axios";
import TaskCard from "./TaskCard";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8080/api/v1/tasks");
        setTasks(res.data.tasks);
        
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);


  return (
    <>
      <div className="task-container">
        <h2>Your Tasks List</h2>
          {tasks.map((task, index) => {
          return <TaskCard 
          key={index + 1}
          task={task} 
          />
        })}
        
      </div>
    </>
  );
};

export default Tasks;
