const nconf   = require('nconf');
const winston = require('winston');
const Logger  = require('./logger');

// Setup nconf to use (in-order):
//   1. Command-line arguments
//   2. Environment variables
nconf.use('memory')
nconf.argv().env({ separator : '_' });

// Get current environment variable
let environment = nconf.get('NODE:ENV') || 'dev';

// Load configuration file
nconf.file({ file: `config/${environment}.json` });

// Add Transports File to Logger
Logger.add(new winston.transports.File({
  filename: nconf.get('log'),
  handleExceptions: true
}));

module.exports = { environment };
