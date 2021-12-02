const express= require ('express');
const router = express.Router(); 

const Cliente  = require('../models/cliente');
router.get('/',async(req,res)=>{
    try{
        const arrayClientesDB =
        await Cliente.find();
        console.log(arrayClientesDB)
        res.render("clientes",{
        arrayClientes: arrayClientesDB //Arrayclientes es la informacion que viene 
        })
    }catch (error){
        console.log(error)
    }
})

module.exports = router; 