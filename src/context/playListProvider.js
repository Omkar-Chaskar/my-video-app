import { useContext, createContext, useReducer } from "react";
import { playListReducer } from "../reducer/playListReducer";

const PlayListContext = createContext();

const usePlayList = () => useContext(PlayListContext);

const PlayListProvider = ({ children }) => {
  const [playListState, playListDispatch] = useReducer(playListReducer, {
    playList: []
  });

  return (
    <PlayListContext.Provider value={{ playListState, playListDispatch }}>
      {children}
    </PlayListContext.Provider>
  );
};

export { PlayListProvider, usePlayList };
