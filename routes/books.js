import { Router } from "express";
import { getBook, getBooks, postBooks } from "../controllers/books";


export const bookRoutes = Router();

// Define routes
bookRoutes.get("/books", getBooks );
bookRoutes.get("/books/:id", getBook);
bookRoutes.post("/books", postBooks);


export default bookRoutes;
