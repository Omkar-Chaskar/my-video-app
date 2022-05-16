export function watchLaterReducer(watchLaterState, action) {
    switch (action.type) {
      case "ADD_TO_WATCHLATER":
        return {
          ...watchLaterState,
          watchLater: watchLaterState.watchLater.concat(action.payload)
        };
  
      case "REMOVE_FROM_WATCHLATER":
        return {
          ...watchLaterState,
          watchLater: watchLaterState.watchLater.filter(
            (video) => action.payload._id !== video._id
          )
        };
  
      default:
        return watchLaterState;
    }
  }
  