export function historyVideosReducer(historyState, action) {
    switch (action.type) {
      case "ADD_TO_HISTORY":
        return {
          ...historyState,
          history: historyState.history.concat(action.payload)
        };
  
      case "REMOVE_FROM_HISTORY":
        return {
          ...historyState,
          history: historyState.history.filter(
            (video) => action.payload._id !== video._id
          )
        };
  
      default:
        return historyState;
    }
  }
  