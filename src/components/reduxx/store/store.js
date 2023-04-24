import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice'
import productSlice from './productSlice'
import showprodutdetailsSlice from './showprodutdetailsSlice'
import deaultdatashowsilce from './deaultdatashowsilce'
import homepageSlice from './homepageSlice'


export const store=configureStore({
    reducer:{
        usersdata:userSlice,
        product:productSlice,
        productdata:showprodutdetailsSlice,
        showdata:deaultdatashowsilce,
        homepagedata:homepageSlice,
    }
})
