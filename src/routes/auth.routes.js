// RUTAS PARA AUTENTICAR

const router = require("express").Router()
const authController = require('../controllers/authController')
const validate = require('../middlewares/validate')
const authScheme = require('../middlewares/schemes/scheme_usuario')


router.post('/login', validate(authScheme.login), authController.login)
router.post('/registrarse', authController.registrarse)


module.exports = router