const Sequalize = require("sequelize")

const sequelize = new Sequalize("node-app", "root", "73588Ram@", { dialect: "mysql", host: "localhost" })

module.exports =sequelize