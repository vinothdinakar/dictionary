'use strict';

/***
 * Dictionary.Routes - The file implements the wrapper api of the apiary api for the dictionary
 *
 * @type {require} express - npm package for the web framework
 * @type {require} path - npm package to read and resolve the folder structure with the application
 * @type {require} logger - local utility package for logging. Uses Winston logging
 * @type {require} dictionary.controllers - local package which implements the actual api calls
 * @type {require} request - npm package to handle the http/https calls
 *
 */
var express = require('express');
var router = express.Router();
//var url = require('url');
var path = require('path');
var logger = require(path.resolve('./libs/logger'));
var dictionaryController = require('../controllers/dictionary.controllers');
var request = require('request');


router.get('/create', function (req, res, next) {
    dictionaryController.createDictionary(function (returnObj) {
        res.json(returnObj);
    });
});

router.get('/createOrModifyKey/:id/:key/:value', function (req, res, next) {
    var id = req.params.id;
    var key = req.params.key;
    var value = req.params.value;

    dictionaryController.createOrModifyKey(id, key, value, function (returnObj) {
        res.json(returnObj);
    });
});

router.get('/getAllKeys/:id', function (req, res, next) {
    var id = req.params.id;
    logger.info(id);

    dictionaryController.getAllKeys(id, function (returnObj) {
        res.json(returnObj);
    });
});

router.get('/getKey/:id/:key', function (req, res, next) {
    var id = req.params.id;
    var key = req.params.key;
    logger.info(id);

    dictionaryController.getKey(id, key, function (returnObj) {
        res.json(returnObj);
    });
});

router.get('/deleteDictionary/:id', function (req, res, next) {
    var id = req.params.id;

    dictionaryController.deleteDictionary(id, function (returnObj) {
        res.json(returnObj);
    });
});

module.exports = router;