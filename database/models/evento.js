'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Patrocinio,{
        foreignKey: 'eventoId',
        as: 'patrocinios'
      },models.Noticia,{
        foreignKey: 'eventoId',
        as: 'noticias'
      },models.Oficina,{
        foreignKey: 'eventoId',
        as: 'oficinas'
      });
    }
  }
  Evento.init({
    nome: DataTypes.STRING,
    frase: DataTypes.STRING,
    sobre: DataTypes.STRING,
    datainicio: DataTypes.DATE,
    datafim: DataTypes.DATE,
    logo: DataTypes.STRING,
    banner: DataTypes.STRING,
    local: DataTypes.STRING,
    fotosobre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Evento',
  });
  return Evento;
};