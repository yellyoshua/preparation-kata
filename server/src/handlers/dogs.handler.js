export default ({ axios }) => ({
    async getDogs(req, res, next) {
        try {
            const response = await axios.get("/dogs-content.json");
            res.status(200).json({ data: response.data.data });
        } catch (error) {
            next(error);
        }
    }
})