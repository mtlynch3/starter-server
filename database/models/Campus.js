const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },


  imageUrl:{
    type: Sequelize.STRING,
    defaultValue:"https://i.picsum.photos/id/875/200/300.jpg?hmac=9NSoqXHP89pGlq4Sz3OgGxjx5c91YHJkcIOBFgNJ8xA"
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description:{
    type:Sequelize.TEXT('long')
  }

});

module.exports = Campus;