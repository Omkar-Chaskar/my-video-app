import { Link } from "react-router-dom";
import "../styles.css";

export default function Header() {
  return (
    <nav className="navigation head-nav">
      <Link to="/">
        <h2 className="nav-logo">Watchify</h2>
      </Link>
      <div className="nav-submenu">
        <ul className="nav-flex-row">
          <li className="nav-submenu-sub">
            <Link to="/Login" className="bold button button-primary p2">Log In</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}