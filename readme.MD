<h1>Test cases for the Dictionary apiary apis.</h1>
  
The project contains the wrapper api for the Dictionary api and test cases for the Dictionary api

<h2>Folder Structure</h2>

<h4>config</h4>
  Config folder contains the json file with all the config for the application. We can import the config file to
  use these config parameters.

<h4>lib</h4>
  Lib folder contains the common files like express and logger.
  The app file provides the initialize server function and start server function.
  The logger file uses the Winston logger.
  The express file initializes the express module and set up the middleware, cors settings, server routes.

<h4>module</h4>
  Module folder contains the api list divided by folder of components.

<h4>module->dictionary->routes</h4>
  Route folder contains the wrapper for the apiary api

<h4>module->dictionary->controller</h4>
  Controller folder contains the function which make the api call to apiary api

<h4>module->dictionary->test</h4>
  Test folder contains all the testcase written for apiary api

<h4>server.js</h4>
  This is the starter file from which we can start the application.

<h2>Project Setup</h2>

Node Version used - 12.13.1<br>
Npm Version used - 6.12.1


1) Setup Authorization Header<br>
  Before starting the server or executing the test cases, Please modify the apiaryDictionaryAuthCode property in
  the config file. The config file is located in '/config/config.js'. The Authorization Header code is needed for
  running the apiary apis.

2) Navigate to the project folder in the command prompt.<br>

3) Run the command<br>
    >npm install<br>
This will install the dependencies mentioned in package.json to node_modules folder

4) Running Testcases<br>
    >npm test<br>
  The above command executes all the test cases available in the test file (dictionary.test.js)
  
  ![Test Screenshot](/public/images/test.png)
  

5) Running Server<br>
     >npm start<br>
  The above command starts the node server and listen through port 3000. We can call the wrapper api which in turn
  will call the apiary dictionary api.

![Server Screenshot](/public/images/server.png)
