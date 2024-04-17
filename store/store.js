import { configureStore } from "@reduxjs/toolkit";
import likeSlice from '../Slice/Slice'
const store = configureStore({
    reducer: {
        soLike: likeSlice
    }
})
export default store;