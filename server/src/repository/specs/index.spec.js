import repository from "../index.js";
import { describe, it, jest, expect } from "@jest/globals";

describe("Repository", () => {
    it("should be get all from storage", async () => {
        const mockModel = {
            find: jest.fn().mockResolvedValue([
                { id: 1, name: "Misifus" },
            ]),
        };
        const petsService = repository(mockModel);
        const pets = await petsService.find({});
        expect(pets.length).toBe(1);
        expect(pets).toEqual([ { id: 1, name: "Misifus" } ]);
        expect(mockModel.find.mock.calls).toEqual([[{}]]);
    });
});