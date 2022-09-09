import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getTodos = createAsyncThunk("todoList/getTodos", async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let json = await response.json();
// alert(JSON.stringify (json));
  return json;
});

const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    todos: [],
    lastFetched:null,
    status:null
  },
  extraReducers: {
    [getTodos.fulfilled]: (state, action) => {
      state.todos = action.payload;
     state.lastFetched=new Date()
    },
    [getTodos.pending]: (state) => {
      state.status = "Fetching todos. Please wait a moment...";
    },
    [getTodos.rejected]: (state) => {
      state.status = "Failed to fetch data...";
    },
  
  }
});

export default todoListSlice.reducer;
