import { Router } from "express";
import {
  getBook,
  getBooks,
  postBook,
  updateBook,
  deleteBook,
} from "../controllers/books.js";

const bookRouter = Router();

// Define routes
bookRouter.get("/books", getBooks);
bookRouter.get("/books/:id", getBook);
bookRouter.post("/books", postBook);

bookRouter.patch("books/:id", updateBook);
bookRouter.delete("books/:id", deleteBook);

export default bookRouter;
