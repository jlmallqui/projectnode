const express = require('express');
const router = express.Router();
const conexion = require('../dbserver/dbproduccion');


 router.get('/',(req, res) => {
     try {
        var todayDate = new Date().toISOString().slice(0, 10);
        console.log(todayDate);
    
         const today =  new Date().toLocaleDateString();
         console.log(today);
         res.status(200).render('index.ejs',{today}); 
     } catch (error) {
         console.log(error);
     }
    
     });
 
router.get('/clientes', async (req, res) => {
    console.log('entro al get');
    try {             
        const users =  await conexion.query('select * from sistemas.cliente_listar()');
        console.log(users.rows);
        res.status(200).render('clientes',{data:users.rows});
    } catch (error) {
        console.log('error');
        return res.status(401).json(error);
    }
});
    

router.get('/categorias', async (req, res) => { 
    try {             
        const categorias =  await conexion.query(' select * from "sistemas"."categorias_listar"()'); 
        //res.json(categorias.rows);
        res.status(200).render('categorias',{data:categorias.rows});
    } catch (error) {
        console.log('error');
        return res.status(401).json(error);
    }
});

   
    module.exports = router;