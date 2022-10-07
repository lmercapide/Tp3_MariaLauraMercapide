const router = require('express').Router()
const pacienteController= require('../controllers/pacienteController')

const validate= require('../middlewares/validate')
const scheme_paciente = require('../middlewares/schemes/scheme_paciente')



router.get('/prueba', pacienteController.prueba)
router.get('/listar', pacienteController.listar)
router.post('/', validate(scheme_paciente.crearPaciente), pacienteController.create)
router.get('/:idPaciente', pacienteController.listarInfo)

module.exports = router


