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
    type: Sequelize.STRING,
    allowNull: false,
    isEmail: true
  },
  gpa:{
    type: Sequelize.FLOAT,
    defaultValue: 0.0,
    len: [0.0,4.0]
  },

  imgurl:{
    type:Sequelize.STRING,
    defaultValue:"https://picsum.photos/200"
  }
});

module.exports = Student;