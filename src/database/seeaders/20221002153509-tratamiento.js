
'use strict';

const models = require('../models/index')

module.exports = {
   up (queryInterface, Sequelize){
      return Promise.all([

          models.tratamiento.findOrCreate({

            where: {

                id: "1"

            },
            defaults: {
                nombre: "antibiotico"
               


            }


          }),
          models.tratamiento.findOrCreate({

            where: {

                id: "2"

            },
            defaults: {
                nombre: "psicofarmaco"
             

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
