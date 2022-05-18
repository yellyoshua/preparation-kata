import 'dotenv/config.js';
import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import cors from "cors";
import routes from "./src/routes/index.js";
import middlewares from './src/middlewares/index.js';
import configureServices from './src/services/index.js';

const services = configureServices();

const API_URL = process.env.API_URL;

axios.defaults.baseURL = API_URL;
const app = express();
const middlw = middlewares();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app, { axios, services });
app.use(middlw.errorsMiddleware);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

export default app;