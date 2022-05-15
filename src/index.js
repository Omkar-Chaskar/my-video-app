import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideosProvider } from "./context/videoProvider";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <VideosProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </VideosProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
