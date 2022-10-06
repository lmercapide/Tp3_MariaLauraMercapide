'use strict';

const models = require('../models/index')

module.exports = {
   up (queryInterface, Sequelize){
      return Promise.all([

          models.medico.findOrCreate({

            where: {

                id: "1"

            },
            defaults: {
                nombre: "Maria Lopez",
                dni: "24123125",
                especialidad: "clinico"
               

            }


          }),
          models.medico.findOrCreate({

            where: {

                id: "2"

            },
            defaults: {
                nombre: "jose gomez",
                dni: "32145874",
                especialidad: "pediatra"
           

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
