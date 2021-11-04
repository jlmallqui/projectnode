
const express = require('express'); 
const router = express.Router(); 
const axios = require('axios');
const niubiz = require('../common/niubiz').prototype;



// router.get('/pagos', async(req,res) =>{
    
//     let urlapip1 = niubiz.getApiP1();
//     let key =   niubiz.getKeyP1();
//     let auth = {Authorization:key};

//     await axios.get(urlapip1,{
//         headers:auth
//     })
//     .then(function (response) {
//         let accessToken = response.data;
//         req.session.accessToken = response.data;
//         crearTokenSesionNiubiz(accessToken,res);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })
//     .then(function () {
//         // always executed
//     });    
     
// });


// router.post('/pagos', (req,res) =>{

//     res.render('pagos/formulario')     
// });



// router.post('/pagoexitoso', async(req,res) => {
//     let transactionToken = req.body.transactionToken;    
//     let accessToken =   req.session.accessToken;
//     let estado = await procesaCargoNiubiz(accessToken,transactionToken,req);
//     console.log('estado  = ');
//     console.log(estado); 
//     if(estado){
//         res.render('pagos/resumenVenta',{transactionToken});
//     } else{
//         res.redirect('/profile');
//     }
    

// });


// async function crearTokenSesionNiubiz(accessToken,res){

//     let apiNiubiz = niubiz.getApiP2();
//     const auth      = {'Content-Type': 'application/json', Authorization:accessToken }; 
//     const data  = {"channel": "web", "amount": 10.5, "antifraud": {"clientIp": "24.252.107.29", "merchantDefineData": {"MDD4": "jose.mallqui@gmail.com", "MDD21": "0", "MDD30": "25", "MDD31": "929286069", "MDD32": "jose.mallqui@gmail.com", "MDD33": "DNI", "MDD34": "46423011", "MDD37": "1", "MDD75": "INVITADO","MDD77": "1"}}};
    
//     await axios.post(apiNiubiz,data ,{        
//         headers:auth
//     })
//     .then(function (response) {
//         console.log('FUNCTION crearTokenSesionNiubiz');        
//         const token =response.data.sessionKey;
//         res.render('pagos/formulario',{token})
//     })
//     .catch(function (error) {
//         console.log('ENTRO A ERROR');
//         console.log(error);
//         console.log(response);
        
//     })
//     .then(function () {
//     });


    
// };


// async function procesaCargoNiubiz(accessToken,transactionToken,req){
//     let api = niubiz.getApiP3();
//     let header = {"Content-Type":"application/json",Authorization:accessToken}
//     let data   = { "channel": "web", "captureType": "manual", "countable": true, "order" : { "tokenId": transactionToken, "purchaseNumber": "123", "amount":"10.5", "currency": "PEN" } }
//     var resultado = true;
//     console.log(header);
//     console.log(data); 
//     await axios.post(api,data,{
//         header:header
//     })
//     .then(function (response) {
//         // handle success
//         console.log('entro a satisfactorio');
//         console.log(data);
//         console.log('entro a satisfactorio 2 ');
//         console.log(response);
//         return resultado; 
//     })
//     .catch(function (error) {
//         // handle error
//         console.log('entro a error');
//         console.log(error.response.status);
//         console.log(error.response.statusText);
//         console.log(error.response.data);
//         resultado   =   false;
//         return resultado;
//     })
//     .then(function () {
//         // always executed
//   });
//   return resultado;
// };

module.exports = router;






