import { Book } from "../models/book.js";
import { addBookValidator, updateBookValidator } from "../validators/books.js";

//Add book controller
export const postBook = async (req, res, next) => {
  // Validate the request body of the book
  try {
    const { error, value } = addBookValidator.validate({
      ...req.body,
      coverImage: req.file?.filename,
    });
    if (error) {
      return res.status(422).json(error);
    }
    //Save book information in database
    const newBook = await Book.create(value);
    //return response
    res.status(201).json({ message: "Book added successfully", book: newBook });
  } catch (error) {
    next(error);
  }
};

//Get all books  controller
export const getBooks = async (req, res, next) => {
  // Validate the request body of the book
  try {
    // Fetch all books from the database
    const allBooks = await Book.find();
    res
      .status(200)
      .json({ message: "All Books fetched successfully", books: allBooks });
  } catch (error) {
    next(error);
  }
};

export const countBooks = async (req, res, next) => {
  try {
    const booksCount = await Book.countDocuments({});
    res.status(200).json({ message: "Total Books", books: booksCount });
  } catch (error) {
    next(error);
  }
};

//Get a specific book by ID controller
export const getBook = async (req, res, next) => {
  // Validate the id input field  of the book
  try {
    // Fetch a specific book from the database
    const singleBook = await Book.findById(req.params.id);
    //return response
    res
      .status(200)
      .json({ message: "Book fetched successfully", book: singleBook });
  } catch (error) {
    next(error);
  }
};

export const updateBook = async (req, res, next) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    // Validate the request body of the book
    const { error, value } = updateBookValidator.validate({
      ...req.body,
      coverImage: req.file?.filename,
    });
    if (error) {
      return res.status(422).json(error);
    }
    // Find the book by its ID and update it with the new data from the request body
    const updatedBook = await Book.findByIdAndUpdate(bookId, value, {new: true});
    //return response
    res.status(200).json({
      message: "Book updated successfully",
      book: updatedBook,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBook = async (req, res, next) => {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    // Find the book by its ID and delete it from the database
    await Book.findByIdAndDelete(req.params.id);
    //return response
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    next(error);
  }
};
