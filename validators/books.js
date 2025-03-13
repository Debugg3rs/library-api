import Joi from "joi";

export const addBookValidator = Joi.object({
  title: Joi.string().min(3).max(255).required(),
  author: Joi.string().min(3).max(255).required(),
  publishedYear: Joi.number()
    .integer()
    .min(1000)
    .max(new Date().getFullYear())
    .optional(),
  genre: Joi.string()
    .valid(
      "Fiction",
      "Non-Fiction",
      "Mystery",
      "Fantasy",
      "Science Fiction",
      "Biography",
      "History",
      "Romance",
      "Thriller",
      "Horror"
    )
    .required(),
  isbn: Joi.string()
    .pattern(/^[0-9\-]+$/)
    .optional(), // ISBN format validation
  summary: Joi.string().max(1000).optional(),
  language: Joi.string().max(50).default("English"),
  pageCount: Joi.number().integer().min(1).optional(),
  publisher: Joi.string().max(255).optional(),
  coverImage: Joi.string().optional(), // Ensure it's a valid URL
  availabilityStatus: Joi.string()
    .valid("Available", "Borrowed", "Reserved", "Lost")
    .default("Available"),
  availableCopies: Joi.number().integer().min(0).default(1),
  ratings: Joi.number().min(0).max(5).default(0),
  addedBy: Joi.string().optional(), // User ID of the person who added the book / to be required in the future
});

export const updateBookValidator = Joi.object({
  title: Joi.string().min(3).max(255).optional(),
  author: Joi.string().min(3).max(255).optional(),
  publishedYear: Joi.number()
    .integer()
    .min(1000)
    .max(new Date().getFullYear())
    .optional(),
  genre: Joi.string()
    .valid(
      "Fiction",
      "Non-Fiction",
      "Mystery",
      "Fantasy",
      "Science Fiction",
      "Biography",
      "History",
      "Romance",
      "Thriller",
      "Horror"
    )
    .optional(),
  isbn: Joi.string()
    .pattern(/^[0-9\-]+$/)
    .optional(), // ISBN format validation
  summary: Joi.string().max(1000).optional(),
  language: Joi.string().max(50).default("English"),
  pageCount: Joi.number().integer().min(1).optional(),
  publisher: Joi.string().max(255).optional(),
  coverImage: Joi.string().optional(), // Ensure it's a valid URL
  availabilityStatus: Joi.string()
    .valid("Available", "Borrowed", "Reserved", "Lost")
    .default("Available"),
  availableCopies: Joi.number().integer().min(0).default(1),
  ratings: Joi.number().min(0).max(5).default(0),
  addedBy: Joi.string().optional(), // User ID of the person who added the book / to be required in the future
});

