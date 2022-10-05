const Joi = require('joi')

let crearMedico = Joi.object({
    nombre : Joi.string().required(),
    dni : Joi.string().optional(),
    especialidad : Joi.string().required()


})

module.exports = {

    crearMedico
}