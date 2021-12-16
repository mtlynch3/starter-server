const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email:{
    type:Sequelize.STRING,
    allowNull:false
  },

  imageUrl:{
    type:Sequelize.STRING,
    defaultvalue:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kindpng.com%2Fimgv%2FobRJJT_user-profile-avatar-login-account-male-user-icon%2F&psig=AOvVaw1m2ZA3Xu_-rIkE5MIKapHO&ust=1639355448848000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOib5IuB3fQCFQAAAAAdAAAAABAD'
  },

  gpa:{
    type: Sequelize.DOUBLE,
    validate:{min:0.0, max :4.0}
  }

});

module.exports = Student;