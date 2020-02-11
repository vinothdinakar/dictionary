'use strict';

/***
 * dictionary.test - The file lists out the test cases for the dictionary api
 *
 * @type {require} dictionary.controllers - The actual api calls are implemented in this controller file
 *
 */

process.env.NODE_ENV = 'test';
const dictionaryController = require('../controllers/dictionary.controllers');

describe("Dictionary API", () => {

    let dictionaryId = '0';
    // Sample object for testing
    let dictionaryObj = {
        name: 'apple',
        color: ['green', 'red'],
        available: true,
        count: 5,
        source: {
            farmName: 'TexasAgri'
        }
    };
    let newCount = 100;

    test("should create an empty dictionary", (done) => {
        let callbackFn = function (responseObj) {
            try {
                dictionaryId = JSON.parse(responseObj.body).id;
                //console.log(dictionaryId);
                expect(responseObj.statusCode).toBe(201);
                expect(responseObj.body).toBeDefined();
                expect(JSON.parse(responseObj.body)).toHaveProperty('id');
                done();
            } catch (error) {
                done(error);
            }
        };
        dictionaryController.createDictionary(callbackFn);
    });

    test("should add keys to existing dictionary - string", (done) => {
        let callbackFn = function (responseObj) {
            try {
                expect(responseObj.statusCode).toBe(200);
                done();
            } catch (error) {
                done(error);
            }
        };
        dictionaryController.createOrModifyKey(dictionaryId, 'name', dictionaryObj['name'], callbackFn);
    });

    test("should add keys to existing dictionary - number", (done) => {
        let callbackFn = function (responseObj) {
            try {
                expect(responseObj.statusCode).toBe(200);
                done();
            } catch (error) {
                done(error);
            }
        };
        dictionaryController.createOrModifyKey(dictionaryId, 'count', dictionaryObj['count'], callbackFn);
    });

    test("should add keys to existing dictionary - object", (done) => {
        let callbackFn = function (responseObj) {
            try {
                expect(responseObj.statusCode).toBe(200);
                done();
            } catch (error) {
                done(error);
            }
        };
        dictionaryController.createOrModifyKey(dictionaryId, 'source', dictionaryObj['source'], callbackFn);
    });

    test("should add keys to existing dictionary - boolean", (done) => {
        let callbackFn = function (responseObj) {
            try {
                expect(responseObj.statusCode).toBe(200);
                done();
            } catch (error) {
                done(error);
            }
        };
        dictionaryController.createOrModifyKey(dictionaryId, 'available', dictionaryObj['available'], callbackFn);
    });

    test("should add keys to existing dictionary - array", (done) => {
        let callbackFn = function (responseObj) {
            try {
                expect(responseObj.statusCode).toBe(200);
                done();
            } catch (error) {
                done(error);
            }
        };
        dictionaryController.createOrModifyKey(dictionaryId, 'color', dictionaryObj['color'], callbackFn);
    });

    test("should get all keys from dictionary", (done) => {
        let callbackFn = function (responseObj) {
            try {
                expect(responseObj.statusCode).toBe(200);
                expect(responseObj.body).toBeDefined();
                expect(JSON.parse(responseObj.body)).toHaveProperty('id');
                expect(JSON.parse(responseObj.body)).toHaveProperty('name');
                expect(JSON.parse(responseObj.body)).toHaveProperty('count');
                expect(JSON.parse(responseObj.body)).toHaveProperty('available');
                expect(JSON.parse(responseObj.body)).toHaveProperty('source');
                expect(JSON.parse(responseObj.body)).toHaveProperty('color');
                done();
            } catch (error) {
                done(error);
            }
        };
        dictionaryController.getAllKeys(dictionaryId, callbackFn);
    });

    test("should modify keys to existing dictionary - number", (done) => {
        let callbackFn = function (responseObj) {
            try {
                expect(responseObj.statusCode).toBe(200);
                done();
            } catch (error) {
                done(error);
            }
        };
        dictionaryController.createOrModifyKey(dictionaryId, 'count', newCount, callbackFn);
    });

    test("should get value of selected key from existing dictionary", (done) => {
        let callbackFn = function (responseObj) {
            try {
                expect(responseObj.statusCode).toBe(200);
                expect(responseObj.body).toBeDefined();
                expect(JSON.parse(responseObj.body)).toHaveProperty('value');
                expect(JSON.parse(responseObj.body)['value']).toBe(newCount);
                done();
            } catch (error) {
                done(error);
            }
        };
        dictionaryController.getKey(dictionaryId, 'count', callbackFn);
    });

    test("should delete the existing dictionary", (done) => {
        let callbackFn = function (responseObj) {
            try {
                expect(responseObj.statusCode).toBe(204);
                done();
            } catch (error) {
                done(error);
            }
        };
        dictionaryController.deleteDictionary(dictionaryId, callbackFn);
    });
});
