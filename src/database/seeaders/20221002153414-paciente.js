'use strict';

const models = require('../models/index')

module.exports = {
   up (queryInterface, Sequelize){
      return Promise.all([

          models.paciente.findOrCreate({

            where: {

                id: "5"

            },
            defaults: {
                nombre: "Lucia Gomez",
                dni: "41212541",
                tratamientoId: "3"
               

            }


          }),
          models.paciente.findOrCreate({

            where: {

                id: "7"

            },
            defaults: {
                nombre: "Matias Sanchez",
                dni: "10793398",
                tratamientoId: "2"


            }


          })


      ]
  )},

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
