// se encarga de conectar las rutas
const {Router} = require('express')
const pacienteRoutes = require('./paciente.routes')
const medicoRoutes = require('./medico.routes')
const tratamientoRoutes = require('./tratamiento.routes')
function rutas_init() {

    const router = Router()

    router.use("/paciente", pacienteRoutes)
    router.use("/medico", medicoRoutes)
    router.use("/tratamiento", tratamientoRoutes)
    return router

}

module.exports = {rutas_init}