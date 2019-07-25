const knex = require('knex')
const config = require('../knexfile')
require('dotenv').config()

const environment = process.env.DB || 'development'

module.exports = knex(config[environment])
