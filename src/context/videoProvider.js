import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";
const VideoContext = createContext([]);

const VideosProvider = ({ children }) => {
  const [videoList, setVideoList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        setVideoList(response.data.videos);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <VideoContext.Provider value={{ videoList }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);
export { useVideo, VideosProvider };
