const Sequelize = require('sequelize');
const db = require('../db');

const Campuses = db.define("campuses", {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageURL: {
    type: Sequelize.STRING,
    defaultValue: "https://www.pngitem.com/pimgs/m/326-3263617_university-icon-png-transparent-png.png"
  }

  description: {
    type: Sequelize.STRING,
  }

});

module.exports = Campuses;