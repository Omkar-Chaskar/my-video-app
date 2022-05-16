import "../styles.css";
import { Link } from "react-router-dom";
import { BsTrashFill } from "react-icons/bs";
import { useHistory } from "../context/historyProvider";

export default function History() {
  const { historyState, historyDispatch } = useHistory();

  return (
    <div className="home">
      <div>
        <div className="main-header-container flex">
          <h5 className="main-header p4">History</h5>
          <p className="p1 main-product-count">
            ( Showing{" "}
            <span id="product-count">{historyState.history.length}</span> videos
            )
          </p>
        </div>
        <ul className="video-container">
          {historyState.history.map((video) => {
            return (
              <li className="card-vertical" key={video._id}>
                <div className="card__primary-action card__primary-action-column card__primary-action-vertical">
                  <span className="material-icons-outlined badge-up-right-corner card-badge card-badge-vertical">
                    <BsTrashFill
                      color="red"
                      onClick={() =>
                        historyDispatch({
                          type: "REMOVE_FROM_HISTORY",
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
