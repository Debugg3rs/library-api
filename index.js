import config from "./utils/config.js";
import express from "express";
import { connect } from "mongoose";

const app = express();

// Connect to MongoDB
console.log("Connecting to MongoDB");
connect(config.MONGODB_URI, {
})
 .then(() => console.log("Connected to MongoDB"))


// Middleware for parsing JSON request bodies
app.use(express.json());



app.listen(config.PORT, () => {
  console.log(`Server is listening on port ${config.PORT}`);

});