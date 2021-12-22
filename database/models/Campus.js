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

  address: {
    allowNull: false,
    type: Sequelize.STRING
  },

  imgurl:{
    type: Sequelize.STRING,
    defualtValue: "https://picsum.photos/200"
  }
});

module.exports = Campus;