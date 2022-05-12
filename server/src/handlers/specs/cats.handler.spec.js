import catsHandler from "../cats.handler.js";
import { expect, describe, it, jest } from "@jest/globals";

describe("Cats handler", () => {
    describe("getCats", () => {
        it("should return cats", async () => {
            const axios = {
                get: jest.fn().mockResolvedValue({
                    data: {
                        data: [
                            { name: "Agatha" }
                        ]
                    }
                })
            };
            const req = {};
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };
            await catsHandler({ axios }).getCats(req, res);
            expect(res.status.mock.calls).toEqual([[200]]);
            expect(res.json.mock.calls).toEqual([
                [
                    {
                        data: [
                            { name: "Agatha" }
                        ]
                    }
                ]
            ]);
        });
        it("should the request to the api failed", async () => {
            const axios = {
                get: jest.fn().mockRejectedValue(new Error("Request failed")),
            };
            const req = {};
            const res = {};
            const next = jest.fn();
            await catsHandler({ axios }).getCats(req, res, next);
            expect(next.mock.calls).toEqual([[new Error("Request failed")]]);
        });
    });
});