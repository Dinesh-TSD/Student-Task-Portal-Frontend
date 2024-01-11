import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Sidebar from "../Sidebar/Sidebar";

const Portal = () => {
  const navigate = useNavigate();

  
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <Sidebar />
      <ToastContainer />
    </> 
  );
};

export default Portal;
