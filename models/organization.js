'use strict';
module.exports = (sequelize, DataTypes) => {
  var organization = sequelize.define('organization', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    about: DataTypes.STRING,
    cause: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        //add event model with date/time later
        // models.organization.hasMany(models.event);
      }
    },
    instanceMethods: {
      getName: function() {
        return this.name;
      }
    }
  });
  return organization;
};
