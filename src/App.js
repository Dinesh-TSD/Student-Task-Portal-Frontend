import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./SidebarComponents/Dashboard/Dashboard";
import Portal from "./components/Portal/Portal";
import Class from "./SidebarComponents/Class/Class";
import Tasks from "./SidebarComponents/Tasks/Tasks";
import LeaderBoard from "./SidebarComponents/LeaderBoard/LeaderBoard";
import Syllabus from "./SidebarComponents/Syllabus/Syllabus";
import Testimonial from "./SidebarComponents/Testimonial/Testimonial";
import Portfolio from "./SidebarComponents/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/portal" element={<Portal />}>
            <Route path="class" element={<Class />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="leaderboard" element={<LeaderBoard />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="testmonial" element={<Testimonial />} />
            <Route path="syllabus" element={<Syllabus />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
