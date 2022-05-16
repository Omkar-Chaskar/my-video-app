import "../styles.css";
import { Link } from "react-router-dom";
import { BsTrashFill } from "react-icons/bs";
import { useWatchLater } from "../context/watchLaterProvider";
import { useHistory } from "../context/historyProvider";

export default function WatchLater() {
  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  const { historyDispatch } = useHistory();

  return (
    <div className="home">
      <div>
        <div className="main-header-container flex">
          <h5 className="main-header p4">Watch Later</h5>
          <p className="p1 main-product-count">
            ( Showing{" "}
            <span id="product-count">{watchLaterState.watchLater.length}</span>{" "}
            videos )
          </p>
        </div>
        <ul className="video-container">
          {watchLaterState.watchLater.map((video) => {
            return (
              <li className="card-vertical" key={video._id}>
                <div className="card__primary-action card__primary-action-column card__primary-action-vertical">
                  <span className="material-icons-outlined badge-up-right-corner card-badge card-badge-vertical">
                    <BsTrashFill
                      color="red"
                      onClick={() =>
                        watchLaterDispatch({
                          type: "REMOVE_FROM_WATCHLATER",
                          payload: video
                        })
                      }
                    />
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
                    <button
                      className="button button-secondary p1 btn-full bold"
                      onClick={() =>
                        historyDispatch({
                          type: "ADD_TO_HISTORY",
                          payload: video
                        })
                      }
                    >
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
