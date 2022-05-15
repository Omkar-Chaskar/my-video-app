import "../styles.css";
import { Link } from "react-router-dom";
import { AiTwotoneLike } from "react-icons/ai";
import { useVideo } from "../context/videoProvider";

export default function Home() {
  
  const { videoList } = useVideo();

  return (
    <div className="home">
      <div>
        <div className="main-header-container flex">
          <h5 className="main-header p4">Recommended Videos</h5>
          <p className="p1 main-product-count">
            ( Showing <span id="product-count">{videoList.length}</span> videos )
          </p>
        </div>
        <ul className="video-container">
          {videoList.map((video) => {
            return (
              <li className="card-vertical" key={video._id}>
                <div className="card__primary-action card__primary-action-column card__primary-action-vertical">
                  <span className="material-icons-outlined badge-up-right-corner card-badge card-badge-vertical">
                    <AiTwotoneLike />
                  </span>
                  <div className="card__media-column card__media-column-vertical">
                    <img
                      className="card-img-height"
                      src={video.pic}
                      alt={video.title}
                    />
                  </div>
                </div>
                <div className="card__secondary text-center card__secondary-vertical">
                  <h4 className="card__subtitle text-center">
                    <p className="card__title">{video.title}</p>
                  </h4>
                </div>
                <div className="card__action-buttons text-center">
                  <Link className="text-dark" to={`/SingleVideo/${video._id}`}>
                    <button className="button button-secondary p1 btn-full bold">
                      Watch Now
                    </button>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
