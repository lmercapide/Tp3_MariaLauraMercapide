const Joi = require('joi')

let crearUsuario = Joi.object({
    nombre : Joi.string().required(),
    apellido : Joi.string().required(),
    email : Joi.string().email().optional(),
    edad : Joi.integer().reqoptionaluired()

})

module.exports = {

    crearUsuario
}