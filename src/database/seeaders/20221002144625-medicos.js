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
                especialidad: "clinico",
                created_at: "2022-09-02 12:00:00.009+00",
                updated_at: "2022-09-02 12:00:00.009+00" 


            }


          }),
          models.medico.findOrCreate({

            where: {

                id: "2"

            },
            defaults: {
                nombre: "jose gomez",
                dni: "32145874",
                especialidad: "pediatra",
                created_at: "2022-09-02 12:00:00.009+00",
                updated_at: "2022-09-02 12:00:00.009+00" 


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
