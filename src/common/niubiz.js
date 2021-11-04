const conexion = require('../dbserver/dbproduccion')
const helpers = require('../lib/helpers');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../dbserver/keys');

module.exports = class Niubiz{

    getApiP1(){
       let url = "https://apisandbox.vnforappstest.com/api.security/v1/security";        
       return url;
   }
   
   getApiP2(){
       let comercio = this.getApiCodigoComercio();  
       let url = "https://apisandbox.vnforappstest.com/api.ecommerce/v2/ecommerce/token/session/"+comercio;        
       return url;
   }

   getApiP3(){
    let comercio = this.getApiCodigoComercio();  
    let url = "https://apisandbox.vnforappstest.com/api.authorization/v3/authorization/ecommerce/"+comercio;        
    return url;
    }

   getApiCodigoComercio(){
       //return	"650183837";
       return "522591303"; // prueba
   }

   getKeyP1(){       
       //   key username + clave encriptada
        return 'aW50ZWdyYWNpb25lcy52aXNhbmV0QG5lY29tcGx1cy5jb206ZDVlN25rJE0=';
    }

   getUrl(){
       console.log('entro a ger url');
       return "www.url.com";
   }
   
    

}