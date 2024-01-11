import { createSlice } from "@reduxjs/toolkit";

export const authSlicer = createSlice({
    name:"auth",
    initialState:{
        user:null,
        loading:false,
        isAuthenticated:false
    },
    reducers:{
        loginSuccess: (state,action)=>{
            state.user=action.payload.user;
        }
    }
})

export const { loginSuccess } = authSlicer.actions;