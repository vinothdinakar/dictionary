Test cases for the Dictionary apiary apis
The project contains the wrapper api for the Dictionary api and test cases for the Dictionary api

Folder Structure

config
  Config folder contains the json file with all the config for the application. We can import the config file to
  use these config parameters.

lib
  Lib folder contains the common files like express and logger.
  The app file provides the initialize server function and start server function.
  The logger file uses the Winston logger.
  The express file initializes the express module and set up the middleware, cors settings, server routes.

module
  Module folder contains the api list divided by folder of components.

module->dictionary->routes
  Route folder contains the wrapper for the apiary api

module->dictionary->controller
  Controller folder contains the function which make the api call to apiary api

module->dictionary->test
  Test folder contains all the testcase written for apiary api

server.js
  This is the starter file from which we can start the application.

Project Setup

Node Version used - 12.13.1
Npm Version used - 6.12.1


1) Setup Authorization Header
  Before starting the server or executing the test cases, Please modify the apiaryDictionaryAuthCode property in
  the config file. The config file is located in '/config/config.js'. The Authorization Header code is needed for
  running the apiary apis.

2) Navigate to the project folder in the command prompt.

3) Run the command
>npm install
This will install the dependencies mentioned in package.json to node_modules folder

4) Running Testcases
  "npm test"
  The above command executes all the test cases available in the test file (dictionary.test.js)

5) Running Server
  "npm start"
  The above command starts the node server and listen through port 3000. We can call the wrapper api which in turn
  will call the apiary dictionary api.

