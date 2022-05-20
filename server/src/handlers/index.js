import catsHandler from "./cats.handler.js";
import dogsHandler from "./dogs.handler.js";
import todosHandler from "./todos.handler.js";

export default ({axios, services}) => ({
    catsHandler: catsHandler({axios, services}),
    dogsHandler: dogsHandler({axios, services}),
    todosHandler: todosHandler({axios, services}),
});