import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Main from "./pages/Main";
import Home from "./pages/home/Home";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <div className="container">
        <Sidebar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          {/*<Route path="/*" element={<Error />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
