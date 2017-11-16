/**
 * @FileOverview Backend endpoints
 * @author Michael, Andrew, JJ, Kevin, Michelle, Brandon
 * @version: 1.0
 */

import express from "express";
import http from "http";
import mysql from "mysql";

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cs130_project',
});

const app = express();
const server = http.Server(app);
const PORT = 3000;
const HttpStatus = require('http-status-codes');

// HTTP body parser
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// TODO: We should split up the routes into separate files .. one for
// user endpoints, request endpoints, etc.

// TODO: I think we could create our own function that handles the db queries
// so that we can define a way to handle errors

app.get('/', (req, res) => {
    res.status(HttpStatus.OK).send("Test GET request");
});

/**
 * Called when a user first signs up for Convenifriends.
 *
 * Example call:
 * http://localhost:3000/v1/user/testUserId/signup
 *
 * @version 1
 * @param {string} userId - The user's desired username.
 * @param {string} password - The user's password.
 * @returns {res} The response, including an HTTP status indicating success or failure, and error info, if any.
 */
app.post('/v1/user/:userId/signup', upload.array(), (req, res) => {
    const userId = req.params.userId;
    const password = req.body['password'];

    const query = `INSERT INTO User(userId,password) ` +
                  `VALUES("${userId}","${password}")`;

    db.query(query, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .send({sqlMessage: error.sqlMessage, sqlCommand: error.sql, message: error.message});
        }
        else {
            console.log("Success");
            res.status(HttpStatus.OK).send('Success');
        }
    });
});

/********************************** USERS **********************************/

/**
 * Called when a user logs into Convenifriends.
 *
 * Example call:
 * http://localhost:3000/v1/user/testUserId/login
 *
 * @version 1
 * @param {string} userId - The user's username.
 * @param {string} password - The user's password.
 * @returns {res} The response, including an HTTP status indicating success or failure, and error info, if any.
 */
app.post('/v1/user/:userId/login', upload.array(), (req, res) => {
    const userId = req.params.userId;
    const password = req.body['password'];

    const query = `SELECT * FROM User ` +
                  `WHERE password="${password}" and userId="${userId}"`;

    db.query(query, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .send({sqlMessage: error.sqlMessage, sqlCommand: error.sql, message: error.message});
        }
        else {
            console.log("Success");
            res.status(HttpStatus.OK).send('Success');
        }
    });
});

/**
 * Called when a user updates their password in Convenifriends.
 *
 * Example call:
 * http://localhost:3000/v1/user/testUserId/update
 *
 * @version 1
 * @param {string} userId - The user's username.
 * @param {string} password - The user's old password.
 * @param {string} newPassword - The user's new password.
 * @returns {res} The response, including an HTTP status indicating success or failure, and error info, if any.
 */
app.post('/v1/user/:userId/update', upload.array(), (req, res) => {
    const userId = req.params.userId;
    const password = req.body['password'];
    const newPassword = req.body['newPassword'];

    const query = `UPDATE User SET password="${newPassword}" ` +
                  `WHERE userId="${userId}"`;

    db.query(query, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .send({sqlMessage: error.sqlMessage, sqlCommand: error.sql, message: error.message});
        }
        else {
            console.log("Success");
            res.status(HttpStatus.OK).send('Success');
        }
    });
});

/********************************** REQUESTS **********************************/

/**
 * Called when a user creates a new request.
 *
 * @version 1
 * @param {string} userId - The user's username.
 * @param {string} title - The title of the request.
 * @param {string} description - A description of the user's request.
 * @param {float} latitude - The latitude of the request's location.
 * @param {float} longitude - The longitude of the request's location.
 * @param {string} address - The address of the request's location.
 * @param {string} timeStart - The time the request was made.
 * @param {string} timeEnd - The time the request expires.
 * @returns {res} The response, including an HTTP status indicating success or failure. In the case of success, a requestId is also returned, and error info is returned in case of a failure.
 */
app.post('/v1/request/create', (req, res) => {
    // In practice, will use req.params, but easier to modify the URL
    // query params during development

    // We're also currently assuming that the frontend passes strings like
    // "string" rather than string.
    const { userId, title, description } = req.query;
    const { latitude, longitude, address, timeStart, timeEnd } = req.query;

    // TODO: Gotta figure out a more cleaner way to do our queries ..
    const query = `INSERT INTO Request(requesterId,title,latitude, ` +
                  `longitude,address,description,timeStart,timeEnd) ` +
                  `VALUES(${userId},${title},${latitude},${longitude},` +
                  `${address},${description},${timeStart},${timeEnd})`;

    db.query(query, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .send({sqlMessage: error.sqlMessage, sqlCommand: error.sql, message: error.message});
        }
        else {
            console.log("Success");
            res.status(HttpStatus.OK).send('Success');
        }
    });
});

/**
 * Called when a user deletes one of their existing requests.
 *
 * Example call:
 * http://localhost:3000/v1/request/1/delete?userId="test"
 *
 * @version 1
 * @param {int} requestId - The id of the request to be deleted.
 * @param {string} userId - The user's username.
 * @returns {res} The response, including an HTTP status indicating success or failure, and error info, if any.
 */
app.post('/v1/request/:requestId/delete', (req, res) => {
    const requestId = req.params.requestId;
    const { userId } = req.query;

    const query = `DELETE FROM Request ` +
                  `WHERE requestId=${requestId} AND ${time} < timeEnd`;

    db.query(query, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .send({sqlMessage: error.sqlMessage, sqlCommand: error.sql, message: error.message});
        }
        else {
            console.log("Success");
            res.status(HttpStatus.OK).send('Success');
        }
    });
});

/**
 * Called when a provider accepts a nearby unaccepted request.
 *
 * Example call:
 * http://localhost:3000/v1/request/1/accept?userId="test"&time="2017-04-04%2011:11:011"
 *
 * @version 1
 * @param {int} requestId - The id of the request to be accepted.
 * @param {string} userId - The provider's username.
 * @param {string} time - The time of acceptance.
 * @returns {res} The response, including an HTTP status indicating success or failure, and error info, if any.
 */
app.post('/v1/request/:request_id/accept', (req, res) => {
    const requestId = req.params.request_id;
    const { userId, time } = req.query;

    const query = `UPDATE Request ` +
                  `SET accepted=${time}, providerId=${userId} ` +
                  `WHERE requestId=${requestId} AND ${time} < timeEnd;`

    db.query(query, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .send({sqlMessage: error.sqlMessage, sqlCommand: error.sql, message: error.message});
        }
        else {
            console.log("Success");
            res.status(HttpStatus.OK).send('Success');
        }
    });
});

/**
 * Called when a requester confirms the acceptance of one of their requests.
 *
 * Example call:
 * http://localhost:3000/v1/request/1/confirm?userId="test"&time="2017-04-04%2011:11:011"
 *
 * @version 1
 * @param {int} requestId - The id of the request to be confirmed.
 * @param {string} userId - The requester's username.
 * @param {string} time - The time of confirmation.
 * @returns {res} The response, including an HTTP status indicating success or failure, and error info, if any.
 */
app.post('/v1/request/:request_id/confirm', (req, res) => {
    const requestId = req.params.request_id;
    const { userId, time } = req.query;

    const query = `UPDATE Request ` +
                  `SET confirmed=${time}, providerId=${userId} ` +
                  `WHERE requestId=${requestId} AND ${time} < timeEnd;`

    db.query(query, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .send({sqlMessage: error.sqlMessage, sqlCommand: error.sql, message: error.message});
        }
        else {
            console.log("Success");
            res.status(HttpStatus.OK).send('Success');
        }
    });
});

/**
 * Called when a provider completes one of their confirmed requests.
 *
 * Example call:
 * http://localhost:3000/v1/request/1/complete?userId="test"&time="2017-04-04%2011:11:011"
 *
 * @version 1
 * @param {int} requestId - The id of the request to be completed.
 * @param {string} userId - The provider's username.
 * @param {string} time - The time of completion.
 * @returns {res} The response, including an HTTP status indicating success or failure, and error info, if any.
 */
app.post('/v1/request/:requestId/complete', (req, res) => {
    const { userId, time } = req.query;
    const { requestId } = req.params;

    const query = `UPDATE Request SET completed=${time} `
                + `WHERE requestId=${requestId} AND ${time} < timeEnd`;

    db.query(query, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .send({sqlMessage: error.sqlMessage, sqlCommand: error.sql, message: error.message});
        }
        else {
            console.log("Success");
            res.status(HttpStatus.OK).send('Success');
        }
    });
});

/**
 * Called when a user looks up their existing requests.
 *
 * @version 1
 * @param {int} userId - The username of the user.
 * @returns {res} The response, including an HTTP status indicating success or failure, and the relevant requests. In the case of error, the response contains error info.
 */
app.get('/v1/user/:userId/requests', (req, res) => {
    const { userId } = req.params;

    const query = `SELECT * FROM Request `
                + `WHERE requesterId="${userId}" OR providerId="${userId}"`;

    db.query(query, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .send({sqlMessage: error.sqlMessage, sqlCommand: error.sql, message: error.message});
        }
        else {
            console.log("Success");
            res.status(HttpStatus.OK).send(results);
        }
    });
});

/**
 * Called when looking up all requests within a close geographical area.
 *
 * Example call:
 * http://localhost:3000/v1/requests/all?userId="test"&latitude=1.1&longitude=1.1
 *
 * @version 1
 * @param {string} userId - The requester's username.
 * @param {float} latitude - The latitude of the request's location.
 * @param {float} longitude - The longitude of the request's location.
 * @returns {res} The response, including an HTTP status indicating success or failure. Also returns a list of requests within a close area if no error, otherwise returns error info.
 */
app.get('/v1/requests/all', (req, res) => {
    const { userId, latitude, longitude } = req.query;

    // Check within a set box with a magic number (long/lat of 0.1 in this case) for now
    const query = `SELECT * FROM Request ` +
                  `WHERE accepted is NULL ` +
                  `AND latitude <= (${latitude} + 0.1) AND latitude >= (${latitude} - 0.1) ` +
                  `AND longitude <= (${longitude} + 0.1) AND longitude >= (${longitude} - 0.1)`;

    db.query(query, (error, results) => {
        if (error) {
            console.log(error);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .send({sqlMessage: error.sqlMessage, sqlCommand: error.sql, message: error.message});
        }
        else {
            console.log("Success");
            res.status(HttpStatus.OK).send(results);
        }
    });
});

server.listen(PORT, () => {
    db.connect();
    console.log(`Listening on ${PORT}`);
});

export default server;
