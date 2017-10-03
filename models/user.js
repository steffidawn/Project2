var bcrypt = require('bcrypt');

'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Invalid email address.'
        }
      }
  },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8,99],
          msg: 'Password must be between 8 and 99 characters.'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: function(createUser, options, cb) {
        var hash = bcrypt.hashSync(createdUser.password, 10);
        createdUser.password.hash;
        cb(null, createdUser);
      }
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
    }
    },
    instanceMethods: {
      validPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
      },
      toJSON: function() {
        var jsonUser = this.get();
        delete jsonUser.password;
        return jsonUser;
      }
    }
  });
  return user;
};
