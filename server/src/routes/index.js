import handlers from "../handlers/index.js";

export default (app, { axios, services }) => {
    const {
        catsHandler,
        dogsHandler,
        todosHandler,
    } = handlers({ axios, services });

    app.get("/api/cats", catsHandler.getCats);
    app.get("/api/dogs", dogsHandler.getDogs);
    app.get("/api/todos", todosHandler.getToDos);
    app.post("/api/todos", todosHandler.addTodo);
}