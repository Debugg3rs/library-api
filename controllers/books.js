import { Book } from "../models/book.js";

//Add book controller
export const postBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ message: "Book added successfully", book: book});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Get all books  controller
export const getBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();
    res.status(200).json({ message: "All Books fetched successfully", books: allBooks });
  } catch (error) {
    res.status(304).json({ message: error.message });
  }

}
  //Get a specific book by ID controller
export const getBook = async(req, res) =>{
       try {
        const singleBook = await Book.findById(req.params.id)
        res.status(200).json({ message: "Book fetched successfully", book: singleBook });
       } catch (error) {
        res.status(304).json({ message: error.message });
       }
  }

export const updateBook = async (req, res, next) => {
  try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.status(200).json(book)({ message: "Book updated successfully", book: book })
  } catch (error) {
    res.status(204).json({ message: error.message })
  }
};

//Update the deleteBook(controller)
export const deleteBook = async (req, res) => {
  try {
   const book =  await Book.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: "Book updated successfully", book: book })
  } catch (error) {
    res.status(204).json({ message: error.message })
  }
};
