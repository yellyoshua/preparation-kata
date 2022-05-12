export default ({axios}) => ({
    async getCats(req, res, next) {
        try {
            const response = await axios.get('/cats-content.json');
            res.status(200).json({ data: response.data.data });
        } catch (error) {
            next(error);
        }
    }
})