import { randomUUID } from "../utils/index.js";

const AVALIABLE_STATUSES = [
    'done',
    'todo',
    'in-progress'
];

export default () => {
    let todos = [];

    return {
        getTodos() {
            return [...todos];
        },
        addTodo(todo) {
            const shallowCopy = JSON.parse(JSON.stringify(todo));
            shallowCopy.id = 
                shallowCopy.id ?
                shallowCopy.id :
                randomUUID();
            shallowCopy.status = 
                shallowCopy.status ?
                shallowCopy.status :
                AVALIABLE_STATUSES[1];
            todos.push(shallowCopy);
            return this.getTodos();
        },
        removeTodo(todo_id) {
            todos = todos.filter(todo => todo.id !== todo_id);
            return this.getTodos();
        },
        updateTodoStatus(todo_id, status = "") {
            if (!todo_id || !status) return;
            status = status.toLowerCase().trim();
            if (!AVALIABLE_STATUSES.includes(status))
                throw new Error(`Status ${status} is not avaliable`);
            
            todos = todos.map(todo => {
                if (todo.id === todo_id)
                    todo.status = status;
                return todo;
            });

            return this.getTodos();
        }
    }
}