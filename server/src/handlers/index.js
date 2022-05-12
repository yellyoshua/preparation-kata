import catsHandler from "./cats.handler.js";
import dogsHandler from "./dogs.handler.js";

export default ({axios}) => ({
    catsHandler: catsHandler({axios}),
    dogsHandler: dogsHandler({axios}),
});