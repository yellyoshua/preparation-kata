export default (err, req, res, next) => {
    if (err) {
        const message = err.message ? 
            err.message : 
            "Something went wrong";
        return res.status(500).send({ message });
    }
    next(err);
}