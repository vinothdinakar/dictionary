'use strict';

/***
 * Dictionary.Controllers - The file implements the function which calls the apiary api for the dictionary
 *
 * @type {require} logger - local utility package for logging. Uses Winston logging
 * @type {require} config - local package to store all the application related config
 * @type {require} request - npm package to handle the http/https calls
 * @type {require} path - npm package to read and resolve the folder structure with the application
 *
 */

var path = require('path');
var logger = require(path.resolve('./libs/logger'));
var request = require('request');
var config = require(path.resolve('./config/config'));

var dictionary = function () {

    /**
     * createDictionary function implements the createDictionary API
     * The API creates an empty dictionary and pass the dictionary id in the response
     * URL and the Authorization code are read from the config file
     *
     * @param callbackFn {Function} Accepts the callback function as parameter to which the
     * response will be passed into
     */
    this.createDictionary = function (callbackFn) {
        logger.info('Creating Dictionary');

        request({
            method: 'POST',
            url: config.apiaryDictionaryUrl.createDictionary,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': config.apiaryDictionaryAuthCode
            },
            body: "{}"
        }, function (error, response, body) {
            logger.info('Status: '+ response.statusCode);
            logger.info('Headers: '+ JSON.stringify(response.headers));
            logger.info('Response: '+ body);
            callbackFn(response);

        });
    };

    /**
     * createOrModifyKey function implements the createOrModifyKey API
     * The API creates a new key or modifies the existing key
     * URL and the Authorization code are read from the config file
     *
     * @param id {String} id of the existing dictionary
     * @param key {String} name of the key to be added or modified
     * @param value {Number|String|Boolean|Object|Array} value of the key to be added or modified
     * @param callbackFn {Function} Accepts the callback function as parameter to which the
     * response will be passed into
     */
    this.createOrModifyKey = function (id, key, value, callbackFn) {
        logger.info('Creating or Modifying Key');

        var _url = config.apiaryDictionaryUrl.createOrModifyKey;
        _url = _url.replace(':id', id);
        _url = _url.replace(':key', key);

        logger.info(_url);

        var _body = {
            value: value
        };

        logger.info(JSON.stringify(_body));

        request({
            method: 'POST',
            url: _url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': config.apiaryDictionaryAuthCode
            },
            body: JSON.stringify(_body)
        }, function (error, response, body) {
            logger.info('Status: '+ response.statusCode);
            logger.info('Headers: '+ JSON.stringify(response.headers));
            logger.info('Response: '+ body);
            callbackFn(response);
        });
    };

    /**
     * getAllKeys function implements the getAllKeys API
     * The API gets the list of keys and their value in the existing dictionary
     * URL and the Authorization code are read from the config file
     *
     * @param id {String} id of the existing dictionary
     * @param callbackFn {Function} Accepts the callback function as parameter to which the
     * response will be passed into
     */
    this.getAllKeys = function (id, callbackFn) {
        logger.info('Getting All Keys');
        logger.info(id);

        var _url = config.apiaryDictionaryUrl.getAllKeys;
        _url = _url.replace(':id', id);

        logger.info(_url);

        request({
            method: 'GET',
            url: _url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': config.apiaryDictionaryAuthCode
            }
        }, function (error, response, body) {
            logger.info(response);
            logger.info('Status: '+ response.statusCode);
            logger.info('Headers: '+ JSON.stringify(response.headers));
            logger.info('Response: '+ body);
            callbackFn(response);
        });
    };

    /**
     * getKey function implements the getKey API
     * The API gets the value of the key in the existing dictionary
     * URL and the Authorization code are read from the config file
     *
     * @param id {String} id of the existing dictionary
     * @param key {String} name of the key
     * @param callbackFn {Function} Accepts the callback function as parameter to which the
     * response will be passed into
     */
    this.getKey = function (id, key, callbackFn) {
        logger.info('Getting Selected Key value');
        logger.info(id);

        var _url = config.apiaryDictionaryUrl.getKey;
        _url = _url.replace(':id', id);
        _url = _url.replace(':key', key);

        logger.info(_url);

        request({
            method: 'GET',
            url: _url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': config.apiaryDictionaryAuthCode
            }
        }, function (error, response, body) {
            logger.info(response);
            logger.info('Status: '+ response.statusCode);
            logger.info('Headers: '+ JSON.stringify(response.headers));
            logger.info('Response: '+ body);
            callbackFn(response);
        });
    };

    /**
     * deleteDictionary function implements the deleteDictionary API
     * The API deletes the existing dictionary
     * URL and the Authorization code are read from the config file
     *
     * @param id {String} id of the existing dictionary
     * @param callbackFn {Function} Accepts the callback function as parameter to which the
     * response will be passed into
     */
    this.deleteDictionary = function (id, callbackFn) {
        logger.info('Deleting Dictionary');

        var _url = config.apiaryDictionaryUrl.deleteDictionary;
        _url = _url.replace(':id', id);
        logger.info(_url);

        request({
            method: 'DELETE',
            url: _url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': config.apiaryDictionaryAuthCode
            },
            body: "{}"
        }, function (error, response, body) {
            logger.info('Status: ' + response.statusCode);
            logger.info('Headers:' + JSON.stringify(response.headers));
            logger.info('Response:' + body);
            callbackFn(response);
        });
    };

};


module.exports = new dictionary();