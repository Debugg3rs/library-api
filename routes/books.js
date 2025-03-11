import { Router } from "express";
import { getBook, getBooks, postBooks, updateBook, deleteBook } from "../controllers/books.js";


const bookRoutes = Router();

// Define routes
bookRoutes.get("/books", getBooks );
bookRoutes.get("/books/:id", getBook);
bookRoutes.post("/books", postBooks);

booksRouter.patch("books/:id", updateBook)
booksRouter.delete("books/:id", deleteBook)

export default bookRoutes;
