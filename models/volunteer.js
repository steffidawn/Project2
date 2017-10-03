'use strict';
module.exports = (sequelize, DataTypes) => {
  var volunteer = sequelize.define('volunteer', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    bio: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return volunteer;
};