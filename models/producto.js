//Aca vamos a crear nuestro modelo de datos para Productos
const mongoose= require ('mongoose');
const Schema =mongoose.Schema;

//Aqui el esquema de datos
const productosSchema = new Schema({
    codigo_producto: Number,
    ivacompra: Number,
    nitproveedor: Number,
    nombre_producto: String,
    precio_compra: Number,
    precio_venta: Number,

});

//Creación del modelo

const Producto = mongoose.model('Producto',productosSchema);

module.exports = Producto; //Exportar la variable Producto que lleva todos los datos

//La variable Producto lleva todos los datos