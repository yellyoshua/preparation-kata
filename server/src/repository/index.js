export default (model) => ({
    find(filters = {}) {
        return model.find(filters);
    },
    createMany(many) {
        return model.insertMany(many);
    },
    dropCollection() {
        return model.collection.drop();
    }
})