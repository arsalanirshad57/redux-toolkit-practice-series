import { createAsyncThunk } from "@reduxjs/toolkit";


export const getAllTodos = createAsyncThunk('getAllTodos', async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    return response.json()
})