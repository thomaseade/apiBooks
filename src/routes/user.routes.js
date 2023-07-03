const {Router} = require("express");
const router = Router();
const UserController = require("../controller/user.controller");




router.post('/register', UserController.registerUser);

router.post('/login', UserController.loginUser);


 
 
 
module.exports = router;    