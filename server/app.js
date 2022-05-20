import 'dotenv/config.js';
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors";
import routes from "./src/routes/index.js";
import middlewares from './src/middlewares/index.js';
import configureServices from './src/services/index.js';
import configureDatabase from './src/repository/db.js';
import repository from './src/repository/index.js';
import { PetsModel } from './src/models/index.js';

const API_URL = process.env.API_URL;
const DATABASE_URI = process.env.DATABASE_URI;
const PORT = process.env.PORT || 5000;

const services = configureServices({
    petsRepository: repository(PetsModel),
});
const db = configureDatabase(DATABASE_URI);
axios.defaults.baseURL = API_URL;

const app = express();
const middlw = middlewares();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app, { axios, services });
app.use(middlw.errorsMiddleware);


function startServer() {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}

function onErrorConnection(err) {
    console.log(err);
}

db.connect()
    .then(startServer)
    .catch(onErrorConnection);

export default app;