'use strict';

var config = require('../config/config'),
    winston = require('winston');

// Instantiating the default winston application logger with the Console
// transport
// Winston logging level { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
var logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: 'silly',
            colorize: true,
            showLevel: true,
            handleExceptions: true,
            humanReadableUnhandledException: true,
            format: winston.format.simple(),
            silent: process.env.NODE_ENV === 'test'
        })
    ],
    exitOnError: false
});

module.exports = logger;