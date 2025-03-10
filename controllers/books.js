export const updateBook = async (req, res, next) => {
  try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
      res.status(200).json(book)('message', 'Book updated successfully')
  } catch (error) {
    res.status(204).json({ message: error.message })
  }
};
 
export const deleteBook = async (req, res, next) => {
  try {
    await Book.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: 'Book deleted successfully' })
  } catch (error) {
    res.status(204).json({ message: error.message })
  }
};