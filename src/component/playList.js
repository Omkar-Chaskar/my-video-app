import "../styles.css";
import { FiTrash } from "react-icons/fi";
import { usePlayList } from "../context/playListProvider";
import ModalList from "./modal";
import { Link } from "react-router-dom";

export default function PlayList() {
  const { playListState, playListDispatch } = usePlayList();
  return (
    <div className="home">
      <div>
        <div className="playlist-header-container flex">
          <h5 className="main-header p4">PlayList</h5>
          <ModalList />
        </div>
        {playListState.playList.length === 0 ? (
          <p className="bold text-grey text-center">No play list available.</p>
        ) : (
          <ul className="video-container">
            {playListState.playList.map((playlist, index) => {
              return (
                <li className="card-horizontal" key={index}>
                  <div className="card__secondary card__secondary-vertical">
                    <div className="playlist-header-container ">
                      <h3 className="card__title">{playlist.title}</h3>
                      <FiTrash
                        fontSize={22}
                        onClick={() =>
                          playListDispatch({
                            type: "REMOVE_PLAYLIST",
                            payload: playlist
                          })
                        }
                      />
                    </div>
                    <p className="p2 bold text-grey">
                      {playlist.playListData && playlist.playListData.length} video
                    </p>
                    <ul>
                      {playlist.playListData &&
                        playlist.playListData.map((list, listIndex) => {
                          return (
                            <li
                              key={listIndex}
                              className="playlist-header-container"
                            >
                              <Link
                                className="text-dark"
                                to={`/SingleVideo/${list._id}`}
                              >
                                <p>{list.title}</p>
                              </Link>
                              <FiTrash
                                fontSize={22}
                                color="red"
                                onClick={() => {
                                  playListDispatch({
                                    type: "REMOVE_FROM_PLAYLIST",
                                    payload: playlist,
                                    value: listIndex
                                  });
                                }}
                              />
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
