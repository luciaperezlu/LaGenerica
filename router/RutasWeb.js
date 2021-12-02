//Aqui se enruta el proyecto y estan todas las estructas back 
const express= require ('express');
const router = express.Router(); //un middler

//Aqui traigo las rutas del app para organizar un archivo de rutas

router.get("/", (req,res)=>{
    res.render("index", {titulo:"Mi titulo dinamico"});
})

router.get("/productos",(req,res)=>{
 res.render ("productos",{titulos: "Lista de Productos"});
})

router.get("/usuarios",(req,res)=>{
    res.render ("usuarios",{titulos: "Usuario"});
   })

module.exports = router; //cuando traigo un variable que sea global y que todas las variables la reconozcan