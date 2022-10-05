
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

        const paci = await models.paciente.findOne({
                where: {
                    id: req.params.idPaciente
                    
                }


        })
                res.json({
                        sucees: true,
                        data: {

                            paciente:paci
                        }

                })
       
    },
    create: async(req, res) => {
                const paci = await models.paciente.create(req.body)

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
                    
                        message: "Listado de Medicos"

                    })
                } catch (err){
                    console.log(err)


                }
    },
        
    }

