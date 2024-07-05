import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products-slice";
import addToCartSlice from "./slices/add-to-cart-slice";

export const store = configureStore({
    reducer: {
        productsSlice,
        addToCartSlice,
    }
}) 