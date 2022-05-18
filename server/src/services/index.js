import todosService from "./todos.service.js";

export default () => ({
    todosService: todosService(),
})