import 'dotenv/config.js';
import configureDatabase from "../src/repository/db.js";
import { PetsModel } from "../src/models/index.js";
import repository from "../src/repository/index.js"
import { generateDogs, generateCats } from "./faker-pets.js";
const db = configureDatabase(process.env.DATABASE_URI);

const petsRepository = repository(PetsModel);

async function startSeeding() {
    await db.connect()
        .then(() => console.log("Connected to MongoDB"));
    console.log("Dropping pets collection...");
    await petsRepository.dropCollection();
    console.log("Dropped pets collection");
    const dogs = generateDogs(100);
    const cats = generateCats(100);
    console.log("Seeding data...");
    const pets = [
        ...dogs.map(dog => ({...dog, type: "dog"})),
        ...cats.map(cat => ({...cat, type: "cat"})),
    ];
    await petsRepository.createMany(pets);
    console.log("End seeding data");
    process.exit(0);
}

startSeeding();