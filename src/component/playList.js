import "../styles.css";
import {FiTrash} from "react-icons/fi"

export default function PlayList() {

  return (
    <div className="home">
        <div>
        <div className="playlist-header-container flex">
          <h5 className="main-header p4">PlayList</h5>
          <button className="button button-primary p2 bold"> Create New PlayList </button>
        </div>
        <ul className="video-container">
              <li className="card-horizontal">
                <div className="card__secondary card__secondary-vertical">
                  <h3 className="card__title">PlayList #1</h3>
                  <p className="p2">10 videos</p>
                </div>
                <FiTrash fontSize={22}/>
              </li>
              <li className="card-horizontal">
                <div className="card__secondary card__secondary-vertical">
                  <h3 className="card__title">PlayList #2</h3>
                  <p className="p2">10 videos</p>
                </div>
                <FiTrash fontSize={22}/>
              </li>
              <li className="card-horizontal">
                <div className="card__secondary card__secondary-vertical">
                  <h3 className="card__title">PlayList #3</h3>
                  <p className="p2">10 videos</p>
                </div>
                <FiTrash fontSize={22}/>
              </li>
              <li className="card-horizontal">
                <div className="card__secondary card__secondary-vertical">
                  <h3 className="card__title">PlayList #4</h3>
                  <p className="p2">10 videos</p>
                </div>
                <FiTrash fontSize={22}/>
              </li>
        </ul>
      </div>
    </div>
  );
}