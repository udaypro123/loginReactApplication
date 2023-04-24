import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getProductHomepage=createAsyncThunk('homepage/itemdetails',async()=>{
    const response=await fetch('https://fakestoreapi.com/products')
    const data=await response.json();
    return data;
})

const homepageSlice = createSlice({
    name: "homepagedata",
    initialState: {
        homepageitem: [],
        status: false,
        error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductHomepage.pending, (state,action)=>{
            state.status=false;
        })
        builder.addCase(getProductHomepage.fulfilled, (state,action)=>{
            state.homepageitem= action.payload;
            state.status=true;
        })
        builder.addCase(getProductHomepage.rejected, (state,action)=>{
            state.status=false;
            state.error=true;
        })
    }
})

export default homepageSlice.reducer;
