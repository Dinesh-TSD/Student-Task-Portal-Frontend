import React, { useState } from "react";
import "./Sidebar.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import profile from "../../assets/boy.jpg";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <main className={show ? "space-toggle" : null}>
        <header className={`header ${show ? "space-toggle" : null}`}>
          <div className="header-toggle" onClick={() => setShow(!show)}>
            <FontAwesomeIcon
              className={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}
              icon={faBars}
            />
          </div>
          <div className="profile">
            {/* <span className="profile-name"> {user.name} </span> */}
            <img className="img-profile rounded-circle" alt="" src={profile} />
          </div>
        </header>

        <aside className={`sidebar ${show ? "show" : null}`}>
          <nav className="nav">
            <div>
              <Link to="/student" className="nav-logo">
                <i className={`fas fa-home-alt nav-logo-icon`}></i>
                <span className="nav-logo-name">Student</span>
              </Link>

              <div className="nav-list">
                <Link to="class" className="nav-link active">
                  <i class="fa-solid fa-laptop"></i>
                  <span className="nav-link-name">Class</span>
                </Link>
                <Link to="dashboard" className="nav-link ">
                  <i className="fas fa-tachometer-alt nav-link-icon"></i>
                  <span className="nav-link-name">Dashboard</span>
                </Link>
                <Link to="tasks" className="nav-link">
                  <i className="fas fa-hotel nav-link-icon"></i>
                  <span className="nav-link-name">Tasks</span>
                </Link>
                <Link to="/gallery" className="nav-link">
                  <i className="fas fa-dollar-sign nav-link-icon"></i>
                  <span className="nav-link-name">Transaction</span>
                </Link>
              </div>
            </div>

            <button className="logout" onClick={logout} type="submit">
              <i className="fas fa-sign-out nav-link-icon"></i>
            </button>
          </nav>
        </aside>

        <Outlet />
      </main>
    </>
  );
};

export default Sidebar;
