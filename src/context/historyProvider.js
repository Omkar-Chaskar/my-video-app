import { useContext, createContext, useReducer } from "react";
import { historyVideosReducer } from "../reducer/historyVideosReducer";

const HistoryContext = createContext();

const useHistory = () => useContext(HistoryContext);

const HistoryProvider = ({ children }) => {
  const [historyState, historyDispatch] = useReducer(historyVideosReducer, {
    history: []
  });

  return (
    <HistoryContext.Provider value={{ historyState, historyDispatch }}>
      {children}
    </HistoryContext.Provider>
  );
};

export { HistoryProvider, useHistory };
