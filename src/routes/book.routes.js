const { Router } = require("express");
const router = Router();
const booksController = require("../controller/books.controller");

// Obtener todos los libros de un usuario
router.get('/books', booksController.getBooksByUser);

// Obtener un libro específico de un usuario por su ID
router.get('/books', booksController.getBookByUserAndId);

module.exports = router;   