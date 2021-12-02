const express= require ('express');
const router = express.Router(); 

const Producto  = require('../models/producto'); //Producto viene de productos.js
router.get('/',async(req,res)=>{
    try{
        const arrayProductosDB =
        await Producto.find();
        console.log(arrayProductosDB)
        res.render("productos",{
        arrayProductos : arrayProductosDB //ArrayProductos es la informacion que viene 
        })
    }catch (error){
        console.log(error)
    }
})

module.exports = router; 