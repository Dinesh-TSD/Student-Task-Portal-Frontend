import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import TopSide from "../TopSide/TopSide";

const Portal = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <TopSide />
      <ToastContainer />
      <Outlet />
    </>
  );
};

export default Portal;
