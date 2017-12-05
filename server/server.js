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
    password: '123',
    database: 'cs130_project',
});

export const app = express();
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
    // TODO1: This breaks the test for some reason
    // res.setHeader('Content-Type', 'application/json');
    res.status(HttpStatus.OK).send("Test GET request");
});

/**
 * Called when a user first signs up for Convenifriends.
 *
 * Example call:
 * http://localhost:3000/v1/user/testUserId/signup
 *
 * @name /v1/user/{userId}/signup
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
                .send({ message: "Internal server error." });
        }
        else {
            console.log("Success");
            res.status(HttpStatus.OK).send({});
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
 * @name /v1/user/{userId}/login
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
                .send({ message: "Internal server error." });
        }
        else {
            console.log("Success");
            res.status(HttpStatus.OK).send({});
        }
    });
});

/**
 * Called when a user updates their password in Convenifriends.
 *
 * Example call:
 * http://localhost:3000/v1/user/testUserId/update
 *
 * @name /v1/user/{userId}/update
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
                .send({ message: "Internal server error." });
        }
        else {
            console.log("Success");
            res.status(HttpStatus.OK).send({});
        }
    });
});

// Returns messageSessions
app.get('/v1/user/:userId/messageSessions', (req, res) => {
    const { userId } = req.params;

    // TODO: return MessageSessions where userId == userId1 or userId == userId2

    const messageSessionsExample = [
        {
            messageSessionId: 1,
            userId1: 'userId',
            userId2: 'someOtherUserId',
        },
        {
            messageSessionId: 2,
            userId1: 'anotherOtherUserId',
            userId2: 'userId',
        },
    ];

    res.send(messageSessionsExample);
});

/********************************** REQUESTS **********************************/

/**
 * Called when a user creates a new request.
 *
 * @name /v1/request/create
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
    console.log(req.body);
    const { userId, title, description } = req.body;
    const { latitude, longitude, address, timeStart, timeEnd } = req.body;

    // TODO: Gotta figure out a more cleaner way to do our queries ..
    const query = `INSERT INTO Request (requesterId, title, latitude, ` +
                  `longitude, address, description, timeStart, timeEnd) ` +
                  `VALUES ('${userId}', '${title}', ${latitude}, ${longitude}, ` +
                  `'${address}', '${description}', '${timeStart}', '${timeEnd}')`;

    db.query(query, (error, results) => {
        if (error) {
            console.log(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR)
               .send({  message: "Internal server error."  });
        }
        else {
            console.log("Success");
            res.status(HttpStatus.OK).send({});
        }
    });
});

/**
 * Called when a user deletes one of their existing requests.
 *
 * Example call:
 * http://localhost:3000/v1/request/1/delete?userId="test"
 *
 * @name /v1/request/{requestId}/delete
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
                  `WHERE requestId=${requestId} AND requesterId=${userId}`;

    db.query(query, (error, results) => {
        if (error) {
            console.log(error);
            res.status(HttpStatus.INTERNAL_SERVER_ERROR)
               .send({ message: error.message });
        } else {
            // Request doesn't exist or is expired
            if (results.affectedRows <= 0) {
                const err = "Request doesn't exist or is expired.";
                console.log(err);
                res.status(HttpStatus.NOT_FOUND).send({ message: err });

            // Delete succesful
            } else {
                console.log("Success");
                res.status(HttpStatus.OK).send({});
            }
        }
    });
});

/**
 * Called when a provider accepts a nearby unaccepted request.
 *
 * Example call:
 * http://localhost:3000/v1/request/1/accept?userId="test"&time="2017-04-04%2011:11:011"
 *
 * @name /v1/request/{requestId}/accept
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
            res.status(HttpStatus.INTERNAL_SERVER_ERROR)
               .send({ message: "Internal server error." });
        } else {
            // Request doesn't exist or is expired
            if (results.affectedRows <= 0) {
                const err = "Request doesn't exist or is expired.";
                console.log(err);
                res.status(HttpStatus.NOT_FOUND).send({ message: err });

            // Accept succesful
            } else {
                console.log("Success");
                res.status(HttpStatus.OK).send({});
            }
        }
    });
});

/**
 * Called when a requester confirms the acceptance of one of their requests.
 *
 * Example call:
 * http://localhost:3000/v1/request/1/confirm?userId="test"&time="2017-04-04%2011:11:011"
 *
 * @name /v1/request/{requestId}/confirm
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
            res.status(HttpStatus.INTERNAL_SERVER_ERROR)
               .send({ message: "Internal server error." });
        } else {
            // Request doesn't exist or is expired
            if (results.affectedRows <= 0) {
                const err = "Request doesn't exist or is expired.";
                console.log(err);
                res.status(HttpStatus.NOT_FOUND).send({ message: err });

            // Confirm succesful
            } else {
                console.log("Success");
                res.status(HttpStatus.OK).send({});
            }
        }
    });
});

/**
 * Called when a provider completes one of their confirmed requests.
 *
 * Example call:
 * http://localhost:3000/v1/request/1/complete?userId="test"&time="2017-04-04%2011:11:011"
 *
 * @name /v1/request/{requestId}/complete
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
            res.status(HttpStatus.INTERNAL_SERVER_ERROR)
               .send({ message: "Internal server error." });
        } else {
            // Request doesn't exist or is expired
            if (results.affectedRows <= 0) {
                const err = "Request doesn't exist or is expired.";
                console.log(err);
                res.status(HttpStatus.NOT_FOUND).send({ message: err });

            // Complete succesful
            } else {
                console.log("Success");
                res.status(HttpStatus.OK).send({});
            }
        }
    });
});

/**
 * Called when a user looks up their existing requests.
 *
 * @name /v1/user/{userId}/requests
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
                .send({ message: "Internal server error." });
        }
        else {
            console.log("Success");
            res.status(HttpStatus.OK).send(results);
        }
    });
});

/**
 * Called when a user looks up nearby requests.
 *
 * Example call:
 * http://localhost:3000/v1/requests/all?userId="test"&latitude="30"&longitude="30"
 *
 * @name /v1/requests/all
 *
 * @version 1
 * @param {int} userId - The username of the user.
 * @param {float} latitude - The current latitude of the user.
 * @param {float} longitude - The current longitude of the user.
 *
 * @returns {res} The response, including an HTTP status indicating success or failure, and the relevant requests. In the case of error, the response contains error info.
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
                .send({ message: "Internal server error." });
        }
        else {
            console.log("Success");
            res.status(HttpStatus.OK).send(results);
        }
    });
});

/********************************** MESSAGES **********************************/
app.get('/v1/message/session/:messageSessionId', (req, res) => {
    const { messageSessionId } = req.params;

    // TODO: Remove messageStubs and instead grab messages from mysql.
    // We have to reconstruct the messages to send to
    // the frontend. Our Message schema is not the same as the message object
    // required by GiftedChat.
    //
    // NOTE: user._id and user.name is always equal to senderId (this is how GiftedChat
    // knows who sent what).
    //
    // We are using GiftedChat (https://github.com/FaridSafi/react-native-gifted-chat)
    // for the messaging interface, for a message object has the form:
    //
    // { _id, text, createdAt, user: {_id, name}, optionalParams }
    const messageExamples1 = [
      {
          _id: 1,
          text: 'My message to someOtherUserId',
          createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
          user: {
            _id: 'userId',
            name: 'userId',
          },
      },
      {
        _id: 2,
        text: `someOtherUserId's message to me`,
        createdAt: new Date(Date.UTC(2016, 6, 11, 17, 20, 0)),
        user: {
          _id: 'someOtherUserId',
          name: 'someOtherUserId',
        },
      }
    ];

    const messageExamples2 = [
      {
          _id: 1,
          text: 'My message to anotherOtherUserId',
          createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
          user: {
            _id: 'userId',
            name: 'userId',
          },
      },
      {
        _id: 2,
        text: `anotherOtherUserId's message to me`,
        createdAt: new Date(Date.UTC(2016, 6, 11, 17, 20, 0)),
        user: {
          _id: 'anotherOtherUserId',
          name: 'anotherOtherUserId',
        },
      }
    ];

    res.send(messageSessionId == 1 ? messageExamples1 : messageExamples2);
});

app.post('/v1/message/send', (req, res) => {
    const { message, senderId, receiverId } = req.query;
    console.log(JSON.stringify(message));

    // TODO for JJ: Need to do websockets (i.e. senderId's websocket to receiverId's
    // websocket).

    // TODO: Need to store message into db. It will come in our custom GiftedChat
    // message format and needs to be converted to our mysql Message schema.
    // Don't forget that senderId == user._id

    // NOTE: The GiftedChat._id is different than our Message schema id (which
    // currently is an autoincremented int). This needs to be addressed somehow.

    // TODO: Need to send success/error responses
    res.send('ok')
});

server.listen(PORT, () => {
    db.connect();
    console.log(`Listening on ${PORT}`);
});

export default server;
