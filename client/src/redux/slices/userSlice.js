import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading:false
}

const userSLice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       signInStart: (state)=>{
            state.loading = true;
       },
       signInSuccess: (state,action)=>{
        state.loading = false;
        state.currentUser = action.payload;
        state.error = false;
       },
       signInFailure: (state,action)=>{
        state.loading = false;
        state.error = action.payload;
       }
    }
})

export const {signInStart, signInSuccess, signInFailure} = userSLice.actions;
export default userSLice.reducer