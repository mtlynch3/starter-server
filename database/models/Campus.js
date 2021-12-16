const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  address:{
    type:Sequelize.STRING,
    allowNull:false
  },

  description: {
    type: Sequelize.STRING(8000),
  },

  imageUrl:{
    type: Sequelize.STRING,
    defaultValue:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kindpng.com%2Fimgv%2FobRJJT_user-profile-avatar-login-account-male-user-icon%2F&psig=AOvVaw1m2ZA3Xu_-rIkE5MIKapHO&ust=1639355448848000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOib5IuB3fQCFQAAAAAdAAAAABAD "
  },

});

module.exports = Campus;