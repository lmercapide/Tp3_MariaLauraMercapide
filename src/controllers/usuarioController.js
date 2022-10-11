
const models = require('../database/models/index')
const errors = require('../const/errors')

module.exports = {
  
            
   listar: async(req, res) => {

    const user = await models.usuario.findAll()
        
        res.json({
                sucess: true,
                data: {

                    usuarios: user
                }


         })
    },

    listarInfo: async(req, res, next) => {
        try{
        const user = await models.usuario.findOne({
                where: {
                    id: req.params.idUsuario
                    
                }


        })
        if (!user) return next(errors.UsuarioInexistente)
        res.json({
               sucees: true,
               data: {

                       usuario:user
                     }

                })
            } catch (err){
                return next(err)
            }
    },
    create: async(req, res) => {
      
        
        const user = await models.usuario.create(req.body)

                res.json({

                        success: true,
                        data:{

                                id: user.id
                        }
                
                 })
          
   },
    prueba: async(req, res) => {
                try { 
                    
                    console.log(`Ejecutando listado de Usuarios desde puerto`)
                    res.json({
                      
                        message: "Listado de Usuarios"

                    })
                } catch (err){
                    console.log(err)


                }
     },
        
    }

