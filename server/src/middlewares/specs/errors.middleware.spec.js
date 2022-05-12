import errorsMiddleware from "../errors.middleware.js";
import { expect, describe, it, jest } from "@jest/globals";

describe("Errors middleware", () => {
    it("should return a 500 status code and a message", () => {
        const error = new Error("Something went wrong");
        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };
        errorsMiddleware(error, req, res);
        expect(res.status.mock.calls).toEqual([[500]]);
        expect(res.send.mock.calls).toEqual([
            [
                {
                    message: "Something went wrong"
                }
            ]
        ]);
    });
    it("should return a 500 with \"Something went wrong\"", () => {
        const error = true;
        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };
        errorsMiddleware(error, req, res);
        expect(res.status.mock.calls).toEqual([[500]]);
        expect(res.send.mock.calls).toEqual([
            [
                {
                    message: "Something went wrong"
                }
            ]
        ]);
    });
    it("should continue if no error", () => {
        const error = null;
        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };
        const next = jest.fn();
        errorsMiddleware(error, req, res, next);
        expect(res.status.mock.calls).toEqual([]);
        expect(res.send.mock.calls).toEqual([]);
        expect(next.mock.calls).toEqual([
            [null]
        ]);
    })
});