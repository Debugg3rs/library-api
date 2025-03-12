import logger from "../utils/logger.js";
import config from "../utils/config.js";
export const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

export const errorHandler = (err, req, res, next) => {
  logger.info(`${err.name}: ${err.message}`);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  // Mongoose duplicate key error
  if (err.name === "MongoServerError" && err.code === 11000) {
    const value = Object.keys(err.keyValue)[0];
    err.message = `expected \`${value}\` to be unique`;
    err.statusCode = 400;
  }

  // if (err.code === 11000) {

  //   const value = err.message.match(/(["'])(\\?.)*?\1/)[0]
  //   err.message = `Duplicate field value: ${value}. Please use another value`
  //   err.statusCode = 400
  // }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const errors = Object.values(err.errors).map((val) => val.message);
    err.message = `Invalid input data. ${errors.join(". ")}`;
    err.statusCode = 400;
  }

  // Mongoose CastError (invalid ID)
  if (err.name === "CastError") {
    err.message = `malformatted id: ${err.value}`;
    err.statusCode = 400;
  }

  // Test error response
  if (config.NODE_ENV === "test") {
    return res.status(err.statusCode).json({
      status: err.status,
      message: { error: err.message },
    });
  }

  // Development error response
  if (config.NODE_ENV === "development") {
    return res.status(err.statusCode).json({
      status: err.status,
      message: { error: err.message },
      error: err,
      stack: err.stack,
    });
  }

  // Production error response
  if (config.NODE_ENV === "production") {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    })
  }

  next(err);
};
