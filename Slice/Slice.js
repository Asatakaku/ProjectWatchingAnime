import { createSlice } from '@reduxjs/toolkit';
import VideoData from '../Data/VideoData';
import Youtuber from '../Data/Youtuber';
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
        youtubearr: Youtuber,
        numLike: 0,
        favoritevideos: [],
        subcribes: [],
    },

    reducers: {
        tangLike: (state, action) => {
            const { keySlice, userid } = action.payload;
            const newdataIndex = state.videoarr.findIndex(video => video.keyvideo === keySlice);
            const existedfar = state.favoritevideos.findIndex(item => item.keyvideo === keySlice && item.userid === userid)
            state.keyvideo = keySlice
            if (newdataIndex !== -1 && existedfar === -1) {
                state.videoarr[newdataIndex].like += 1
                state.numLike = state.videoarr[newdataIndex].like;
                state.favoritevideos.push({ ...state.videoarr[newdataIndex], userid: userid, idfav: generateRandomString(12) });
                
                console.log(state.favoritevideos)
            }
            
        },
        giamLike: (state, action) => {
            const { keySlice, userid } = action.payload;
            const newdata = state.videoarr.findIndex(video => video.keyvideo === keySlice);
            const existedfar = state.favoritevideos.findIndex(item => item.keyvideo === keySlice && item.userid === userid)
            state.keyvideo = keySlice
            if (newdata !== -1 && existedfar !== -1) {
                state.videoarr[newdata].like -= 1
                state.numLike = state.videoarr[newdata].like;
                state.favoritevideos = state.favoritevideos.filter(item => item.keyvideo !== state.videoarr[newdata].keyvideo && item.userid === userid)
                
                // data.setFavoriteData(state.favoritevideos)
                // console.log(data.getFavoriteData())
                console.log(state.favoritevideos)
            }
        },
        subscribe: (state, action) => {
            const { userid, youtuberid } = action.payload;
            const issubscribe = state.subcribes.findIndex(item => item.userid === userid && item.youtuberid === youtuberid);
            const indexsub = state.youtubearr.findIndex(item => item.id === youtuberid)
            if (issubscribe === -1 && indexsub !== -1) {
                state.youtubearr[indexsub].subcriber +=1
                state.subcribes.push({ userid, youtuberid, idsubs: generateRandomString(12) });
                console.log(state.subcribes)
            }
            
        },
        notsubscribe: (state, action) => {
            const { userid, youtuberid } = action.payload;
            const issubscribe = state.subcribes.find(item => item.userid === userid && item.youtuberid === youtuberid)
            const indexsub = state.youtubearr.findIndex(item => item.id === youtuberid)
            if (issubscribe !== -1 && indexsub !== -1) {
                state.youtubearr[indexsub].subcriber -=1
                state.subcribes = state.subcribes.filter(item => item.userid === userid && item.youtuberid !== youtuberid)
                console.log(state.subcribes)
            }
        }
    }
})
export default likeSlice.reducer
export const { tangLike, giamLike, subscribe, notsubscribe } = likeSlice.actions
