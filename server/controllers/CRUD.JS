var User = require('../models/users')
var Products = require('../models/products')

var db = "my_market_db"

module.exports.insertarUsuario = function(callback) {
    let Joel = new User ({
            email: "joelvergara@gmail.com",
            nombre: "Joel Vergara",
            fecha_nac: "1988-09-21",
            password: "12345"
    })
    Joel.save((error) => {
        if (error) callback(error)
        callback(null, "Usuario 1 guardado")
    })
    let Andrea = new User ({
            email: "andrea@gmail.com",
            nombre: "Andrea Gonzalez",
            fecha_nac: "1986-02-18",
            password: "54321"
    })
    Andrea.save((error) => {
        if (error) callback(error)
        callback(null, "Usuario 2 guardado")
    })
}

module.exports.createCollection = function(callback) {
    Products.insertMany([
        {img:'../../../assets/img/aguacate.jpg',  nombre: "Aguacate",  precio: "10.95", cant_dispo: "100"},
        {img:'../../../assets/img/ajo.jpg',       nombre: "Ajo",       precio: "0.95",  cant_dispo: "400"},
        {img:'../../../assets/img/almendras.jpg', nombre: "Almendras", precio: "1.95",  cant_dispo: "100" },
        {img:'../../../assets/img/arandanos.jpg', nombre: "Arandanos", precio: "0.15", cant_dispo: "80"  },
        {img:'../../../assets/img/brocoli.png',   nombre: "Brocoli",   precio: "7.80", cant_dispo: "0"  },
        {img:'../../../assets/img/calabaza.jpg',  nombre: "Calabaza",  precio: "1.00", cant_dispo: "63"  },
        {img:'../../../assets/img/canela.jpg',    nombre: "Canela",    precio: "2.95", cant_dispo: "10"  },
        {img:'../../../assets/img/cebolla.jpg',   nombre: "Cebolla",   precio: "1.95", cant_dispo: "190" },
        {img:'../../../assets/img/fresa.jpg',     nombre: "Fresa",     precio: "5.00", cant_dispo: "100" },
        {img:'../../../assets/img/kiwi.jpg',      nombre: "Kiwi",      precio: "3.14", cant_dispo: "0" },
        {img:'../../../assets/img/limon.jpg',     nombre: "Limon",     precio: "6.25", cant_dispo: "300" },
        {img:'../../../assets/img/lychee.jpg',    nombre: "Lychee",    precio: "8.50", cant_dispo: "57"  },
        {img:'../../../assets/img/manzana.jpg',   nombre: "Manzana",   precio: "23.50", cant_dispo: "100" },
        {img:'../../../assets/img/maiz.jpg',      nombre: "Maiz",      precio: "9.95", cant_dispo: "63"  },
        {img:'../../../assets/img/naranja.jpg',   nombre: "Naranja",   precio: "4.00", cant_dispo: "100" },
        {img:'../../../assets/img/papa.jpg',      nombre: "Papa",      precio: "3.00", cant_dispo: "500" },
        {img:'../../../assets/img/pasta.jpg',     nombre: "Pasta",     precio: "5.59", cant_dispo: "100" },
        {img:'../../../assets/img/pimienta.jpg',  nombre: "Pimienta",  precio: "6.00", cant_dispo: "100" },
        {img:'../../../assets/img/repollo.jpg',   nombre: "Repollo",   precio: "7.00", cant_dispo: "10"  },
        {img:'../../../assets/img/tomate.jpg',    nombre: "Tomate",    precio: "6.50", cant_dispo: "25"  },
        {img:'../../../assets/img/zanahoria.jpg', nombre: "Zanahoria", precio: "5.75", cant_dispo: "100" }
    ],(error) =>{
        if(error) callback(error)
        callback(null,"Productos Guardados");
    })
}
