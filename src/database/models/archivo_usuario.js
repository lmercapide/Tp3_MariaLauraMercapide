'use strict'



module.exports = (sequelize, DataTypes) => {

    let ArchivoUsuario = sequelize.define('archivo_usuario', {
        
        id: {
            type: DataTypes.BIGINT,
            autoIncrement:true,
            primaryKey: true,
            allowNull: false
        },
        nombre: {    //por si un usuario decide subir varios archivos, y de esta manera podremos saber más fácil
            type: DataTypes.STRING,
            allowNull: false
        },
        file: {  //guardará el nombre original del archivo cuando se sube
            type: DataTypes.STRING,
            allowNull: true
        },
        original_name: {   //guardará un nombre identificatorio para guardarlo en nuestro servidor
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

    ArchivoUsuario.associate = models => {

        ArchivoUsuario.belongsTo(models.usuario)
    }
    return ArchivoUsuario

  }


