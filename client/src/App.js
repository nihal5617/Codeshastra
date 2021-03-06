// import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Main from "./pages/Main";
import Home from "./pages/home/Home";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Simple from "./components/Navbar/Navbar";
import ProjectDetails from "./components/Projectdetails/ProjectDetails";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import { useState, React, useEffect } from "react";
import OcrAttendance from "./components/OcrAttendance/OcrAttendance";
import WorkersData from "./components/WorkersData/WorkersData";
import PastProjects from "./components/PastProjects/PastProjects";
import Dashboard from "./components/Worker/WorkerDashboard/dashboard";
import WorkerProject from "./components/Worker/WorkerProjects/WorkerProject";
import Details from "./components/Worker/WorkerDetails/Details";
import Landing from "./components/Landing/Landing";
import NewProject from "./components/newproject/NewProject"
// import { useLocation } from 'react-router-dom';
// import { AUTH } from "./constants/actionTypes";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  // const location=useLocation();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);
  return (
    <>
      {user ? (
        JSON.parse(localStorage.getItem("profile")).title === "Worker" ? (
          <BrowserRouter>
            <Simple />
            <div className="container">
              <Dashboard />
              <Routes>
                <Route path="/workerProject" element={<WorkerProject/>}/>
                <Route path="/" element ={<Details/>}/>
              </Routes>
            </div>
            </BrowserRouter>
        ) : (
          <BrowserRouter>
            <Simple />
            <div className="container">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addWorker" element={<User />} />
                <Route path="/attendance" element={<UserList />} />
                <Route path="/ocr" element={<OcrAttendance />} />
                <Route path="/data" element={<WorkersData />} />
                <Route path="/past" element={<PastProjects />} />
                <Route path="/newproject" element={<NewProject/>}/>
              </Routes>
            </div>
            
          </BrowserRouter>
        
      )) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/landing" element={<Landing/>}/>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
