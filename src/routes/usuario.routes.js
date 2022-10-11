const router = require('express').Router()
const usuarioController= require('../controllers/usuarioController')
const validate= require('../middlewares/validate')
const scheme_usuario = require('../middlewares/schemes/scheme_usuario')

// ------------------- PARA SUBIR ARCHIVOS ------------------- //
const globalConstants = require('../const/globalConstants') // importar las constantes globales
var multer = require('multer') // MULTER ES UN MODULO PARA SUBIR ARCHIVOS A NUESTRO SERVIDOR 
var upload = multer({ // INSTANCIAMOS MULTER Y LO CONFIGURAMOS
    dest: 'uploads/archivos-usuarios/', //RUTA DONDE SE VAN A SUBIR LOS ARCHIVOS
    limits: { fileSize: globalConstants.MAX_FILE_SIZE } // PESO MAXIMO DEL ARCHIVO 20MB
})

///////////////////////////////////////////////////////////////////////////

router.post('/subirArchivo', upload.single('jpg'), usuarioController.subirArchivo) // RUTA PARA SUBIR UN ARCHIVO
router.post('/descargarArchivo/', usuarioController.descargarArchivo) // RUTA PARA OBTENER UN ARCHIVO

//////////////////////////////////////////////////////////////////////////////



router.get('/prueba', usuarioController.prueba)
router.get('/listar', usuarioController.listar)
router.post('/', validate(scheme_usuario.crearUsuario), usuarioController.create)
router.get('/:idUsuario', usuarioController.listarInfo)

module.exports = router