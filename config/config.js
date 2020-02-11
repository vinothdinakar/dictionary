/*
    All the config variables are stored in this common file
 */

var config = {
    app: {
        title: 'Dictionary-Jest Implementation',
        description: 'This is a sample application for Jest Implementation.',
        version: '0.0.1'
    },
    port: process.env.PORT || 3000,
    apiaryDictionaryUrl: {
        createDictionary: 'https://dictionary.iachieved.it/dictionary',
        createOrModifyKey: 'https://dictionary.iachieved.it/dictionary/:id/keys/:key',
        getAllKeys: 'https://dictionary.iachieved.it/dictionary/:id/keys',
        getKey: 'https://dictionary.iachieved.it/dictionary/:id/keys/:key',
        deleteDictionary: 'https://dictionary.iachieved.it/dictionary/:id'
    },
    apiaryDictionaryAuthCode: ''
};

module.exports = config;