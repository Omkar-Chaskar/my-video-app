import React from 'react';
import ReactPlayer from 'react-player/youtube';
import { Link } from 'react-router-dom';
import {AiTwotoneLike} from "react-icons/ai"

const singleVideo = () => {
  return (
    <div className='single-video'>
        <div className='video-div'>
        <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
        controls
        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        width='100%'
          height='100%'
        />
      </div>
        <div className='video-details'>
            <h3 className='video-title'>
                Sample Video
            </h3>
            <div className='btn-container'>
                <button className='btn-like button button-danger p1 bold'>Like</button>
                <button className='btn-watch-later button button-primary p1 bold'>Add to Watch Later</button>
                <button className='btn-playlist button button-primary p1 bold'>Add to PlayList</button>
            </div>
        </div>
        </div>
        
        <div>
            <div className="main-header-container flex">
            <h5 className="main-header p4">Recommended Videos</h5>
            <p className="p1 main-product-count">
                ( Showing <span id="product-count">20</span> videos )
            </p>
            </div>
            <ul className="video-container">
                <li className="card-vertical">
                    <div className="card__primary-action card__primary-action-column card__primary-action-vertical">
                    <span className="material-icons-outlined badge-up-right-corner card-badge card-badge-vertical">
                        <AiTwotoneLike />
                    </span>
                    <div className="card__media-column card__media-column-vertical">
                        <img
                        className="card-img-height"
                        src="https://i.ytimg.com/vi/Ezk2AwqgS9Q/hqdefault.jpg?s…j0AgKJDeAE=&rs=AOn4CLA1VisFh6_Uurec8nadJS6rc2Mdyw"
                        alt=""
                        />
                    </div>
                    </div>
                    <div className="card__secondary text-center card__secondary-vertical">
                    <h4 className="card__subtitle text-center">
                    <p className="card__title">Data Visualization with D3</p>
                    </h4>
                    </div>
                    <div className="card__action-buttons text-center">
                    <Link className="text-dark" to="/SingleVideo">
                        <button
                        className="button button-secondary p1 btn-full bold"
                        >
                        Watch Now
                        </button>
                    </Link>
                    </div>
                </li>
                <li className="card-vertical">
                    <div className="card__primary-action card__primary-action-column card__primary-action-vertical">
                    <span className="material-icons-outlined badge-up-right-corner card-badge card-badge-vertical">
                        <AiTwotoneLike />
                    </span>
                    <div className="card__media-column card__media-column-vertical">
                        <img
                        className="card-img-height"
                        src="	https://i.ytimg.com/vi/_L-UszPmy2A/hqdefault.jpg?s…j0AgKJDeAE=&rs=AOn4CLC4-OXdTPpZdf3llkLcLVEjzl-bGg"
                        alt=""
                        />
                    </div>
                    </div>
                    <div className="card__secondary text-center card__secondary-vertical">
                    <h4 className="card__subtitle text-center">
                    <p className="card__title">Data Visualization with D3</p>
                    </h4>
                    </div>
                    <div className="card__action-buttons text-center">
                    <Link className="text-dark" to="/SingleVideo">
                        <button
                        className="button button-secondary p1 btn-full bold"
                        >
                        Watch Now
                        </button>
                    </Link>
                    </div>
                </li>
                <li className="card-vertical">
                    <div className="card__primary-action card__primary-action-column card__primary-action-vertical">
                    <span className="material-icons-outlined badge-up-right-corner card-badge card-badge-vertical">
                        <AiTwotoneLike />
                    </span>
                    <div className="card__media-column card__media-column-vertical">
                        <img
                        className="card-img-height"
                        src="https://i.ytimg.com/vi/MMEIVh49pS8/hqdefault.jpg?s…j0AgKJDeAE=&rs=AOn4CLCgITDTeBCwKkr2CW3zt-bt3P5uSA"
                        alt=""
                        />
                    </div>
                    </div>
                    <div className="card__secondary text-center card__secondary-vertical">
                    <h4 className="card__subtitle text-center">
                    <p className="card__title">Data Visualization with D3</p>
                    </h4>
                    </div>
                    <div className="card__action-buttons text-center">
                    <Link className="text-dark" to="/SingleVideo">
                        <button
                        className="button button-secondary p1 btn-full bold"
                        >
                        Watch Now
                        </button>
                    </Link>
                    </div>
                </li>
                <li className="card-vertical">
                    <div className="card__primary-action card__primary-action-column card__primary-action-vertical">
                    <span className="material-icons-outlined badge-up-right-corner card-badge card-badge-vertical">
                        <AiTwotoneLike />
                    </span>
                    <div className="card__media-column card__media-column-vertical">
                        <img
                        className="card-img-height"
                        src="https://i.ytimg.com/vi/No8qdcVYiQw/hqdefault.jpg?s…j0AgKJDeAE=&rs=AOn4CLB5Y0QC8VlGkKbJ6fjwnhOPrdkLyw"
                        alt=""
                        />
                    </div>
                    </div>
                    <div className="card__secondary text-center card__secondary-vertical">
                    <h4 className="card__subtitle text-center">
                    <p className="card__title">Data Visualization with D3</p>
                    </h4>
                    </div>
                    <div className="card__action-buttons text-center">
                    <Link className="text-dark" to="/SingleVideo">
                        <button
                        className="button button-secondary p1 btn-full bold"
                        >
                        Watch Now
                        </button>
                    </Link>
                    </div>
                </li>
                <li className="card-vertical">
                    <div className="card__primary-action card__primary-action-column card__primary-action-vertical">
                    <span className="material-icons-outlined badge-up-right-corner card-badge card-badge-vertical">
                        <AiTwotoneLike />
                    </span>
                    <div className="card__media-column card__media-column-vertical">
                        <img
                        className="card-img-height"
                        src="	https://i.ytimg.com/vi/u6_a0d94A1Q/hqdefault.jpg?s…j0AgKJDeAE=&rs=AOn4CLCFbCbuzqAtwJwTRe63CQW8GAmlsw"
                        alt=""
                        />
                    </div>
                    </div>
                    <div className="card__secondary text-center card__secondary-vertical">
                    <h4 className="card__subtitle text-center">
                    <p className="card__title">Data Visualization with D3</p>
                    </h4>
                    </div>
                    <div className="card__action-buttons text-center">
                    <Link className="text-dark" to="/SingleVideo">
                        <button
                        className="button button-secondary p1 btn-full bold"
                        >
                        Watch Now
                        </button>
                    </Link>
                    </div>
                </li>
                <li className="card-vertical">
                    <div className="card__primary-action card__primary-action-column card__primary-action-vertical">
                    <span className="material-icons-outlined badge-up-right-corner card-badge card-badge-vertical">
                        <AiTwotoneLike />
                    </span>
                    <div className="card__media-column card__media-column-vertical">
                        <img
                        className="card-img-height"
                        src="https://i.ytimg.com/vi/yLZazznWoAs/hqdefault.jpg?s…j0AgKJDeAE=&rs=AOn4CLDEXYMLowXfqVUeYVrT-OJqQDUJUA"
                        alt=""
                        />
                    </div>
                    </div>
                    <div className="card__secondary text-center card__secondary-vertical">
                    <h4 className="card__subtitle text-center">
                    <p className="card__title">Data Visualization with D3</p>
                    </h4>
                    </div>
                    <div className="card__action-buttons text-center">
                    <Link className="text-dark" to="/SingleVideo">
                        <button
                        className="button button-secondary p1 btn-full bold"
                        >
                        Watch Now
                        </button>
                    </Link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default singleVideo