import { Book } from "../models/book.js";

//Update the updateBook
export const updateBook = async (req, res) => {
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