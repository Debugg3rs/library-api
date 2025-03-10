
//Add book controller
export const addBooks = async(req, res, next) => {
    try {
        const book = await Book.create(req.body)
        await book.save()
        res.status(201).json({message: "Book added successfully"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
    }


//Fetch book controller
export const getBooks = async(req, res, next) => {
    try {
        const book = await Book.find(req.body)
        res.status(200).json({message: "Book fetched successfully"})
    } catch (error) {
       res.status(304).json({message: error.message})
    }
    }







export const updateBook = async(req, res, next) =>{
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.status(200).json(message: "Book updated successfully")
    } catch (error) {
        res.status(204).json({message: error.message})
        
    }
}
