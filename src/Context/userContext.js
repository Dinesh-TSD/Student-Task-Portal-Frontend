import React, { useState } from "react";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {

  const userDetail = localStorage.getItem("user");
  
  const [user, setUser] = React.useState(
    userDetail ? JSON.parse(userDetail) : null
  );

  const [tasks, setTasks] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser,tasks,setTasks }}>
      {children}
    </UserContext.Provider>
  );
};
