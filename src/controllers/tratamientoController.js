
const models = require('../database/models/index')

module.exports = {

        listar: async(req, res) => {

        const trat = await models.tratamiento.findAll()
            
            res.json({
                    sucess: true,
                    data: {
    
                        tratamientos: trat
                    }
    
    
             })
    
    
        },
        listarInfo: async(req, res) => {
    
            try{
                const trat = await models.tratamiento.findOne({
                        where: {
                            id: req.params.idTratamiento
                            
                        }
        
        
                })
                if (!trat) return next(errors.TratamientoInexistente)
                res.json({
                       sucees: true,
                       data: {
        
                               tratamiento:trat
                             }
        
                        })
                    } catch (err){
                        return next(err)
                    }
           
           
        },
        create: async(req, res) => {
                    const trat = await models.tratamiento.create()
    
                    res.json({
    
                            success: true,
                            data:{
    
                                    id: trat.id
                            }
                    
                     })
        
       },
    prueba: async(req, res) => {
                try {

                    console.log(`Ejecutando listado de Tratamientos desde puerto`)
                    res.json({
                      
                        message: "Listado de Tratamientos"

                    })
                } catch (err){
                    console.log(err)


                }
     },
        
    }

