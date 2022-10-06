const router = require('express').Router()
const tratamientoController= require('../controllers/tratamientoController')

const validate= require('../middlewares/validate')
const scheme_tratamiento = require('../middlewares/schemes/scheme_tratamiento')



router.get('/', tratamientoController.prueba)
router.post('/', validate(scheme_tratamiento.crearTratamiento), tratamientoController.create)
router.get('/:idTratamiento', tratamientoController.listarInfo)

module.exports = router