import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { VideosProvider } from "./context/videoProvider";
import { LikeVideosProvider } from "./context/likeVideosProvider";
import { HistoryProvider } from "./context/historyProvider";
import { WatchLaterProvider } from "./context/watchLaterProvider";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <WatchLaterProvider>
      <HistoryProvider>
        <LikeVideosProvider>
          <VideosProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </VideosProvider>
        </LikeVideosProvider>
      </HistoryProvider>
    </WatchLaterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
