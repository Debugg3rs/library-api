import cors from 'cors';
import express from "express";
import { connect } from "mongoose";
import { errorHandler, unknownEndpoint } from "./middlewares/errors.js";
import bookRouter from "./routes/books.js";
import config from "./utils/config.js";
import logger from './utils/logger.js';


// SAVEFILESORG_API_KEY = '1570|JEKsYZwbr6M8ieFHFW5ohl25vcdYewwAgJNVyqiO


const app = express();

// Connect to MongoDB
logger.info("Connecting to MongoDB");
connect(config.MONGODB_URI, {
})
 .then(() => logger.info("Connected to MongoDB"));


// Global middlewares
app.use(cors());
app.use(express.json());

// App Routes
app.use("/api/v1", bookRouter);

// Middleware to catch request from unknown endpoints
app.use(unknownEndpoint);

app.use(errorHandler);

app.listen(config.PORT, () => {
  logger.info(`Server is listening on port ${config.PORT}`);
});