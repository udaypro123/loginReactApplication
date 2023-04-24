import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getProductDatadefault=createAsyncThunk('produ/prod',async(datas)=>{
    const response=await fetch(`https://fakestoreapi.com/products/category/${datas}`)
    const data=await response.json();
    return data;
})




const defaultsliceshowdata=createSlice({
    name:"showdata",
    initialState:{
        showdefualtdata:[],
        status:false,
        error:false,
    },
    reducers:{},
    extraReducers:(builder)=>{
               
                
                builder.addCase(getProductDatadefault.pending, (state,action)=>{
                    state.status=false;
                })
                builder.addCase(getProductDatadefault.fulfilled, (state,action)=>{
                    state.showdefualtdata=action.payload;
                    state.status=true;
                })
                builder.addCase(getProductDatadefault.rejected, (state,action)=>{
                    state.status=false;
                    state.error=true;
                })

    }
})

export default defaultsliceshowdata.reducer;