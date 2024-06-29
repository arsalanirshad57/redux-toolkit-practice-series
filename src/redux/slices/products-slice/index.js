import { createSlice } from "@reduxjs/toolkit";

import { getAllProducts } from './api-function'

const initialState = {
    isLoading: false,
    products: [],
    isError: false,
}


const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.products = action.payload
        })
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.isError = true
            console.log('Error', action.payload);
        })
    }

})

export default productsSlice.reducer;