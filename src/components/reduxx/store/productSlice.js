import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProductData=createAsyncThunk('productss/producsf',async(id)=>{
                const response=await fetch(`https://fakestoreapi.com/products/category/${id}`)
                const data=await response.json();
                return data;
})



const productSlice=createSlice({
    name:'product',
    initialState:{
        pdata:[],
        status:false,
        error:false,
    },
    reducers:{},
    extraReducers:(builder)=>{
                builder.addCase(getProductData.pending, (state,action)=>{
                    state.status=false;
                })
                builder.addCase(getProductData.fulfilled, (state,action)=>{
                    state.pdata=action.payload;
                    state.status=true;
                })
                builder.addCase(getProductData.rejected, (state,action)=>{
                    state.status=false;
                    state.error=true;
                })

    }
})

export default productSlice.reducer;