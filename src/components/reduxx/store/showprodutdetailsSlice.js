import {  createSlice } from "@reduxjs/toolkit";


const showprodutdetailsSlice=createSlice({
    name:'productdata',
    initialState:{
        prodata:[],
        homeitems:[],
        cartitem:[],
    },
    reducers:{
        additem(state,action){
            state.prodata.push(action.payload)
        },
        removeItem(state,action){
            // state=state.prodata.filter((item)=>item.id !==action.payload)
            state.cartitem.splice(action.payload,1)
        },
        
        addhomeitem(state,action){
            state.homeitems.push(action.payload)
        },

        cartitems(state,action){
            state.cartitem.push(action.payload)
        },

       
       
    },
    
})

export default showprodutdetailsSlice.reducer;
export const {additem,removeItem,addhomeitem,cartitems}= showprodutdetailsSlice.actions;