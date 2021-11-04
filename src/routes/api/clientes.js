
const express = require('express'); 
const router = express.Router();  
const clienteController = require('../../controllers/clientes.controller');



router.get('/buscar/:tipo,:numero', clienteController.getCliente_tipo_numero);

router.get('/buscar/direccion/:tipo,:numero', clienteController.getCliente_direccion_tipo_numero);

router.get('/listar',clienteController.listar);

router.post('/registrar', clienteController.registrar);

 


module.exports = router;