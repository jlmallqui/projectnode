const express = require('express');
const router = express.Router();
const conexion = require('../dbserver/dbproduccion');


 router.get('/',(req, res) => {
     res.render('index.ejs'); 
     });
 
router.get('/clientes', async (req, res) => {
    try {             
        const users =  await conexion.query('select * from sistemas.cliente_listar()');
        console.log(users.rows);
        res.status(200).render('clientes',{data:users.rows});
    } catch (error) {
        console.log('error');
        return res.status(401).json(error);
    }
});
    
   
    module.exports = router;