import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const statuss = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
})


const userSlice = createSlice({
    name: 'users',
    initialState: {
        userdata: [],
        status: statuss.IDLE
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getuserdata.pending,(state,action)=>{
            state.status=statuss.LOADING
        })
        builder.addCase(getuserdata.fulfilled,(state,action)=>{
            state.userdata=action.payload;
            state.status=statuss.IDLE
        })
        builder.addCase(getuserdata.rejected,(state,action)=>{
            state.status=statuss.ERROR
        })

        

    }


})


export default userSlice.reducer;

export const getuserdata = createAsyncThunk('userhai/userpagal', async (person) => {
    const response = await fetch(`https://randomuser.me/api/?results=30&gender=${person}`)
    const data = await response.json()
    return data;
})
