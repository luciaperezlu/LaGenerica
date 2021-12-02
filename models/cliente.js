//Aca vamos a crear nuestro modelo de datos para clientes
const mongoose= require ('mongoose');
const Schema =mongoose.Schema;

//Aqui el esquema de datos
const clientesSchema = new Schema({
    cedula_cliente: Number,
    direccion_cliente: String,
    email_cliente: String,
    nombre_cliente: String,
    telefono_cliente: Number,

});

//Creación del modelo

const Cliente = mongoose.model('Cliente',clientesSchema);

module.exports = Cliente; //Exportar la variable Cliente que lleva todos los datos