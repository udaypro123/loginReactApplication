import {  createSlice } from "@reduxjs/toolkit";


const showprodutdetailsSlice=createSlice({
    name:'productdata',
    initialState:{
        prodata:[],
        homeitems:[],
    },
    reducers:{
        additem(state,action){
            state.prodata.push(action.payload)
        },
        removeItem(state,action){
            // state=state.prodata.filter((item)=>item.id !==action.payload)
            state.homeitems.splice(action.payload,1)
        },
        
        addhomeitem(state,action){
            state.homeitems.push(action.payload)
        },

       
       
    },
    
})

export default showprodutdetailsSlice.reducer;
export const {additem,removeItem,addhomeitem}= showprodutdetailsSlice.actions;