const {Client} = require('pg');
const {promisify} = require('util');
const { configProduccion } = require('./keys');


const conexion_pg = new Client(configProduccion);
  

  conexion_pg.connect( err => {
    if (err){
        console.log(err.stack)
    }else{
        console.log('Servidor  PG conectado produccion');
    }
});

conexion_pg.query = promisify(conexion_pg.query);

module.exports = conexion_pg;