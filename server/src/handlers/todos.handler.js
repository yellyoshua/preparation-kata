export default ({axios, services}) => ({
    getToDos(req, res, next) {
        try {
            const todos = services.todosService.getTodos();
            res.status(200).json({ data: todos });
        } catch (error) {
            next(error);
        }
    },
    addTodo(req, res, next) {
        try {
            const todos = services.todosService.addTodo(req.body);
            res.status(201).json({ data: todos });
        } catch (error) {
            next(error);
        }
    }
})