const Products = require('../models/products');
const Users = require('../models/users');
const Operaciones = require('./CRUD.js');
MongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost/my_market_db';
const dbName = 'my_market_db';

const productsCtrl = {};

productsCtrl.createUser = async (req, res, next) =>{
  const client = new MongoClient(url);
  let mail = req.body.user.user
  let pass_word = req.body.password.password
    try {
        await client.connect();
     console.log("Connected correctly to server /login");//**check point

     const db = client.db(dbName);

        db.collection('users').find({}).count().then((n) => {
        console.log(`There are ${n} documents`);//**check point
        if (n == 0 ) {
            Operaciones.insertarUsuario((error,result)=>{
                  if(error)console.log(error);
                  console.log(result);
            })
            Operaciones.createCollection((error,result)=>{
              if(error)console.log(error);
              console.log(result);
        })
        } 
     if(n > 0 ) {
              Users.find({email: mail, password: pass_word}).count({}, (err, count) =>{
           if (count == 1 ){
              req.session.use_r = mail;
               res.send("Validado");
            }else{
              res.send("Usuario/contraseña incorrecta, verifiquelos e intente nuevamente");
            }       
          });	
        }
      });
    }catch (err) {
      res.send("Servidor no disponible/Error al intentar conectar con el servidor")
    }
    client.close();
}

productsCtrl.getInit_data = async (req, res, next) =>{
  const client = new MongoClient(url);
    try {
      await client.connect();
        console.log("Connected correctly to server /allProducts");//**check point
      const db = client.db(dbName);
      db.collection("products").find({}).toArray(function(err, result) {
        if (err) throw err;
        res.json(result);
      });
  }catch (err) {
    res.send("Servidor no disponible/Error al intentar conectar con el servidor")
  }
  client.close();
}

productsCtrl.actualizar = async (req, res, next) =>{
  let product_toModify = req.body.productsSelected;
  console.log(product_toModify.length);
  const client = new MongoClient(url);
    try {
      await client.connect();
        console.log("Connected correctly to server /update");//**check point
      const db = client.db(dbName);
        for (let index = 0; index < product_toModify.length; index++) {
          let finder = product_toModify[index].nombre;
          let newvalues = {cant_dispo:product_toModify[index].cant_dispo};
          db.collection("products").findOneAndUpdate({nombre:finder},{$set: newvalues}, {upsert:true},function(err, res){
            if (err) throw err;
            console.log("1 document updated");//*check point
          })
        }
        res.send("done");
  }catch (err) {
    res.send("Servidor no disponible/Error al intentar conectar con el servidor" +err)
  }
  client.close();
}

module.exports = productsCtrl;