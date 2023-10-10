const Sequalize = require("sequelize")

const sequelize = require("../util/database")

const User = sequelize.define("user",{
    id:{
        type:Sequalize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    email:{
        type:Sequalize.STRING,
    },
    name:Sequalize.STRING
});

module.exports = User