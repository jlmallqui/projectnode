
const express = require('express'); 
const router = express.Router();  
const userController = require('../../controllers/users.controller'); 
const {verifyToken} = require('../../middlewares/authJwt')



router.get('/listado',userController.getUsers) 

router.get('/listar',userController.getUsers);

router.get('/getUser/:tipo,:numero', userController.getUser_Tipo_Numero);

router.post('/', verifyToken ,userController.createUser);

router.post('/login', userController.userLogin);

router.delete('/id/:id',verifyToken, userController.deleteUser_id);

 

 

module.exports = router;


