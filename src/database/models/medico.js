'use strict'



module.exports = (sequelize, DataTypes) => {

    let Medico = sequelize.define('medico', {
        
        id: {
            type: DataTypes.BIGINT,
            autoIncrement:true,
            primaryKey: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allownull: false
        },
        dni: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        especialidad: {
            type: DataTypes.STRING,
            allownull: false
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

    Medico.associate = models => {
            Medico.hasMany(models.paciente)
    }
    return Medico

  }


