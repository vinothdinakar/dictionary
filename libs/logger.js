'use strict';
/***
 * Logger - The file implements the logger utility for the applicationfunction which calls the apiary api for the dictionary.
 * Instantiating the default winston application logger with the Console transport
 * Winston logging level { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 }
 *
 * @type {require} config - local package to store all the application related config
 * @type {require} winston - npm package to handle logging
 *
 */

var config = require('../config/config'),
    winston = require('winston');

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