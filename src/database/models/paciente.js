'use strict'
module.exports = (sequelize, DataTypes) => {

    let Paciente = sequelize.define('paciente', {
        
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
        dni: {
            type: DataTypes.INTEGER,
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
            defaultValue: DataTypes.NOW,
            allowNull: false
        }
     }, { paranoid: true,
        freezeTableName: true,
    })
 
     Paciente.association = models => {
        Paciente.belongsTo(models.medico)
        Paciente.hasMany(models.tratamiento)
    }
    return Paciente

  }


