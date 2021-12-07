const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  },

  imageUrl:{
    type: URL,
    defaultValue:" "
  },

  description:{
    type:Sequelize.STRING(5000)
  }
});

module.exports = Campus;