import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import profile from "../../assets/boy.jpg";
import { UserContext } from "../../Context/userContext";
import { MdLeaderboard } from "react-icons/md";


const Sidebar = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const { user } = useContext(UserContext);

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
          <button className="logout" onClick={logout} type="submit">
              <i className="fas fa-sign-out nav-link-icon"></i>
              Logout
            </button>
          <div className=" profile">
           
            {user ? <span className="profile-name"> {user.name} </span> : ""}

            <img className="img-profile rounded-circle" alt="" src={profile} />
          </div>
        </header>

        <aside className={`sidebar ${show ? "show" : null}`}>
          <nav className="nav">
            <div>
              <NavLink to="/student" className="nav-logo">
                <i className={`fas fa-home-alt nav-logo-icon`}></i>
                <span className="nav-logo-name">Student</span>
              </NavLink>

              <div className="nav-list">
                <NavLink to="class" className="nav-link ">
                  <i className="fa-solid fa-laptop icons"></i>Class
                </NavLink>
                <NavLink to="dashboard" className="nav-link ">
                  <i className="fas fa-tachometer-alt icons"></i>Dashboard
                </NavLink>
                <NavLink to="tasks" className="nav-link">
                  <i class="fa-solid fa-list-check icons"></i>Tasks
                </NavLink>
                <NavLink to="leaderboard" className="nav-link">
                  <MdLeaderboard className="icons" />
                  LeaderBoard
                </NavLink>
                <NavLink to="portfolio" className="nav-link">
                  <i class="fa-solid fa-user-tie icons"></i>Portfolio
                </NavLink>
                <NavLink to="testmonial" className="nav-link">
                  <i class="fa-solid fa-comment icons"></i>Testimonial
                </NavLink>
                <NavLink to="syllabus" className="nav-link">
                  <i class="fa-solid fa-book icons"></i>Syllabus
                </NavLink>
              </div>
            </div>
          </nav>
        </aside>

        <Outlet />
      </main>
    </>
  );
};

export default Sidebar;
