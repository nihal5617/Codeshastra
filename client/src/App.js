// import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Main from "./pages/Main";
import Home from "./pages/home/Home";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Simple from "./components/Navbar/Navbar";

function App() {
  return (
   
    <BrowserRouter>
       <Simple/>
       <div className="container">
        <Sidebar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          {/*<Route path="/*" element={<Error />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
     
 
      // <Router>
      //   <div className="container">
      //     <Sidebar/>
      //     <Switch>
      //       <Route exact path="/">
      //         <Home />
      //       </Route>
      //     </Switch>
      //   </div>
      // </Router>
  );
}

export default App;
