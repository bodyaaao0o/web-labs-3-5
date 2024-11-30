'use strict';
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('chainsaws', 'root', 'vitalik16', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
});

module.exports = sequelize;
