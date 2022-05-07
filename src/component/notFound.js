import { Link } from "react-router-dom";
import "../styles.css";
export default function NotFound() {
  return (
    <main className="error-page">
      <figure>
        <img
          src="/assets/images/ErrorPage404.jpg"
          alt="PageNotFound"
          width="100%"
          height="300"
        />
      </figure>
      <Link to="/">
        <button className="button button-primary">Go To Homepage</button>
      </Link>
    </main>
  );
}