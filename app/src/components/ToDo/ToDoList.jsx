import ToDoCard from "./ToDoCard"
import useTodoBoard from "../../hooks/useTodoBoard";

export default function ToDoList() {
    const { todos, fetchTodos } = useTodoBoard();
    return (
        <div className="grid justify-center">
                <button
                    className="bg-slate-700 p-2 rounded-md text-white"
                    onClick={fetchTodos}
                >Fetch ToDos</button>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-3"
            >
                {todos.map((todo, i) => {
                    return (
                        <ToDoCard
                        key={`${todo.id}-${i}`}
                        todo={todo}
                        />
                        );
                    })}
            </div>
        </div>
    );
}