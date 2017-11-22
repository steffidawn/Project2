'use strict';
module.exports = (sequelize, DataTypes) => {
  var favorite = sequelize.define('favorite', {
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
      models.favorite.belongsTo(models.user);
      }
    }
  });
  return favorite;
};
