//Aqui vamos a crear un servidor con express

const express=require("express");
const app= express();
const port =3420;

//conectar a Base de datos MongoDB a través de Mongoose

const mongoose = require('mongoose'); //se llama a la libreria Mongoose
const usuario=""
const password=""
const dbName="CadenaLaGenerica"

const uri = `mongodb://localhost:27017/CadenaLaGenerica`; //conección a la base de datos

mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology:true}) //se realiza la conexión
.then(()=> console.log('Conectado a la base de datos'))
.catch(e => console.log('Error de conexión',e))


//Llamar al Motor de plantillas ejs en la carpeta views 
app.set('view engine','ejs');
app.set('views', __dirname + '/views');

//Aqui vamos a configurar una carpeta publica de archivos estaticos y hacer uso de middleware
app.use(express.static(__dirname + "/public")) //Llama al contenido de las carpetas 


//Se llama las Rutas WEB 
app.use('/',require('./router/RutasWeb'));

//Ruta de archivo de datos clientes

app.use('/clientes', require('./router/clientes'));

//Ruta de archivo de datos Productos

app.use('/productos', require('./router/productos'));

//Ruta para las páginas no encontradas

app.use((req,res,next)=>{
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Página no encontrada"});

});

//Aca escucharemos el ServidorExpress

app.listen(port,()=>{
    console.log(`Este es un ejemplo de escucha en el sitio http://localhost:${port}`); //Las comillas francesas pueden combinar texto  
});