const express = require('express');
const morgan = require('morgan'); 
const path = require('path');  
const session = require('express-session');  
const {configPG} = require('./dbserver/keys');   
const passport = require('passport');
const {SECRET_KEY} = require('./dbserver/keys');
// inicializaciones
const app = express();
require('./lib/passport'); 

// settings
app.set('port',process.env.POR || 8090); 
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

var pg = require('pg')
 
const pgSession = require('express-pg-session')(session);
 

var pgPool = new pg.Pool(configPG);

app.use(session({
  store: new pgSession({
    pool : pgPool,                // Connection pool
    tableName : 'sessions'   // Use another table-name than the default "session" one
   
  }),
  secret: SECRET_KEY.key,//'process.env.FOO_COOKIE_SECRET',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 days
}));
 
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
 
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});



app.use(function (req, res, next) {
   
    
  // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
   
    next(); 
});






// routes

app.use(require('./routes/'));
app.use(require('./routes/authentication')); 
app.use('/ventas', require('./routes/pasarelapago')); 
app.use('/api/users', require('./routes/api/users'));
app.use('/api/clientes', require('./routes/api/clientes'));
app.use('/api/common', require('./routes/api/common'));
// public
app.use(express.static(path.join(__dirname,'public')));




app.use(function(req, res, next) {  
  res.status(404);  
  res.json({ 
    status: 404,
    message:'No tienes autorizacion'
   }); 
    return;
    
});

// starting server
app.listen(app.get('port'),() => {
    console.log('server on port ',app.get('port'));
})


