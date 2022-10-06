const Joi = require('joi')

let crearPaciente = Joi.object({
    nombre : Joi.string().required(),
    dni : Joi.string().optional()
    
})

module.exports = {

    crearPaciente
}