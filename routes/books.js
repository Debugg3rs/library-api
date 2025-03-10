import { Router } from "express";
import { addBook, addBooks, getBook, getBooks } from "../controllers/books";

export const bookRoutes = Router();

// Define routes
bookRoutes.get("/books", getBooks);
bookRoutes.get("/books/:id", getBooks);
bookRoutes.post("/books", addBooks);
bookRoutes.post("/books/:id", addBooks);

export default bookRoutes;
