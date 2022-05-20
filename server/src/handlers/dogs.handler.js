export default ({ axios, services }) => {
    const {
        petsService,
    } = services;

    return {
        async getDogs(req, res, next) {
            try {
                const pets = await petsService.getPetsByType(
                    "dog"
                );
                res.status(200).json({ data: pets });
            } catch (error) {
                next(error);
            }
        }
    };
}