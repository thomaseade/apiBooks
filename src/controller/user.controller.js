const { pool } =  require('../database');

async function registerUser(req, res) {
    const { name, last_name, email, photo, password } = req.body;
    const sql = 'INSERT INTO user (name, last_name, email, photo, password) VALUES (?, ?, ?, ?, ?)';
    const params = [name, last_name, email, photo, password];
  
    try {
      const [result] = await pool.query(sql, params);
      res.send(result);
    } catch (error) {
      res.send(error);
    }
  } 


 
  async function loginUser(req, res) {
    const { email, password } = req.body;
    const sql = 'SELECT Id_user, name, last_name, email, photo FROM user WHERE email = ? AND password = ?';
    const params = [email, password];
  
    try {
      const [rows] = await pool.query(sql, params);
      if (rows.length > 0) {
        const user = {
          Id_user: rows[0].Id_user,
          name: rows[0].name,
          last_name: rows[0].last_name,
          email: rows[0].email,
          photo: rows[0].photo
        };
        res.send({ success: true, user });
      } else {
        res.send({ success: false, message: 'Los datos de inicio de sesión no coinciden' });
      }
    } catch (error) {
      res.send(error);
    }
  }


 


  module.exports = {
    registerUser,
    loginUser,
  };