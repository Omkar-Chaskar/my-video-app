export function likeVideosReducer(likeState, action) {
    switch (action.type) {
      case "ADD_TO_LIKE":
        return {
          ...likeState,
          likeVideos: likeState.likeVideos.concat(action.payload)
        };
  
      case "REMOVE_FROM_LIKE":
        return {
          ...likeState,
          likeVideos: likeState.likeVideos.filter(
            (video) => action.payload._id !== video._id
          )
        };
  
      default:
        return likeState;
    }
  }
  