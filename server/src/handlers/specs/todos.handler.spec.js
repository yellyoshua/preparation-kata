import todosHandler from "../todos.handler.js";
import { expect, describe, it, jest } from "@jest/globals";

describe("Todos Handler", () => {
    describe("getTodos", () => {
        it("should return an array of todos", async () => {
            const services = {
                todosService: {
                    getTodos: jest.fn().mockReturnValue([
                        { name: "Todo 1" },
                    ])
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };
            todosHandler({ services }).getToDos({}, res);
            expect(res.status.mock.calls).toEqual([[200]]);
            expect(res.json.mock.calls).toEqual([
                [
                    {
                        data: [
                            { name: "Todo 1" },
                        ]
                    }
                ]
            ]);
        });
    });
    describe("addTodo", () => {
        it("should add a todo", async () => {
            const services = {
                todosService: {
                    addTodo: jest.fn().mockImplementation(todo => {
                        return [todo];
                    }),
                }
            };
            const req = { body: { name: "Todo 1", content: "Make a homework" } };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };
            todosHandler({ services }).addTodo(req, res);
            expect(res.status.mock.calls).toEqual([[201]]);
            expect(res.json.mock.calls).toEqual([
                [
                    {
                        data: [
                            { name: "Todo 1", content: "Make a homework" },
                        ]
                    }
                ]
            ]);
        });
    });
});