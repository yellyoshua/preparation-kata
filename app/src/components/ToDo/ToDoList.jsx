import ToDoCard from "./ToDoCard"

export default function ToDoList({ todos = [], fetchTodos }) {
    return (
        <div className="grid justify-center">
                <button
                    className="bg-slate-700 p-2 rounded-md text-white"
                    onClick={fetchTodos}
                >Fetch ToDos</button>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2"
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