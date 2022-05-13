
export default () => {
    const todos = [];

    return {
        getTodos() {
            return todos;
        },
        addTodo(todo) {
            todos.push(todo);
        },
        removeTodo(todo_id) {
            todos = todos.filter(todo => todo.id !== todo_id);
        },
        updateTodoStatus(todo_id, status) {
            todos = todos.map(todo => {
                if (todo.id === todo_id) {
                    todo.status = status;
                }
                return todo;
            });
        }
    }
}