commonController = {};
const conexion = require('../dbserver/dbproduccion') 

const helpers = require('../lib/helpers');


commonController.getFacultades = async(req,res) => {
    try {
        const facultades = await conexion.query('select * from devpoderes.facultades_listar()');
        console.log(facultades.rowCount);
        res.json(facultades.rows);    
    } catch (error) {
        res.status(401).json(error);
    }
    
}

commonController.getServicios = async (req,res)=>{
    try {
        let respuesta = await conexion.query('select * from devpoderes.servicios_listar()'); 
        if (respuesta.rowCount > 0){
            return res.status(200).json(respuesta.rows);
        }
        return res.status(400).json({status:'0', message:'No hay datos'});
        
    } catch (error) {
        console.log(error);
        return res.status(400).json({status:'-1', message:'Error en el funcion'});
    } 
};

commonController.getArchivo = async (req,res)=>{
    try {
        let rutaInicio = "C:\\Users\\jose\\Downloads\\jose.pdf";
        let rutaFinal = "E:\\LUIS.pdf";
        fs.copyFile(rutaInicio,rutaFinal,fs.constants.COPYFILE_EXCL,(err)=>{
            console.log('Entro a error');
            console.log(err);
        });
        res.download(rutaFinal,'joseluis.pdf',function(err){
            if (err){
                console.log(err);
                res.send(err)
            }
        })

    } catch (error) {
        res.send(error);
    }
   

};

commonController.createPDF = async (req,res) =>{
    
    let url= 'http://localhost:8090/api/common/htmlpdf/1';
    let ruta = 'E:\\Proyectos\\descargarFile.pdf'
    await helpers.converterHtmlToPdf(url,ruta);
    res.json({message:'Se proceso correctamente'});


};


commonController.gethtml = async (req,res) =>{
    try {
        
        let poder= req.params.poder;

        let poderdantes = [{
            tipo:'D',
            documento:'46423011',
            nombres:'jose luis mallqui jorge'
        }]
        
        let apoderados = [{
            tipo:'D',
            documento:'46423012',
            nombres:'manuel lezama'
        }]

        let cuerpoHtml  =   ''; 

        cuerpoHtml  +=  '<p><strong>C O M P A R E C E</strong>'
        cuerpoHtml  +=  '</p>'
        cuerpoHtml  +=  '<p>DOY FE DE HABER IDENTIFICADO AL COMPARECIENTE, EN ADELANTE '
        cuerpoHtml  +=  '<strong>EL/LA PODERDANTE</strong>'
        cuerpoHtml  +=  ', Y QUE PROCEDE CON CAPACIDAD, LIBERTAD Y CONOCIMIENTO BASTANTE DEL ACTO QUE REALIZA, Y QUE ES HABIL EN EL IDIOMA CASTELLANO, Y DE HABER UTILIZADO EL MECANISMO DE LA COMPARACION BIOMETRICA DE LAS HUELLAS DACTILARES Y LA CONSULTA EN LINEA RENIEC, CUMPLIENDO CON LO ESTABLECIDO EN EL LITERAL D) DEL ARTICULO 54, Y EL ARTICULO 55 DEL DECRETO LEGISLATIVO Nº 1049 DE LA LEY DE NOTARIADO, MODIFICADO POR LOS DECRETOS LEGISLATIVOS Nº 1350 Y Nº 1232 RESPECTIVAMENTE, DEJANDO CONSTANCIA QUE EN LA FORMALIZACION DEL PRESENTE INSTRUMENTO NO SE REQUIERE LA PRESENTACION DE MINUTA, DE CONFORMIDAD CON LO DISPUESTO CON EL ARTICULO CINCUENTIOCHO DE LA LEY DE NOTARIADO, MANIFESTANDOME QUE: OTORGA PODER AMPLIO, GENERAL Y ESPECIAL A FAVOR DE '
        cuerpoHtml  +=  '<b>'+ poderdantes[0].nombres.toUpperCase() + ' IDENTIFICADO CON DNI Nº ' + poderdantes[0].documento + '</b>'
        cuerpoHtml  +=  ', A QUIEN EN ADELANTE SE LE DENOMINARA EL/LA APODERADO(A); EN LOS TERMINOS Y CONDICIONES DE LAS CLAUSULAS SIGUIENTES:'
        cuerpoHtml  +=  '</p>'
        cuerpoHtml  +=  '<p><strong>PRIMERO. - EL/LA PODERDANTE </strong>'
        cuerpoHtml  +=  'A TRAVES DEL PRESENTE DOCUMENTO OTORGA UN PODER AMPLIO, GENERAL Y ESPECIAL PARA SER EJERCIDO POR '
        cuerpoHtml  +=  '<strong> EL/LA APODERADO(A)</strong>'
        cuerpoHtml  +=  ', CON LAS FACULTADES CONTENIDAS EN LAS CLAUSULAS SIGUIENTES.'
        cuerpoHtml  +=  '</p>'

        cuerpoHtml  +=  '<p><strong>FACULTADES JUDICIALES</strong></p>'
        cuerpoHtml  +=  '<p><strong>SEGUNDO. - EL/LA APODERADO(A) </strong>'
        cuerpoHtml  +=  'DE CONFORMIDAD CON EL ART. 74 Y 75 DEL CÓDIGO PROCESAL CIVIL, TENDRÁ FACULTADES DE REPRESENTACIÓN TANTO EN FORMA GENERAL COMO ESPECIAL, AL IGUAL QUE ACTIVA COMO PASIVAMENTE, COMPARECIENDO Y REALIZANDO TODA CLASE DE ACTOS Y TRÁMITES ANTE CUALQUIER CLASE DE AUTORIDAD, ENTIDAD O PERSONA, SEAN ÉSTAS DE CARÁCTER ADMINISTRATIVO, MUNICIPAL, POLÍTICO, TRIBUTARIO, DE ADUANAS, LABORAL, NOTARIAL, REGISTRAL, POLICIAL Y JUDICIAL, PARA DEFENDER Y HACER VALER TODOS LOS DERECHOS DE '
        cuerpoHtml  +=  '<b>EL/LA PODERDANTE </b>'
        cuerpoHtml  +=  'E INTERESES, ESTANDO INVESTIDAS PARA TALES EFECTOS DE TODAS LAS FACULTADES TANTO GENERALES COMO ESPECIALES, Y EN PARTICULAR LAS PREVISTAS EN LOS ARTICULOS 74, 75 Y 436 DEL CÓDIGO PROCESAL CIVIL, QUEDANDO DESDE ESTE MOMENTO LEGITIMADA TODAS SUS INTERVENCIONES EN TODO TRÁMITE, ACTUACIÓN, PROCESO Y DEMÁS, ASÍ COMO EN LA REALIZACIÓN DE TODOS LOS ACTOS DE LOS MISMOS, EN ESPECIAL PARA PREPARAR, SUSCRIBIR, PRESENTAR, INTERPONER Y CONTESTAR DEMANDAS, DENUNCIAS, SOLICITUDES, PROPONER EXCEPCIONES Y DEFENSAS PREVIAS, DESISTIRSE DEL PROCESO Y DE LA PRETENSIÓN, RECONVENIR Y CONTESTAR RECONVENCIONES, ALLANARSE EN TODO O PARTE A PRETENSIONES DEMANDADAS, DISPONER DE DERECHOS SUSTANTIVOS, ASISTIR A TODA CLASE DE AUDIENCIAS, PRESTAR DECLARACIÓN DE PARTE, RECONOCER DOCUMENTOS, CONCILIAR, TRANSIGIR EL PLEITO, SOMETER A ARBITRAJE LAS PRETENSIONES CONTROVERTIDAS EN EL PROCESO, INTERPONER TODO TIPO DE RECURSOS IMPUGNATORIOS ANTE TODA CLASE DE INSTANCIAS, TRAMITAR LA EJECUCIÓN DE LAS SENTENCIAS, EFECTUAR EL COBRO DE COSTAS Y COSTOS; SOLICITAR TODO TIPO  DE MEDIDAS CAUTELARES, SEAN GENÉRICAS O ESPECÍFICAS, OTORGANDO CONTRACAUTELAS REALES O PERSONALES, PUDIENDO PRESTAR CAUCION JURATORIA, SOLICITAR VARIACIÓN Y CONVERSIÓN DE LAS MEDIDAS CAUTELARES, EFECTUAR EL CATEO EN LAS MEDIDAS DE EMBARGO O SECUESTRO, NOMBRAR DEPOSITARIOS Y CUSTODIOS, PUDIENDO PACTAR SUS HONORARIOS, SOLICITAR DESALOJOS Y REALIZAR TODOS LOS DEMÁS ACTOS EN QUE SE REQUIERA INTERVENCION DE EL/LA PODERDANTE. ASIMISMO, PODRÁ REPRESENTARLA EN TODA CLASE DE PROCESOS NOTARIALES, JUDICIALES O EXTRAJUDICIALES PARA HACER VALER SUS DERECHOS E INTERESES ANTE TODA CLASE DE JUZGADOS, SALAS Y TRIBUNALES ESTABLECIDOS POR LA LEY ORGÁNICA DEL PODER JUDICIAL, DEL MINISTERIO PÚBLICO Y DEMÁS ENTIDADES PERTINENTES EN TODO EL TERRITORIO DE LA REPÚBLICA, ASÍ COMO ANTE CUALQUIER CENTRO DE CONCILIACIÓN EXTRAJUDICIAL, FORMULANDO Y ACEPTANDO INVITACIONES PARA PRESENTARSE ANTE ELLOS, ASISTIENDO A LAS AUDIENCIAS RESPECTIVAS, DISPONIENDO DE LOS DERECHOS MATERIA DE CONCILIACION, ADOPTANDO ACUERDOS Y FIRMANDO LAS ACTAS Y DEMÁS DOCUMENTOS PÚBLICOS Y PRIVADOS QUE FUEREN NECESARIOS. '
        cuerpoHtml  +=  ''
        cuerpoHtml  +=  '</p>'

        cuerpoHtml  +=  '<p>USTED SEÑOR NOTARIO AGREGARA LA INTRODUCCION Y CONCLUSION DE LEY; Y CURSARÁ LOS PARTES AL        REGISTRO PÚBLICO CORRESPONDIENTE PARA SU DEBIDA INSCRIPCIÓN.'
        cuerpoHtml  +=  '<br>'
        cuerpoHtml  +=  'LIMA, 3 DE NOVIEMBRE DEL 2021.</p>'
        cuerpoHtml  +=  '<br>'
        cuerpoHtml  +=  '<p><b>PODERDANTE</b></p>'

        res.render('poderpdf',{html:cuerpoHtml});
        
        

     /*    console.log(poderdantes);
        console.log(apoderados);
        const respuesta = await conexion.query('select "devpoderes"."poder_getHtml"($1) as resultado',[poder]);


        if (respuesta.rows[0].resultado){
            let html = respuesta.rows[0].resultado;    
            res.render('poderpdf',{html});
        }else{
            let html = 'error en el servidor';    
            res.render('poderpdf',{html});
        } */
        
    } catch (error) {
        let html = error;
        res.render('poderpdf',{html});
    }
    
    

};







module.exports =  commonController;