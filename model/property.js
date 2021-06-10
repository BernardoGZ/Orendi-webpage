const {Schema, model} = require("mongoose");

const PropertySchema = Schema ({
    titulo: String,
    // titulo_corto: String,
    tipo_de_disposicion: String,
    tipo_de_edificio: String,
    descripcion: String,
    precio: Number,
    direccion: String,
    ciudad: String,
    estado: String,
    codigo_postal: Number,
    image: Buffer,
    superficie: Number,
    cuartos: Number,
    banos: Number,
    incluye: String,
    servicios: String,
    favorito : String,
    status: {
        type: Boolean, 
        default: true
    }
});

module.exports = model('properties', PropertySchema);