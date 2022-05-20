import { Link } from "react-router-dom";
import "../styles.css";
import {
  MdHome,
  MdVideoLibrary,
  MdWatchLater,
  MdHistory
} from "react-icons/md";
import { AiTwotoneLike } from "react-icons/ai";
import { useAuth } from "../context";

export default function Navigation() {
  const { user } = useAuth();
  const { loginStatus } = user;
  return (
    <nav className="sidebar-nav">
      <ul className="sidebar-nav-contain">
        <li className="sidebar-nav-list">
          <Link className="text-dark" to="/">
            <MdHome className="p4 " /> Home
          </Link>
        </li>
        <li className="sidebar-nav-list">
          <Link className="text-dark" to={loginStatus ? "PlayList" : "Login"}>
            <MdVideoLibrary className="p4" /> Play List
          </Link>
        </li>
        <li className="sidebar-nav-list">
          <Link className="text-dark" to={loginStatus ? "WatchLater" : "Login"}>
            <MdWatchLater className="p4" /> Watch Later
          </Link>
        </li>
        <li className="sidebar-nav-list">
          <Link className="text-dark" to={loginStatus ? "LikeVideo" : "Login"}>
            <AiTwotoneLike className="p4" /> Like Video
          </Link>
        </li>
        <li className="sidebar-nav-list">
          <Link className="text-dark" to={loginStatus ? "History" : "Login"}>
            <MdHistory className="p4" /> History
          </Link>
        </li>
      </ul>
    </nav>
  );
}
