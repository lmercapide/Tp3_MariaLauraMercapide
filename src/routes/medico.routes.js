const router = require('express').Router()
const medicoController= require('../controllers/medicoController')

const validate= require('../middlewares/validate')
const scheme_medico = require('../middlewares/schemes/scheme_medico')



router.get('/prueba', medicoController.prueba)
router.get('/listar', medicoController.listar)
router.post('/', validate(scheme_medico.crearMedico), medicoController.create)
router.get('/:idMedico', medicoController.listarInfo)

module.exports = router

