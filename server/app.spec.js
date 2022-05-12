import { describe, it, jest } from "@jest/globals";
import supertest from "supertest";
import app from "./app.js";

describe("App", () => {
    describe("GET /api/cats", () => {
        it("should return an array of cats", async () => {
            const request = await supertest(app)
                .get("/api/cats")
                .set("Accept", "application/json");
            expect(request.status).toEqual(200);
            expect(request.body.data.length).toEqual(100);
        });
    });
    describe("GET /api/dogs", () => {
        it("should return an array of dogs", async () => {
            const request = await supertest(app)
                .get("/api/dogs")
                .set("Accept", "application/json");
            expect(request.status).toEqual(200);
            expect(request.body.data.length).toEqual(100);
        });
    });
})