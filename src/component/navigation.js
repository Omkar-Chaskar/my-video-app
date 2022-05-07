import { Link } from "react-router-dom";
import "../styles.css";
import {MdHome ,MdVideoLibrary ,MdWatchLater ,MdHistory} from "react-icons/md";
import {AiTwotoneLike} from "react-icons/ai";

export default function Navigation() {
  return (
    <nav className="sidebar-nav">
      <ul className="sidebar-nav-contain">
        <li className="sidebar-nav-list">
          <Link className="text-dark" to="/">
            <MdHome className="p4 "/> Home
          </Link>
        </li>
        <li className="sidebar-nav-list">
          <Link className="text-dark" to="PlayList">
            <MdVideoLibrary className="p4"/> Play List
          </Link>
        </li>
        <li className="sidebar-nav-list">
          <Link className="text-dark" to="WatchLater">
            <MdWatchLater className="p4"/> Watch Later
          </Link>
        </li>
        <li className="sidebar-nav-list">
          <Link className="text-dark" to="LikeVideo">
          <AiTwotoneLike className="p4"/> Like Video
          </Link>
        </li>
        <li className="sidebar-nav-list">
          <Link className="text-dark" to="History">
          <MdHistory className="p4"/> History
          </Link>
        </li>
      </ul>
    </nav>
  );
}