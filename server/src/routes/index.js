import handlers from "../handlers/index.js";

export default (app, { axios }) => {
    const {
        catsHandler,
        dogsHandler,
    } = handlers({ axios });

    app.get("/api/cats", catsHandler.getCats);
    app.get("/api/dogs", dogsHandler.getDogs);
}