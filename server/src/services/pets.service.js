export default (repositories) => {
    const {
        petsRepository,
    } = repositories;

    return {
        async getPets() {
            return petsRepository.find({});
        },
        async getPetsByType(petType) {
            return petsRepository.find({ type: { $in : [petType] }});
        }
    }
}