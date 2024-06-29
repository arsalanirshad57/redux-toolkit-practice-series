import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk('getAllProducts', async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    return response.json()
})