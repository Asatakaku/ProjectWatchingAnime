import { configureStore } from "@reduxjs/toolkit";
import likeSlice from '../Slice/Slice'
const store = configureStore({
    reducer: {
        Slice: likeSlice
    }
})
export default store;