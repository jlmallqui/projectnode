const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
 
const helpers = require('../lib/helpers');
const  conexion_pg = require('../dbserver/PostgreSQL');


// passport.use('local.signin', new LocalStrategy({
//     usernameField:'username',
//     passwordField:'password',
//     passReqToCallback:true
// },  async(req,username,password, done)=>{ 
//      const rows =  await pool.query('SELECT *  FROM users Where username = ?',[username]);
//      console.log(rows);
//     if (rows.length> 0){
//         const user = rows[0];
//         console.log(user);
//         const validPassword = await helpers.matchPassword(password,user.password);
        
//         if (validPassword){ 
//             done(null,user,req.flash('success','Welcome '+ user.username));
//         } else{
//             done(null,false,req.flash('message','Incorrect Password'));
//         }
//     }else{
//         return done(null,false,req.flash('message', 'Usuario no existe'));
//     }
// }

// ));

// passport.use('local.signup' ,  new LocalStrategy({
//     usernameField:'username',
//     passwordField:'password',
//     passReqToCallback:true
// },  async(req,username,password,done) => {
//     const {fullname} = req.body;
//     const newUser ={
//         username,
//         password,
//         fullname
//     };

//     newUser.password = await helpers.encryPassword(password);
//     //const result = await pool.query('INSERT INTO users SET ?', [newUser]);    
//     const result = await conexion_pg.query("INSERT INTO users(username,password,fullname) values ($1,$2,$3)",[newUser.username,newUser.password,newUser.fullname]); 
//     console.log(result);
//     newUser.id  = result.insertId;
//     return done(null,newUser);
// }));

// passport.serializeUser((user,done) => {
    
//    done(null, user.id) ;

// });

// passport.deserializeUser(async(id, done) => {
//     const rows = await pool.query('SELECT * FROM users Where id = ?',[id])
//     done(null,rows[0]);
// });



