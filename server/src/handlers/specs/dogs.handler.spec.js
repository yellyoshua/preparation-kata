import dogsHandler from '../dogs.handler.js';
import { expect, describe, it, jest } from "@jest/globals";
import petsService from '../../services/pets.service.js';

describe("Dogs Handler", () => {
    describe("getDogs", () => {
        it("should return an array of dogs", async () => {
            const axios = {};
            const petsSrv = petsService({
                petsRepository: {
                    find: jest.fn().mockResolvedValue([
                        { id: 1, name: "Pluto" },
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
            await dogsHandler({ axios, services }).getDogs(req, res);
            expect(res.status.mock.calls).toEqual([[200]]);
            expect(res.json.mock.calls).toEqual([
                [
                    {
                        data: [
                            { id: 1, name: "Pluto" }
                        ]
                    }
                ]
            ]);
        });
        it("should return an error if the request fails", async () => {
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
            await dogsHandler({ axios, services }).getDogs(req, res, next);
            expect(next.mock.calls).toEqual([[new Error("Failed to get pets")]]);
        });
    });
})