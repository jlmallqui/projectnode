module.exports = {

    databaseMysql:{
        host:'localhost',
        user:'root',
        password:'root',
        database:'database_links'
    },

    configLocalhost:{         
        user:'postgres',
        host:'localhost',
        password:'postgres',
        database:'links',
        port:5432,
    },
    configPGBK:{         
        host:'72.167.54.61',
        user:'devuser',
        password:'pgDEVus3r$',
        database:'dbdeveloper',
        port:5432,
    },
    configProduccion:{
        host:'206.81.14.59',
        user:'postgres',
        password:'postgres',
        database:'developer',
        port:5432,
    },

    SECRET_KEY:{
        key:'joseluis',        
    }
}