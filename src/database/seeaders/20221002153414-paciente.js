'use strict';

const models = require('../models/index')

module.exports = {
   up (queryInterface, Sequelize){
      return Promise.all([

          models.paciente.findOrCreate({

            where: {

                id: "3"

            },
            defaults: {
                nombre: "Lucia Gomez",
                dni: "41212541"
               

            }


          }),
          models.paciente.findOrCreate({

            where: {

                id: "4"

            },
            defaults: {
                nombre: "Matias Sanchez",
                dni: "10793398"
              


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
