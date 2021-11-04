/* const {Client,Pool} = require('pg');
const {promisify} = require('util');
const { configPG } = require('./keys');



const conexion_pg = new Client(configPG);
const conexion_pool = new Pool(configPG);
  

  conexion_pg.connect( err => {
    if (err){
        console.log(err.stack)
    }else{
        console.log('Servidor  PG conectado');
    }
});

conexion_pg.query = promisify(conexion_pg.query);



conexion_pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
  })
  

  conexion_pool.query = promisify(conexion_pool.query);



module.exports = conexion_pg , conexion_pool; */