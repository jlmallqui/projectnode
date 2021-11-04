const authJwt = {};
const jwt =require('jsonwebtoken');
const {SECRET_KEY}= require('../dbserver/keys');
const conexion = require('../dbserver/dbproduccion');

    
authJwt.verifyToken = async(req,res,next)=>{
     
    try {
        // const timeUnix = Math.floor(Date.now() / 1000); 
        const token = req.headers["authorization"]; 
        if (!token) return res.status(403).json({message:'No tiene token autorizacion'})
        //const tokenreal  = jwt.decode(token); 
        //if (!tokenreal) return res.status(403).json({message:'token invalido'}) 
        try {
            
            const data  = await jwt.verify(token,SECRET_KEY.key); 
            const user = await conexion.query('select * from devpoderes.usuario_buscar_username($1)',[data.id]);
            
            if (!user){
                return res.status(403).json({message:'Usuario sin token'});
            }else{ 
                token_activo= user.rows[0].token; 
                if (token== token_activo){
                    next();
                }else{
                    return res.status(403).json({message:'token no pertenece a la sesion'});
                }
            }
        } catch (err) {
            console.log(err.message);
            return res.status(403).json({message:'token vencido'}) 
        }
        
    } catch (error) {
        console.log(error)
        return res.json({message:'error'})
    }
 
}

authJwt.crearToken = (data)=>{
    const token =   jwt.sign({id:data},SECRET_KEY.key,{
        expiresIn:1120
    });
    return token;
}

module.exports = authJwt;


