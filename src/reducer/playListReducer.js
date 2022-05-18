export function playListReducer(playListState, action) {
    switch (action.type) {
      case "ADD_PLAYLIST":
        return {
          ...playListState,
          playList: playListState.playList.concat(action.value)
        };
  
      case "REMOVE_PLAYLIST":
        return {
          ...playListState,
          playList: playListState.playList.filter(
            (list) => action.payload.id !== list.id
          )
        };
  
      case "ADD_TO_PLAYLIST":
        return {
          ...playListState,
          playList: playListState.playList.filter((playlist) =>
            playlist.id === action.payload.id
              ? playlist.playListData.push(action.value)
              : playlist
          )
        };
  
      case "REMOVE_FROM_PLAYLIST":
        return {
          ...playListState,
          playList: playListState.playList.filter((playlist) =>
            playlist.id === action.payload.id
              ? playlist.playListData.pop(action.value)
              : playlist
          )
        };
  
      default:
        return playListState;
    }
  }
  