import ReactPlayer from "react-player/youtube";
import { Link, useParams } from "react-router-dom";
import { AiTwotoneLike } from "react-icons/ai";
import { useVideo } from "../context/videoProvider";
import { useLikeVideos } from "../context/likeVideosProvider";
import { useHistory } from "../context/historyProvider";
import { useWatchLater } from "../context/watchLaterProvider";

const SingleVideo = () => {
  const { videoId } = useParams();
  const { videoList } = useVideo();
  const { likeState, likeDispatch } = useLikeVideos();
  const { historyDispatch } = useHistory();
  const { watchLaterState, watchLaterDispatch } = useWatchLater();

  function getVideoDetails(videoList, videoId) {
    return videoList.filter((video) => video._id === videoId);
  }
  const video = getVideoDetails(videoList, videoId);

  function getVideoList(videoList, videoId) {
    return videoList.filter((video) => video._id !== videoId);
  }
  const videoLists = getVideoList(videoList, videoId);

  return (
    <div className="single-video">
      {video.map((video) => {
        return (
          <div className="video-div" key={video._id}>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                controls
                url={video.link}
                width="100%"
                height="100%"
              />
            </div>
            <div className="video-details">
              <h3 className="video-title">{video.title}</h3>
              <p>{video.description}</p>
              <p>{video.creator}</p>
              <div className="btn-container">
                {likeState.likeVideos &&
                likeState.likeVideos.some((item) => video._id === item._id) ? (
                  <button
                    className="btn-like button button-danger p1 bold"
                    onClick={() =>
                      likeDispatch({
                        type: "REMOVE_FROM_LIKE",
                        payload: video
                      })
                    }
                  >
                    DisLike
                  </button>
                ) : (
                  <button
                    className="btn-like button button-danger p1 bold"
                    onClick={() =>
                      likeDispatch({ type: "ADD_TO_LIKE", payload: video })
                    }
                  >
                    Like
                  </button>
                )}

                {watchLaterState.watchLater &&
                watchLaterState.watchLater.some(
                  (item) => video._id === item._id
                ) ? (
                  <button
                    className="btn-watch-later button button-primary p1 bold"
                    onClick={() =>
                      watchLaterDispatch({
                        type: "REMOVE_FROM_WATCHLATER",
                        payload: video
                      })
                    }
                  >
                    Remove from Watch Later
                  </button>
                ) : (
                  <button
                    className="btn-watch-later button button-primary p1 bold"
                    onClick={() =>
                      watchLaterDispatch({
                        type: "ADD_TO_WATCHLATER",
                        payload: video
                      })
                    }
                  >
                    Add to Watch Later
                  </button>
                )}
                <button className="btn-playlist button button-primary p1 bold">
                  Add to PlayList
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <div>
        <div className="main-header-container flex">
          <h5 className="main-header p4">Recommended Videos</h5>
          <p className="p1 main-product-count">
            ( Showing <span id="product-count">20</span> videos )
          </p>
        </div>
        <ul className="video-container">
          {videoLists.map((video) => {
            return (
              <li className="card-vertical" key={video._id}>
                <div className="card__primary-action card__primary-action-column card__primary-action-vertical">
                  <span className="material-icons-outlined badge-up-right-corner card-badge card-badge-vertical">
                    {likeState.likeVideos &&
                    likeState.likeVideos.some(
                      (item) => video._id === item._id
                    ) ? (
                      <AiTwotoneLike
                        color="red"
                        onClick={() =>
                          likeDispatch({
                            type: "REMOVE_FROM_LIKE",
                            payload: video
                          })
                        }
                      />
                    ) : (
                      <AiTwotoneLike
                        onClick={() =>
                          likeDispatch({ type: "ADD_TO_LIKE", payload: video })
                        }
                      />
                    )}
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
                      {" "}
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
};

export default SingleVideo;
