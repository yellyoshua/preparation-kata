import todosService from "../todos.service.js";
import { expect, describe, it } from "@jest/globals";

const sampleTodo = {
    id: 1,
    title: 'Learn JavaScript',
    content: 'Learn JavaScript and build a todo app',
    status: 'done',
};

describe("TodosService", () => {
    it("should be add, get and remove todo a todo storage", () => {
        let todosTaskList;
        const toDoService = todosService();

        todosTaskList = toDoService.getTodos();
        expect(todosTaskList.length).toBe(0);
        todosTaskList = toDoService.addTodo(
            sampleTodo
        );
        expect(todosTaskList.length).toBe(1);
        const todoTask = todosTaskList.shift();
        expect(todoTask.id).toBe(1);
        expect(todoTask.title).toBe('Learn JavaScript');
        expect(todoTask.content).toBe('Learn JavaScript and build a todo app');
        expect(todoTask.status).toBe('done');
        todosTaskList = toDoService.removeTodo(1);
        expect(todosTaskList.length).toBe(0);
    });
    it("should be update a todo status", () => {
        const toDoService = todosService();
        const todos = toDoService.addTodo(
            sampleTodo
        );
        expect(todos.shift().status).toBe('done');
        toDoService.updateTodoStatus(1, 'in-progress');
        expect(toDoService.getTodos().shift().status).toBe('in-progress');
    });

    it("should not be update a todo status", () => {
        const toDoService = todosService();
        const todos = toDoService.addTodo(
            sampleTodo
        );
        expect(todos.shift().status).toBe('done');
        expect(() => toDoService.updateTodoStatus(1, 'pending')).toThrow(/Status pending is not avaliable/);
    });
});