import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderProducts: [],
    price: null,
}

const addToCartSlice = createSlice({
    name: 'orderProducts',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.orderProducts = state.orderProducts.filter((prevItems) => prevItems.id !== action?.payload?.id)
            state.orderProducts.push(action.payload)
        },
        removeProduct: (state, action) => {
            state.orderProducts = state.orderProducts.filter(prevProducts => prevProducts.id !== action.payload)
        },
    }
})

export const { addToCart, removeProduct } = addToCartSlice.actions

export default addToCartSlice.reducer 