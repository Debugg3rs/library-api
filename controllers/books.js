import { Book } from "../models/book.js";
import { addBookValidator } from "../validators/books.js";

//Add book controller
export const postBook = async (req, res) => {
  // Validate the request body of the book
  try {
    const { error, value } = addBookValidator.validate(req.body, {
      abortEarly: true,
    });
    if (error) {
      return res.status(422).json(error);
    }
    //Save book information in database
    const book = await Book.create(req.body);
    //return response
    res.status(201).json({ message: "Book added successfully", book: book });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Get all books  controller
export const getBooks = async (req, res) => {
  // Validate the request body of the book
  try {
    const { error, value } = addBookValidator.validate(
      {},
      {
        abortEarly: true,
      }
    );
    if (error) {
      return res.status(422).json(error);
    }
    // Fetch all books from the database
    const allBooks = await Book.find();
    res
      .status(200)
      .json({ message: "All Books fetched successfully", books: allBooks });
  } catch (error) {
    res.status(304).json({ message: error.message });
  }
};
//Get a specific book by ID controller
export const getBook = async (req, res) => {
  // Validate the id input field  of the book
  try {
    const { error, value } = addBookValidator.validate(req.params.id, {
      abortEarly: true,
    });
    if (error) {
      return res.status(422).json(error);
    }
    // Fetch a specific book from the database
    const singleBook = await Book.findById(req.params.id);
    //return response
    res
      .status(200)
      .json({ message: "Book fetched successfully", book: singleBook });
  } catch (error) {
    res.status(304).json({ message: error.message });
  }
};

export const updateBook = async (req, res, next) => {
  // Validate the request body of the book
  try {
    const { error, value } = addBookValidator.validate(
      (req.params.id,
      req.body,
      {
        new: true,
      }),
      {
        abortEarly: true,
      }
    );
    if (error) {
      return res.status(422).json(error);
    }
    // Find the book by its ID and update it with the new data from the request body
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    //return response
    res.status(200).json(book)("message", "Book updated successfully");
  } catch (error) {
    res.status(204).json({ message: error.message });
  }
};

export const deleteBook = async (req, res, next) => {
  // Validate the request body of the book
  try {
    const { error, value } = addBookValidator.validate(req.params.id, {
      abortEarly: true,
    });
    if (error) {
      return res.status(422).json(error);
    }
    // Find the book by its ID and delete it from the database
    await Book.findByIdAndDelete(req.params.id);
    //return response
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(204).json({ message: error.message });
  }
};
