//Controlar las cookies
const cookiePaser = require('cookie-parser')

//1.- Invocamos a express
const express = require('express');
const app = express();
module.exports = app;

//2.-seteamos url encoded para capturar datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//3.-invocamos a dotenv
const dotenv = require('dotenv');
dotenv.config({path:"./env/.env"});

//4.-seteamos el directorio public
app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

//5.- Establecemos el motor de plantillas
app.set('view engine', 'ejs');

//6.- Invocamos a bcrypjs
//const bcryptjs = require('bcryptjs');

app.use(cookiePaser())

//llamamos al router
app.use('/', require("./routes/router"))

app.listen(3000, (req, res)=>{
    console.log("Server Running in http://localhost:3000");
})