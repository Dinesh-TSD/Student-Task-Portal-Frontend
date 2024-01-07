import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import Portal from "./components/Portal/Portal";

function App() {
  return (
    <>
    <Router> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router> 
  </>
  );
}

export default App;
