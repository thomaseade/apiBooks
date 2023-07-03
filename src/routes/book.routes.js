const { Router } = require("express");
const router = Router();
const booksController = require("../controller/books.controller");

// Obtener todos los libros de un usuario
router.get('/books', booksController.getBooksByUser);

// Obtener un libro específico de un usuario por su ID
router.get('/books/user', booksController.getBookByUserAndId);

// Añadir un libro asociado a un usuario
router.post('/books', booksController.addBookToUser);

 //Actualizar un libro de la BBDD
router.put('/books', booksController.updateBook);

//Borrar libro de la BBDD

router.delete('/books', booksController.deleteBookById);


module.exports = router;   