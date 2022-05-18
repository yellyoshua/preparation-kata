function getToDos() {
    const API_URL = import.meta.env.VITE_API_URL;
    return fetch(`${API_URL}/api/todos`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => data.data);
}

function addToDo(todo) {
    const API_URL = import.meta.env.VITE_API_URL;
    return fetch(`${API_URL}/api/todos`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    })
    .then(response => response.json())
    .then(data => data.data);
}

function updateToDoStatus(id, status = "") {
    const API_URL = import.meta.env.VITE_API_URL;
    return fetch(`${API_URL}/api/todos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then(response => response.json())
    .then(data => data.data);
}

function removeToDo(todo_id) {
    const API_URL = import.meta.env.VITE_API_URL;
    return fetch(`${API_URL}/api/todos/${todo_id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then(response => response.json())
    .then(data => data.data);
}

export default {
    getToDos,
    addToDo,
    removeToDo,
    updateToDoStatus,
};
