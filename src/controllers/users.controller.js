const helpers = require('../lib/helpers');
const conexion = require('../dbserver/dbproduccion');
const { crearToken } = require('../middlewares/authJwt');
const userController = {};

    
    userController.getUsers =  async(req,res,next) => {
        try { 
            
            const users =  await conexion.query('select * from devpoderes.cliente_listar()');
            return res.json(users.rows);
        } catch (error) {
            return res.json(error);
        }
    }; 

    userController.getUser_Tipo_Numero  =  async (req,res,next)  => {        
        try {
            
            let parametros = [req.params.tipo,req.params.numero];   
            const users   = await conexion.query('select * from devpoderes.cliente_buscar($1,$2)',parametros);
            res.status(200).json(users.rows)
            } catch (error) {  
                res.send(error);
            conexion.end;
            }             
    };

    userController.createUser   =   async (req,res,next) => {
        
        let mensaje = '';
        try {            
            let {username,password} = req.body;
            password =  await helpers.encryPassword(password);            
            let  result  = await conexion.query('SELECT devpoderes.usuario_crear($1,$2) as resultado', [username, password]); 
            let estado = result.rows[0].resultado;
        
            switch (estado) {
                case 0:
                mensaje = 'Usuario ya existe'; break;
                case 1:
                mensaje = 'Registrado satisfactoriamente'; break;      
                default:
                mensaje = 'Error en el servidor'; break;
            }
            
            if (estado == 1){
                res.status(201).json({
                    estado : estado,
                    message: mensaje,
                    username
                });            
            }else{
                res.status(400).json({
                    estado : estado,
                    message: mensaje,
                    username
                });
            }

        } catch (error) {            
            res.json({      
                'estado':'error',
                'descripcion':error     
            }); 
        }   
      
    };

    userController.userLoginbackup  =  async (req,res) => { 
        
        let mensaje = '';
        try {
            
          let {username,password} = req.body; 
          const valid = await helpers.matchPassword(password,'$2a$10$rpPwncviax1CiY8Ey5iiRe8gQ6hoSNEfq81YrOtpmsVFTA8LkuYpu');
          console.log(valid);
          const query = 'select devpoderes.user_login($1,$2) as resultado';
          
          const result = await conexion.query(query,[username,password]); 
          let estado = result.rows[0].resultado;
          
           
          switch (estado) {
            case 0:
              mensaje = 'Usuario no esta registrado'; break;
            case 1:
              mensaje = 'Logeado exitosamente'; break;
            case -1:
              mensaje = 'La contrasena no coincide'; break;
            default:
              mensaje = 'Error en el servidor'; break;
          }
          res.json({
            estado : result.rows[0].resultado,
            message : mensaje,
            username
          });
      
        } catch (error) {
          res.send(error);     
        } 
    };

    userController.userLogin    =   async (req,res,next) => {  
        
        try { 
            let {username,password} = req.body;
            let token =   crearToken(username);
            let  query = 'select * from devpoderes.usuario_login($1,$2)';
            let  result = await conexion.query(query,[username,token]);  
            if (result.rowCount == 1){
                const usuario =   result.rows[0];
                let db_password = usuario.password;
                let flag = await helpers.matchPassword(password,db_password);
                if (flag){
                
                    res.status(200).json({
                        estado : 1,
                        message : 'Logeado exitosamente',
                        id: usuario.id,
                        username,
                        token 
                    });            
                }else{
                    res.status(400).json({
                        estado : 0,
                        message : 'La contrasena no coincide',
                        id  : 0,
                        username
                    });
                } 
            }else{ 
                res.status(400).json({
                    estado : -1,
                    message : 'Usuario no esta registrado',
                    id  :   0,
                    username
                });
            }
        } catch (error) {
          res.json(error);     
        } 
    };

    userController.getUser_Id = async(req,res)=>{
        
        const result = conexion.query('select * from devpoderes.getUser_id($1)',[]);

    };

    userController.deleteUser_id = async(req,res)=>{
        try {
            let {id}  =   req.params;
            console.log(id);
            if (!id) res.status(401).json({message:'No se puede eliminar el recurso solicitado id'}); 
            const result = await conexion.query('select devpoderes.usuario_eliminar_id($1) as respuesta;',[id]);
            const respuesta = result.rows[0].respuesta;
           if (respuesta==1){
            res.status(204).json({message:'Eliminado satisfactoriamente'});
           }else{
            res.status(401).json({message:'No se puede eliminar el recurso solicitado'});    
           }
        } catch (error) {
            res.status(500).json({message:'error en el servidor'});
            console.log(error);
        }
        
    };

    module.exports = userController;