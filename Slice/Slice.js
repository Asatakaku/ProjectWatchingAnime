import { createSlice } from '@reduxjs/toolkit';
import VideoData from '../Data/VideoData';


const likeSlice = createSlice({
    name: 'soLike',
    initialState: {
        keyvideo:'',
        numLike: 0,
        videoarr: VideoData
    },
    reducers: {
        tangLike: (state, action) => {
            const { keySlice } = action.payload;
            const newdata = state.videoarr.find(video => video.keyvideo === keySlice);
            if (newdata) {
                newdata.like += 1;
                state.numLike = newdata.like;
            }
            
        },
        giamLike: state => {
            state.numLike -=1
        }
    }
})
export default likeSlice.reducer
export const { tangLike, giamLike } = likeSlice.actions
