import dogsHandler from '../dogs.handler.js';
import { expect, describe, it, jest } from "@jest/globals";

describe("Dogs Handler", () => {
    describe("getDogs", () => {
        it("should return an array of dogs", async () => {
            const axios = {
                get: jest.fn().mockResolvedValue({ 
                    data: {
                        data: [
                            { name: "Pluto" }
                        ]
                    }
                }),
            };
            const req = {};
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };
            await dogsHandler({ axios }).getDogs(req, res);
            expect(res.status.mock.calls).toEqual([[200]]);
            expect(res.json.mock.calls).toEqual([
                [
                    {
                        data: [
                            { name: "Pluto" }
                        ]
                    }
                ]
            ]);
        });
        it("should return an error if the request fails", async () => {
            const axios = {
                get: jest.fn().mockRejectedValue(new Error("Request failed")),
            };
            const req = {};
            const res = {};
            const next = jest.fn();
            await dogsHandler({ axios }).getDogs(req, res, next);
            expect(next.mock.calls).toEqual([[new Error("Request failed")]]);
        });
    });
})