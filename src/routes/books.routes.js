import { Router } from "express";
import {
  getBooks,
  getBook,
  createBook,
  deleteBook,
  updateBook,
} from "../controllers/books.controller.js";

const router = Router();

router.get("/books", getBooks);

router.get("/books/:id", getBook);

router.post("/books", createBook);

router.delete("/books/:id", deleteBook);

router.patch("/books/:id", updateBook);

export default router;
