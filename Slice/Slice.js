import { createSlice } from '@reduxjs/toolkit';
import VideoData from '../Data/VideoData';



const likeSlice = createSlice({
    name: 'Slice',
    initialState: {
        keyvideo:'',
        numLike: 0,
        videoarr: VideoData,
        userFavorite:[]
    },
    reducers: {
        tangLike: (state, action) => {
            const { keySlice } = action.payload;
            let newdata = state.videoarr.findIndex(video => video.keyvideo === keySlice);
            if (newdata) {
                state.videoarr[newdata].like += 1
                state.numLike = state.videoarr[newdata].like;
                
            }
            
        },
        giamLike: (state, action) => {
            const { keySlice } = action.payload;
            let newdata = state.videoarr.findIndex(video => video.keyvideo === keySlice);
            if (newdata) {
                state.videoarr[newdata].like -= 1
                state.numLike = state.videoarr[newdata].like;
                
            }
        }
    }
})
export default likeSlice.reducer
export const { tangLike, giamLike } = likeSlice.actions
