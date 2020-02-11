'use strict';

/***
 * App - The file implements the server related function like init, start and error handling functions
 *
 * @type {require} logger - local utility package for logging. Uses Winston logging
 * @type {require} config - local package to store all the application related config
 * @type {require} express - local package to wrap the actual express nom package
 * @type {require} http - npm package to handle the node http server creation
 *
 */
var config = require('../config/config');
var logger = require('./logger');
var express = require('./express');
var http = require('http');
var server;

module.exports.serverInit = function (app, callback) {
    logger.info('----------------------------------------------------');
    logger.info('Initializing the server');
    /**
     * Create HTTP server.
     */

    var server = http.createServer(app);

    /**
     * Listen on provided port, on all network interfaces.
     */

    server.listen(config.port, function () {
        logger.info('----------------------------------------------------');
        logger.info(config.app.title);
        logger.info();
        logger.info('Running in port     :     ' + config.port);
        logger.info('App version:        :     ' + config.app.version);
        logger.info('----------------------------------------------------');
        logger.info('----------------------------------------------------');
    });
    server.on('error', onError);
    server.on('listening', onListening);
    if (callback) {
        callback();
    }
    return server;
};
/**
 * Initialize the application
 */
module.exports.init = function (callback) {
    // Initialize app
    logger.info('Initialize app');
    var app = express.init();
    // Initialising the http server
    server = this.serverInit(app, callback);
};

/**
 * Starts the application
 */
module.exports.start = function (callback) {
    // Start app
    this.init(callback);
};


/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof config.port === 'string'
        ? 'Pipe ' + config.port
        : 'Port ' + config.port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    logger.info('Listening on ' + bind);
}

process.on('uncaughtException', function (err) {
    logger.error(err);
    logger.info('Node NOT Exiting...');
});