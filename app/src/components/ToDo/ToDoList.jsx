import ToDoCard from "./ToDoCard"

export default function ToDoList({ todos = [], fetchTodos }) {
    return (
        <div>
            <div className="todo-fetch">
                <button className="todo-fetch__button" onClick={fetchTodos}>Fetch ToDos</button>
            </div>
            <div className="todo-list">
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