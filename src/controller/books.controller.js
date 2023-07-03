const { pool } = require('../database');

// Obtener todos los libros de un usuario
async function getBooksByUser(req, res) {
    const { id_user } = req.query;
    const sql = 'SELECT * FROM book WHERE id_user = ?';
    const params = [id_user];
  
    try {
      const [rows] = await pool.query(sql, params);
      res.send(rows);
    } catch (error) {
      res.status(500).send(error);
    }
}
 
// Obtener un libro específico de un usuario por su ID

async function getBookByUserAndId(req, res) {
  const { id_user, id_book } = req.query;
  const sql = 'SELECT * FROM book WHERE id_user = ? AND id_book = ?';
  const params = [id_user, id_book];
 console.log(params);

  try {
    const [rows] = await pool.query(sql, params);
    res.send(rows[0]);
  } catch (error) {
    res.status(500).send(error);
  }
}


// Añadir un nuevo libro asociado a un usuario
async function addBookToUser(req, res) {
  const { id_user, title, type, author, price, photo } = req.body;

  const sql = 'INSERT INTO book (id_user, title, type, author, price, photo) VALUES (?, ?, ?, ?, ?, ?)';
  const params = [id_user, title, type, author, price, photo];

  try {
    await pool.query(sql, params);
    res.status(201).json({ message: 'Libro agregado correctamente' });
  } catch (error) {
    res.status(500).send(error);
  }
}

// Actualizar la información de un libro
async function updateBook(req, res) {
  const { id_book, title, type, author, price, photo } = req.body;

  const sql = 'UPDATE book SET title = ?, type = ?, author = ?, price = ?, photo = ? WHERE id_book = ?';
  const params = [title, type, author, price, photo, id_book];

  try {
      await pool.query(sql, params);
      res.json({ message: 'Información del libro actualizada correctamente' });
  } catch (error) {
      res.status(500).send(error);
  }
}


// Eliminar un libro de la BBDD
async function deleteBookById(req, res) {
  const { id_book } = req.query;
  const sql = 'DELETE FROM book WHERE id_book = ?';
  const params = [id_book];

  try {
    await pool.query(sql, params);
    res.send({ success: true, message: 'Libro eliminado correctamente' });
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
    getBooksByUser,
    getBookByUserAndId,
    addBookToUser,
    updateBook,
    deleteBookById,
};