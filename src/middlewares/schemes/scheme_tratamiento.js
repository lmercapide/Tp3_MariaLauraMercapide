const Joi = require('joi')

let crearTratamiento = Joi.object({
    nombre : Joi.string().required()
    
 })

module.exports = {

    crearTratamiento
}
