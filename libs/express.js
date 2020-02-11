'use strict';

/***
 * App - The file implements the server related function like init, start and error handling functions
 *
 * @type {require} logger - local utility package for logging. Uses Winston logging
 * @type {require} express - npm package for the web framework
 * @type {require} path - npm package to read and resolve the folder structure with the application
 * @type {require} body-parser - npm package to parse the request bodies in the middleware
 * @type {require} fs - npm package to read the folder and files in the application
 *
 */
var express = require('express');
var path = require('path');
var logger = require('./logger');
var bodyParser = require('body-parser');
var fs = require('fs');

/**
 * Initialize application middleware
 */
module.exports.initMiddleware = function (app) {
    // Showing stack errors
    app.set('showStackError', true);

    // Request body parsing middleware
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
};

/**
 * Configure the modules static routes
 */
module.exports.initCORSSettings = function (app) {
    // Global Properties for CORS settings
    app.use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });
};

/**
 * Configure the modules server routes.
 * The files need to be read synchronously because the server declaration
 * happens synchronously in app.js init().
 *
 * The routes will be used as /moduleName/endpoint.
 * Where moduleName is the module directory name.
 */
module.exports.initModulesServerRoutes = function (app) {
    var modulesPath = path.resolve('./modules');
    try {
        var list = fs.readdirSync(modulesPath);

        console.log('Modules list: ' + list.join(', '));
        list.forEach(function (moduleName) {
            try {
                var routeFiles = fs.readdirSync(modulesPath + '/' + moduleName + '/routes');

                if (routeFiles) {
                    routeFiles.forEach(function (routeFile) {
                        var routeFilePath = modulesPath + '/' + moduleName + '/routes/' + routeFile;
                        var routePath = '/api/' + moduleName;
                        console.log('Adding routes to: ' + routePath + ' : ' + routeFilePath);
                        var routes = require(routeFilePath);
                        app.use(routePath, routes);
                    });
                }
            } catch (e) {
                console.error('Error while reading routes files: ' + modulesPath + '/' + moduleName + '/routes. ' + e);
            }
        });
    } catch (e) {
        console.error('Error while reading modules directory. ' + e);
    }
};

/**
 * Configure error handling
 */
module.exports.initErrorRoutes = function (app) {
    // catch 404 and forward to error handler
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
};



/**
 * Initialize the Express application
 */
module.exports.init = function (db) {
    // Initialize express app
    logger.info('Initialize express app');
    var app = express();

    // Initialize Express middleware
    this.initMiddleware(app);

    // Initialize the CORS settings
    this.initCORSSettings(app);

    // Initialize modules server routes
    this.initModulesServerRoutes(app);

    // Initialize error routes
    this.initErrorRoutes(app);

    return app;
};