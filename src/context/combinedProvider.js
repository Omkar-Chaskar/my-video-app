import React from "react";
import {VideosProvider,AuthProvider,LikeVideosProvider,WatchLaterProvider,PlayListProvider,HistoryProvider} from "../context"


const CombinedProvider =({children})=>{
    return(
    <VideosProvider>
        <AuthProvider>
            <PlayListProvider>
              <WatchLaterProvider>
                <HistoryProvider>
                  <LikeVideosProvider>
                   {children}
                  </LikeVideosProvider>
                </HistoryProvider>
              </WatchLaterProvider>
            </PlayListProvider>
        </AuthProvider>
    </VideosProvider>
    )
}
export {CombinedProvider};