const Sequelize = require('sequelize');
const config = require('../config/database.js');
const PessoaModel = require('./Pessoa.js');

const connection = new Sequelize(config);

const Pessoa = PessoaModel(connection, Sequelize.DataTypes);

module.exports = {
    Pessoa,
    connection
};