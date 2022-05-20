import catsHandler from "../cats.handler.js";
import petsService from "../../services/pets.service.js";
import { expect, describe, it, jest } from "@jest/globals";

describe("Cats handler", () => {
    describe("getCats", () => {
        it("should return cats", async () => {
            const axios = {};
            const petsSrv = petsService({
                petsRepository: {
                    find: jest.fn().mockResolvedValue([
                        { id: 1, name: "Misifus" },
                    ])
                }
            });
            const services = {
                petsService: petsSrv
            }
            const req = {};
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn(),
            };
            await catsHandler({ axios, services }).getCats(req, res);
            expect(res.status.mock.calls).toEqual([[200]]);
            expect(res.json.mock.calls).toEqual([
                [
                    {
                        data: [
                            { id: 1, name: "Misifus" }
                        ]
                    }
                ]
            ]);
        });
        it("should the request to the api failed", async () => {
            const axios = {};
            const petsSrv = petsService({
                petsRepository: {
                    find: jest.fn().mockRejectedValue(new Error("Failed to get pets")),
                }
            });
            const services = {
                petsService: petsSrv
            }
            const req = {};
            const res = {};
            const next = jest.fn();
            await catsHandler({ axios, services }).getCats(req, res, next);
            expect(next.mock.calls).toEqual([[new Error("Failed to get pets")]]);
        });
    });
});