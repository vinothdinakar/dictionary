'use strict';

// include dependency
var express = require('express');
var router = express.Router();
var url = require('url');
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





//45e75b2b-71bb-417d-bc60-3d98e485d401


module.exports = router;