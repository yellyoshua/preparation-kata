import todosService from "./todos.service.js";
import petsService from "./pets.service.js";

export default (repositories) => ({
    todosService: todosService(),
    petsService: petsService(repositories),
})