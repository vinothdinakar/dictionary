'use strict';

var Q = require('q');
var path = require('path');
var logger = require(path.resolve('./libs/logger'));
var request = require('request');
var config = require(path.resolve('./config/config'));

var dictionary = function () {

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

    this.createOrModifyKey = function (id, key, value, callbackFn) {
        logger.info('Creating or Modifying Key');

        var _url = config.apiaryDictionaryUrl.createOrModifyKey;
        _url = _url.replace(':id', id);
        _url = _url.replace(':key', key);
        _url += '?id=' + id + '&key=' + key;

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