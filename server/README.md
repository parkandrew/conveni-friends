# Conveni-Friends Server

The server is built using [Express.js](http://expressjs.com/) built on top of the [Node.js](https://nodejs.org/) runtime. The server is connected to a MySQL database.

## Getting Started

### Installing

To install the required packages:

```
npm install
```

### Running locally

Create new MySQL database within MySQL shell:
```
create database cs130_project;
```

Edit server/server.js file. Comment lines 13-19 out:
```
// const pool = mysql.createPool({
//   connectionLimit : 50,
//   host: 'us-cdbr-iron-east-05.cleardb.net',
//   user: 'beffa2b11a15f1',
//   password: '704f96be',
//   database: 'heroku_f4bd3eb0d7b7de1',
// });
```
Uncomment the following lines, 20-27:
```
const pool = mysql.createPool({
    connectionLimit : 20,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cs130_project',
  });
```
This will create a local MySQL pool, to use your local version instead.

To run locally (Make sure you are within the server directory):

```
node index.js
```

## Running the tests

To run the test suite for the server:

```
mocha
```

## Built With

* [Node.js](https://nodejs.org/) - JavaScript runtime
* [Express.js](http://expressjs.com/) - Web framework for Node.js
* [Babel](https://babeljs.io/) - JavaScript compiler
* [WebSockets](https://github.com/websockets/ws) - Node.js WebSockets
* [mysql](https://github.com/mysqljs/mysql) - Node.js MySQL driver
* [sinon](http://sinonjs.org/) - Standalone test spies, stubs, and mocks for JavaScript
* [mocha](https://mochajs.org/) - JavaScript test framework
* [chai](http://chaijs.com/) - Node.js assertion library
