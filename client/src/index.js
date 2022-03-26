import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
<<<<<<< HEAD
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducer";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "./components/newproject/Map";
import Landing from "./components/Landing/Landing";
=======
>>>>>>> b6da0846b06c0e1a81023f210c2372ab525b8138

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>,
  document.getElementById("root")
);
