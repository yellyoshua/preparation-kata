import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchToDosFromApi, addTodoFromApi } from "../store/reducers/todos.reducer";

export default function useTodoBoard() {
    const dispatch = useDispatch();
    const {todos, loading} = useSelector(state => state.todos);
    
    const fetchTodos = () => {
        dispatch(fetchToDosFromApi());
    }

    const addTodo = (todo) => {
        dispatch(addTodoFromApi(todo));
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    return { todos, loading, fetchTodos, addTodo };
}