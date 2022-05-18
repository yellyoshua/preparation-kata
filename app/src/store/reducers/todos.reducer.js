import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import todosService from "../../services/todos.service";

const initialState = {
    loading: true,
    todos: [],
};

export const fetchToDosFromApi = createAsyncThunk(
    "todos/getToDos",
    async () => {
        const todos = await todosService.getToDos();

        return { todos };
    }
);

export const addTodoFromApi = createAsyncThunk(
    "todos/addTodo",
    async (todo, { dispatch }) => {
        const newTodo = await todosService.addToDo(todo);
        dispatch(fetchToDosFromApi());
        return { newTodo };
    }
)

const toDosSlices = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchToDosFromApi.fulfilled, (state, action) => {
            state.todos = action.payload.todos;
            state.loading = false;
        });
        builder.addCase(addTodoFromApi.fulfilled);
    }
});

export default toDosSlices.reducer;
