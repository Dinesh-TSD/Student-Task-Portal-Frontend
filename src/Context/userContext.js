import React from "react";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const userDetail = localStorage.getItem("user");
  const [user, setUser] = React.useState(
    userDetail ? JSON.parse(userDetail) : null
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
