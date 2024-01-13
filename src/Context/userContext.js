import React from "react";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {

  const userDetail = localStorage.getItem("user");
  const [user, setUser] = React.useState(
    userDetail ? JSON.parse(userDetail) : null
  );

  const [taskvalue,setTaskvalue] = React.useState(null)


  return (
    <UserContext.Provider value={{ user, setUser ,taskvalue,setTaskvalue}}>
      {children}
    </UserContext.Provider>
  );
};
