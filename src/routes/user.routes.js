const {Router} = require("express");
const router = Router();
const UserController = require("../controller/user.controller");




router.post('/register', UserController.registerUser);

router.post('/login', UserController.loginUser);

router.put('/usuarios', UserController.updateUser);
 
router.get('/users/:id', UserController.getUserById);
 
module.exports = router;    