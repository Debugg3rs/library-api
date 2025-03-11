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
    const book = await Book.create(value);
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
    // Fetch all books from the database
    const allBooks = await Book.find();
    res
      .status(200)
      .json({ message: "All Books fetched successfully", books: allBooks });
  } catch (error) {
    res.status(304).json({ message: error.message });
  }
};

export const countBooks = async (req, res) => {
  try {
    const booksCount = await Book.countDocuments();
    res.status(200).json({ message: "Total Books", books: countBooks });
  } catch (error) {
    res.json({ message: error.message });
  }
};

//Get a specific book by ID controller
export const getBook = async (req, res) => {
  // Validate the id input field  of the book
  try {
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

export const updateBook = async (req, res) => {
  // Validate the request body of the book
  try {
    // Find the book by its ID and update it with the new data from the request body
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    //return response
    res.status(200).json(book)({
      message: "Book updated successfully",
      book: book,
    });
  } catch (error) {
    res.status(204).json({ message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  // Validate the request body of the book
  try {
    // Find the book by its ID and delete it from the database
    await Book.findByIdAndDelete(req.params.id);
    //return response
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(204).json({ message: error.message });
  }
};
