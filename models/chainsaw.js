'use strict';
const { Model, Sequelize } = require('sequelize');
const sequelize = require('../config/database');

module.exports = sequelize.define('chainsaws', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    title: {
        type: Sequelize.STRING
    },
    RPM: {
        type: Sequelize.INTEGER
    },
    power: {
        type: Sequelize.INTEGER
    },
    createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    deletedAt: {
        type: Sequelize.DATE,
    }
}, {
    paranoid: true,
    freezeTableName: true,
    modelName: 'chainsaws',
});
