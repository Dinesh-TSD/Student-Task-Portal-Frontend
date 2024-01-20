import React, { useContext, useEffect } from "react";
import "./Tasks.css";
import axios from "axios";
import TaskCard from "./TaskCard";
import { UserContext } from "../../Context/userContext";

const Tasks = () => {
  const { tasks, setTasks, user } = useContext(UserContext);
  const studentId = user.id;
  console.log("sid", studentId);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.post(`http://127.0.0.1:8080/api/v1/tasks`, {
          userId: studentId,
        });
        setTasks(res.data.tasks);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [setTasks, studentId]);

  return (
    <>
      <div className="task-container">
        <h2>Your Tasks List</h2>
        {tasks.map((task, index) => {
          return <TaskCard key={index + 1} task={task} />;
        })}
      </div>
    </>
  );
};

export default Tasks;
