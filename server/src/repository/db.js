import mongoose from "mongoose";

export default (mongodb_uri) => {
    return {
        connect() {
            return new Promise((resolve, reject) => {
                const connectionResolver = (err) => {
                    if (err)
                        reject(err);
                    resolve(mongoose.connection);
                };

                mongoose.connect(mongodb_uri, {
                    useNewUrlParser: true,
                }, connectionResolver);
            });
        }
    };
}
