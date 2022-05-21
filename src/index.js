import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {CombinedProvider} from "./context";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    
      <BrowserRouter>   
        <CombinedProvider> 
          <App />    
        </CombinedProvider>
      </BrowserRouter>

  </React.StrictMode>,
  document.getElementById("root")
);
