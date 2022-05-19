import Modal from "react-modal";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { usePlayList } from "../context/playListProvider";
import { useLocation } from "react-router-dom";
Modal.setAppElement("#root");

export default function ModalList(video) {
  const { playListState, playListDispatch } = usePlayList();
  const [showModal, setShowModal] = useState(false);
  const [playlistTitle, setPlayListTitle] = useState([]);
  const closeModal = () => setShowModal(false);
  let location = useLocation();

  return (
    <div className="modal-list">
      <button
        className="btn-playlist button button-primary p1 bold "
        onClick={() => setShowModal(true)}
      >
        {location.pathname === "/PlayList"
          ? "Create PlayList"
          : "Add To PlayList"}
      </button>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
      >
        <div className="modal-header">
          <h4>Save To...</h4>
          <MdClose size="25" onClick={closeModal} />
        </div>
        <div className="input-and-add-btn-container flex-center">
          <input
            type="text"
            placeholder="create new playlist"
            className="modal-input"
            value={playlistTitle}
            onChange={(e) => setPlayListTitle(e.target.value)}
          />
          <button
            style={{
              visibility: playlistTitle.length > 0 ? "visible" : "hidden"
            }}
            className="btn-playlist button button-secondary bold"
            onClick={() => {
              playListDispatch({
                type: "ADD_PLAYLIST",
                value: {
                  id: uuid(),
                  title: playlistTitle,
                  playListData: []
                }
              });
              setPlayListTitle("");
              if (location.pathname === "/PlayList") {
                closeModal();
              }
            }}
          >
            Add
          </button>
        </div>
        {location.pathname === "/PlayList" ? (
          ""
        ) : (
          <div className="playlist-container">
            <ul>
              {playListState.playList.map((list) => {
                return (
                  <li key={list.id}>
                    <button
                      className="btn-playlist button button-secondary p1 bold"
                      onClick={() => {
                        playListDispatch({
                          type: "ADD_TO_PLAYLIST",
                          value: video.video,
                          payload: list
                        });
                        closeModal();
                      }}
                    >
                      {list.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </Modal>
    </div>
  );
}
