import petsService from "../pets.service.js";
import { expect, describe, it } from "@jest/globals";

describe("PetsService", () => {
    it("should be get all pets from storage", async () => {
        const petsSrv = petsService({
            petsRepository: {
                find: jest.fn().mockResolvedValue([
                    { id: 1, name: "Misifus" },
                ])
            }
        });
        const pets = await petsSrv.getPets();
        expect(pets.length).toBe(1);
        expect(pets).toEqual([ { id: 1, name: "Misifus" } ]);
    });
});