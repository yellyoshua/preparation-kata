export default ({axios, services}) => {
    const {
        petsService,
    } = services;

    return {
        async getCats(req, res, next) {
            try {
                const pets = await petsService.getPetsByType(
                    "cat"
                );
                res.status(200).json({ data: pets });
            } catch (error) {
                next(error);
            }
        }
    }
};