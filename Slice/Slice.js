import { createSlice } from '@reduxjs/toolkit';
import VideoData from '../Data/VideoData';

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

const likeSlice = createSlice({
    name: 'Slice',
    initialState: {
        keyvideo: '',
        videoarr: VideoData,
        like: {
            numLike: 0,
            defaultlike: 0,
        },
        favoritevideos: [],
    },

    reducers: {
        tangLike: (state, action) => {
            const { keySlice, userid } = action.payload;
            const newdataIndex = state.videoarr.findIndex(video => video.keyvideo === keySlice);
            const existedfar = state.favoritevideos.findIndex(item => item.keyvideo === keySlice)
            if (newdataIndex !== -1 && existedfar === -1) {
                state.videoarr[newdataIndex].like += 1
                state.like.numLike = state.videoarr[newdataIndex].like;
                state.favoritevideos.push({ ...state.videoarr[newdataIndex], userid: userid, idfav: generateRandomString(12) });
                // data.setFavoriteData(state.favoritevideos)
                // console.log(data.getFavoriteData())
            }
            
        },
        giamLike: (state, action) => {
            const { keySlice, userid } = action.payload;
            const newdata = state.videoarr.findIndex(video => video.keyvideo === keySlice);
            const existedfar = state.favoritevideos.findIndex(item => item.keyvideo === keySlice)
            if (newdata !== -1 && existedfar !== -1) {
                state.videoarr[newdata].like -= 1
                state.like.numLike = state.videoarr[newdata].like;
                state.favoritevideos = state.favoritevideos.filter(item => (item.keyvideo !== state.videoarr[newdata].keyvideo) && item.userid === userid)
                // data.setFavoriteData(state.favoritevideos)
                // console.log(data.getFavoriteData())
            }
        }
    }
})
export default likeSlice.reducer
export const { tangLike, giamLike } = likeSlice.actions
