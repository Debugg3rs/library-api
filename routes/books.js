import { Router } from "express";
import {  addBooks,  getBooks } from "../controllers/books";

export const bookRoutes = Router();

// Define routes
bookRoutes.get("/books", getBooks);
bookRoutes.get("/books/:id", getBooks);
bookRoutes.post("/books", addBooks);


export default bookRoutes;
