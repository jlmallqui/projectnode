const bcrypt = require('bcryptjs');
const html_to_pdf   =   require('html-pdf-node');
const fs = require('fs');
const helpers = {};



helpers.encryPassword = async (password) =>{
    const salt = await bcrypt.genSalt(9);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

helpers.matchPassword = async(password,savePassword) => {
    try {
        return await bcrypt.compare(password,savePassword);
    } catch (error) {
        console.log(error)
    }
    
};



helpers.converterHtmlToPdf = async(url,rutacompleta) => {
    const options    =   { format : 'A4'} 
    try {

        const file = { url: url};
        await html_to_pdf.generatePdf(file, options).then(pdfBuffer  => {
            fs.createWriteStream(rutacompleta).write(pdfBuffer ); // PDF Buffer:- [{url: "https://example.com", name: "example.pdf", buffer: <PDF buffer>}]
            console.log('Se proceso correctamente'); 
          });          
                 
    } catch (error) { 
        console.log(error);
    }
};


module.exports = helpers;
