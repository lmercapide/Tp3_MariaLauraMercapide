
const models = require('../database/models/index')
const errors = require('../const/errors')

module.exports = {
  
            
   listar: async(req, res) => {

    try { const medi = await models.medico.findAll()
        
       res.json({
                sucess: true,
                data: {

                    medicos: medi
                }


         })
    

    } catch (err){
            return next(err)
        }
    },

    listarInfo: async(req, res, next) => {
        try{
        const medi = await models.medico.findOne({
                where: {
                    id: req.params.idMedico
                    
                }


        })
        if (!medi) return next(errors.MedicoInexistente)
        res.json({
               sucees: true,
               data: {

                       medico:medi
                     }

                })
            } catch (err){
                return next(err)
            }
    },
    create: async(req, res) => {
      
        
        const medi = await models.medico.create(req.body)

                res.json({

                        success: true,
                        data:{

                                id: medi.id
                        }
                
                 })
          
   },
    prueba: async(req, res) => {
                try { 
                    
                    console.log(`Ejecutando listado de Pacientes desde puerto`)
                    res.json({
                      
                        message: "Listado de Medicos"

                    })
                } catch (err){
                    console.log(err)


                }
     },
        
    }

