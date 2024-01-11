import { configureStore } from "@reduxjs/toolkit";
import { authSlicer } from "./reducers/authSlicer";

export const store = configureStore({
    reducer:{
        user:authSlicer.reducer
    }
})