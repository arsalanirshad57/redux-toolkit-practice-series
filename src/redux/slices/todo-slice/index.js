import { createSlice,  } from "@reduxjs/toolkit";
import { getAllTodos } from "./api-function";

const initialState = {
    isLoading: false,
    todos: [],
    isError: false,
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllTodos.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getAllTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.todos = action.payload;
        });
        builder.addCase(getAllTodos.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        });
    },
});

export default todoSlice.reducer;