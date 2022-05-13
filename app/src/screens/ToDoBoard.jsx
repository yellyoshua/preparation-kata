import Loading from "../components/Loading";
import ToDoList from "../components/ToDo/ToDoList";
import useTodoBoard from "../hooks/useTodoBoard";

export default function ToDoBoard() {
    const { todos, loading, fetchTodos } = useTodoBoard();
    return (
        <div className="todo-board">
            <div className="todo-board__header">
                <h1>To Do Board</h1>
            </div>
            <div className="todo-board__content">
                <Loading isLoading={loading}>
                    <ToDoList todos={todos} fetchTodos={fetchTodos} />
                </Loading>
            </div>
        </div>
    );
}