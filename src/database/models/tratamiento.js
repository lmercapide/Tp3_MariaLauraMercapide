'use strict'



module.exports = (sequelize, DataTypes) => {

    let Tratamiento = sequelize.define('tratamiento', {
        
        id: {
            type: DataTypes.BIGINT,
            autoIncrement:true,
            primaryKey: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        updateAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        deletedAt: {
            type: DataTypes.DATE,
            field: 'deleted_at',
            
        }
      
     }, { paranoid: true,
        freezeTableName: true,
    })

    Tratamiento.associate = models => {

            Tratamiento.hasMany(models.paciente)
    }
    return Tratamiento

  }


