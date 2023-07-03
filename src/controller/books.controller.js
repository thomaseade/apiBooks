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

  try {
    const [rows] = await pool.query(sql, params);
    res.send(rows);
  } catch (error) {
    res.send(error);
  }
}
module.exports = {
    getBooksByUser,
    getBookByUserAndId,
};