import { useContext, createContext, useReducer } from "react";
import { watchLaterReducer } from "../reducer/watchLaterReducer";

const WatchLaterContext = createContext();

const useWatchLater = () => useContext(WatchLaterContext);

const WatchLaterProvider = ({ children }) => {
  const [watchLaterState, watchLaterDispatch] = useReducer(watchLaterReducer, {
    watchLater: []
  });

  return (
    <WatchLaterContext.Provider value={{ watchLaterState, watchLaterDispatch }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

export { WatchLaterProvider, useWatchLater };
