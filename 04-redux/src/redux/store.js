import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./reducers/productsSLice"
import cartSlice from "./reducers/cartSlice"

export const store =configureStore({
    reducer:{
        products:productsSlice,
        cart: cartSlice
    }
})