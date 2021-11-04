const conexion = require('../dbserver/dbproduccion');
const clientesController = {};

    
clientesController.getCliente_tipo_numero  =  async(req,res,next) => {    
    try {        
        let parametros = [req.params.tipo,req.params.numero];   
        const users   = await conexion.query('select * from devpoderes.cliente_buscar($1,$2)',parametros);
        res.status(200).json(users.rows)
        } catch (error) {  
            res.send(error);
        conexion.end;
        }             
};

clientesController.getCliente_direccion_tipo_numero = async(req, res,next) => {
    try {
        const parametros = [req.params.tipo,req.params.numero];  
        const users = await conexion.query('select * from devpoderes.cliente_direccion_buscar($1,$2)',parametros)  
        res.json(users.rows);
    } catch (error) {
        
    }
    

};

clientesController.listar = async(req, res,next) => {
    const clientes = await conexion.query('select * from devpoderes.cliente_listar()')
    if (clientes.rowCount < 1){
      res.json({error:'No se encontraron registros en la consulta'});  
    }else { 
      res.json(clientes.rows);
    }
};

clientesController.registrar = async(req, res,next) => {
    console.log( 'entro a post registrar web service '); 
    const users =   await  conexion.query('SELECT * FROM devpoderes.cliente_listar()');
    console.log(req.body);

    res.send('entro');
};


module.exports = clientesController;