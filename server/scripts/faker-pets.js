import faker from "@faker-js/faker";
import fs from "fs";

const generateDogs = (n_dogs) => {
    const dogs = [];
    for (let i = 0; i < n_dogs; i++) {
        const newDog = {
            name: faker.animal.dog(),
            age: faker.random.numeric(2),
            breed: faker.helpers.arrayElement(["Pooy", "Poodle", "Pug", "Puggle", "Puggle", "Puggle"]),
            color: faker.helpers.arrayElement(["black", "white", "gray", "brown", "orange"]),
            weight: faker.random.numeric(2),
            image: faker.image.animals(),
            description: faker.lorem.paragraph(1)
        };
        dogs.push(newDog);
    }
    return dogs;
}
const generateCats = (n_cats) => {
    const cats = [];
    for (let i = 0; i < n_cats; i++) {
        const newCat = {
            name: faker.animal.cat(),
            age: faker.random.numeric(2),
            breed: faker.helpers.arrayElement(["Persian", "Siamese", "Maine", "Bengal", "Ragdoll"]),
            color: faker.helpers.arrayElement(["black", "white", "gray", "brown", "orange"]),
            weight: faker.random.numeric(2),
            image: faker.image.cats(),
            description: faker.lorem.paragraph(1),
        };
        cats.push(newCat);
    }
    return cats;
}

export { generateDogs, generateCats };