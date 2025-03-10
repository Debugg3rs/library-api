import { Router } from "express";
import { updateBook, deleteBook } from "../controllers/books.js";

export const booksRouter = Router()
booksRouter.patch("books/:id", updateBook)
booksRouter.delete("books/:id", deleteBook)