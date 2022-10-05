'use strict';

const models = require('../models/index')

module.exports = {
   up (queryInterface, Sequelize){
      return Promise.all([

          models.paciente.findOrCreate({

            where: {

                id: "1"

            },
            defaults: {
                nombre: "Lucia Gomez",
                dni: "41212541",
                created_at: "2022-09-02 12:00:00.009+00",
                updated_at: "2022-09-02 12:00:00.009+00" 


            }


          }),
          models.paciente.findOrCreate({

            where: {

                id: "2"

            },
            defaults: {
                nombre: "Matias Sanchez",
                dni: "10793398",
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
