module.exports = {

    database:{
        host:'localhost',
        user:'root',
        password:'root',
        database:'database_links'
    },

    configPG:{         
        user:'postgres',
        host:'localhost',
        password:'postgres',
        database:'links',
        port:5432,
    },
    configPG22:{         
        host:'72.167.54.61',
        user:'devuser',
        password:'pgDEVus3r$',
        database:'dbdeveloper',
        port:5432,
    },
    configProduccion:{
        host:'72.167.54.61',
        user:'devuser',
        password:'pgDEVus3r$',
        database:'dbdeveloper',
        port:5432,
    },

    SECRET_KEY:{
        key:'joseluis',        
    }
}