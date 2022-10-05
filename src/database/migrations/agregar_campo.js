'use strict';

module.exports = {
   up: (queryInterface, Sequelize) => {
      return Promise.all([
        queryInterface.addColumn('medico','especialidad', {

            type: Sequelize.STRING,
            allowNull: true,
        
        }),
    ]);
},
 

 down: (queryInterface, Sequelize) => {


 }
};
    
  
