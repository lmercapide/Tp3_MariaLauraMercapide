
const models = require('../database/models/index')

module.exports = {

        listar: async(req, res) => {

        const paci = await models.paciente.findAll()
            
            res.json({
                    sucess: true,
                    data: {
    
                        pacientes: paci
                    }
    
    
             })
    
    
        },
        listarInfo: async(req, res) => {
    
            try{
                const paci = await models.paciente.findOne({
                        where: {
                            id: req.params.idPaciente
                            
                        }
        
        
                })
                if (!paci) return next(errors.PacienteInexistente)
                res.json({
                       sucees: true,
                       data: {
        
                               paciente: paci
                             }
        
                        })
                    } catch (err){
                        return next(err)
                    }
           
           
        },
        create: async(req, res) => {
                    const paci = await models.paciente.create()
    
                    res.json({
    
                            success: true,
                            data:{
    
                                    id: paci.id
                            }
                    
                     })
        
       },
    prueba: async(req, res) => {
                try {

                    console.log(`Ejecutando listado de Pacientes desde puerto`)
                    res.json({
                      
                        message: "Listado de Pacientes"

                    })
                } catch (err){
                    console.log(err)


                }
     },
        
    }

