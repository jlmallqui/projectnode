const express = require('express'); 
const router = express.Router();
const pool = require('../dbserver/database');
const {isLoggedIn} = require('../lib/auth');
const  conexion_pg = require('../dbserver/PostgreSQL');

  


 
// router.get('/add',isLoggedIn, (req,res) => {    
    
//     res.render('links/add');
// });

 

// router.post('/add', isLoggedIn, async(req,res) => {
//     const{title,url,description} = req.body;
//     const newLink = {
//         title,
//         url,
//         description,
//         user_id:req.user.id
     
//      };

//      await conexion_pg.query('INSERT INTO links set ?',[newLink]);
//     // await pool.query('insert into links set ?', [newLink]);
//    // const values = [title,url,description,1];
//    // const consultaSql = 'CALL test.Links_agregar($1,$2,$3,$4)';
//   //  const respuesta = await conexionPG.query(consultaSql, values);
    
//     req.flash('success', 'Registrado satisfactoriamente');
//     res.redirect('/links')
// });





// router.get('/', isLoggedIn, async(req, res) => {

//     const links =   await  pool.query('SELECT * FROM links WHERE user_id = ?', [req.user.id]);
//   //const links =  (await conectionPg.query('select * from test.links')).rows;

//     //const links =  (await conexionPG.query('select * from test.Links_All();')).rows;
    
//     const cantidad = links.length;
    
//     if (cantidad > 0){         
//         res.render('links/list',{links});

//     }  else{        
//         res.render('links/list',{links});
//     }
   
// })


// router.get('/delete/:id', isLoggedIn, async(req,res) => {
//     const { id } = req.params;
//     await pool.query('DELETE FROM links WHERE id = ?', [id]);
//     req.flash('success', 'eliminado satisfactoriamente');
//     res.redirect('/links');
//     //console.log(req.params.id);
//     //res.send('eloiminado')
// });


// router.get('/edit/:id',isLoggedIn, async(req,res) => {
//     const {id} = req.params;
//     const links = await pool.query('SELECT * FROM links WHERE id = ?', [id]);    
//     res.render('links/edit',{link:links[0]})
// });

//  router.post('/edit/:id', async(req, res) =>{
//      const {id} = req.params;
//      const {title,description,url} = req.body;
//      const newLink = {
//          title,
//          description,
//          url
//      };
     
     
//      await pool.query('UPDATE links set ? WHERE id = ?',[newLink,id]);
//      req.flash('success', 'Actualizado satisfactoriamente');
//      res.redirect('/links');

//  });




module.exports = router;