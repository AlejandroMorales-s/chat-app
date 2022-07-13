import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { post } from '../api'

export const login = createAsyncThunk("auth/login",async (userData, {fulfillWithValue, rejectWithValue})=>{
    console.log(userData)

    return post("/api/auth/login",userData)
    .then(data=>fulfillWithValue(data))
    .catch(error=>rejectWithValue(error))

});

const authSlice = createSlice({
    name:"auth",
    initialState:{
        logged:false,
        user:{}
    },
    reducers:{
        logout:function(state,action){
            state.logged = false
            state.user = {}
        }
    },

    extraReducers(builder){
        builder.addCase(login.fulfilled,(state,action)=>{
            state.logged = true
            state.user = action.payload.user
        })
        builder.addCase(login.pending,(state,action)=>{
            console.log("Loading...")
        })
        builder.addCase(login.rejected,(state,action)=>{
            console.log("Error...")
            console.log(action.payload)
            console.log(action.error)
        })
    }

})

export const {
    logout
} = authSlice.actions
export default authSlice.reducer