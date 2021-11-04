module.exports = class Paino{

     getApiNiubizP1(){
        let url = "https://apisandbox.vnforappstest.com/api.security/v1/security";        
        return url;
    }
    
    getApiNiubizP2(){
        let comercio = this.getApiNiubizCodigoComercio  
        let url = "https://apisandbox.vnforappstest.com/api.ecommerce/v2/ecommerce/token/session/"+comercio;        
        return url;
    }

    getApiNiubizCodigoComercio(){
        //return	"650183837";
        return "522591303"; // prueba
    }

    getUrl(){
        console.log('entro a ger url');
        return "www.url.com";
    }
    
    
    
    

}