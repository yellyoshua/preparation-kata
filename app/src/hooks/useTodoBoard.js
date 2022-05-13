import { useEffect, useState } from "react";

export default function useTodoBoard() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchTodos = () => {
        setLoading(true);
        setTimeout(() => {
            setTodos([
                {
                    id: 1,
                    title: 'Learn React',
                    text: 'Learn React Hooks',
                    status: 'done',
                },
                {
                    id: 2,
                    title: 'Learn Angular',
                    text: 'Learn Angular Hooks',
                    status: 'pending',
                },
                {
                    id: 3,
                    title: 'Learn Vue',
                    text: 'Learn Vue Hooks',
                    status: 'canceled',
                }
            ]);
            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return { todos, loading, fetchTodos };
}