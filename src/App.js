import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Header from "./component/header";
import Navigation from "./component/navigation";
import Home from "./component/home";
import History from "./component/history";
import WatchLater from "./component/watchLater";
import PlayList from "./component/playList";
import LikeVideo from "./component/likeVideo";
import SingleVideo from "./component/singleVideo";
import Login from "./component/login";
import Signup from "./component/signup";
import NotFound from "./component/notFound";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <div className="doc-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="History" element={<History />} />
          <Route path="WatchLater" element={<WatchLater />} />
          <Route path="PlayList" element={<PlayList />} />
          <Route path="LikeVideo" element={<LikeVideo />} />
          <Route path="SingleVideo" element={<SingleVideo />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}