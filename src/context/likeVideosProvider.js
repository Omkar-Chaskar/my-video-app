import { useContext, createContext, useReducer } from "react";
import { likeVideosReducer } from "../reducer/likeVideosReducer";

const LikeVideosContext = createContext();

const useLikeVideos = () => useContext(LikeVideosContext);

const LikeVideosProvider = ({ children }) => {
  const [likeState, likeDispatch] = useReducer(likeVideosReducer, {
    likeVideos: []
  });

  return (
    <LikeVideosContext.Provider value={{ likeState, likeDispatch }}>
      {children}
    </LikeVideosContext.Provider>
  );
};

export { LikeVideosProvider, useLikeVideos };
