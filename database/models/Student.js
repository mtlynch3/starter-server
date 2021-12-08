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
    type:URL,
    defaultValue: " "
  },

  gpa:{
    type: Sequelize.DOUBLE,
    validate:{min:0.0, max :4.0}
  }

});

module.exports = Student;