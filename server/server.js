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

// TODO: Validation of request params. Although, I'm thinking that Validation
// should be done client side, aka before the make the request, so we'll discuss
// that

app.get('/', (req, res) => {
    res.send("Test GET request");
});

// Example call:
// http://localhost:3000/v1/request/create?userId="test"&title="testtitle"&description="testdescription"&location="testlocation"&timeStart="%2017-03-03%2011:11:11"&timeEnd="2017-04-04%2011:11:011"
app.get('/v1/request/create', (req, res) => {
    // In practice, will use req.params, but easier to modify the URL
    // query params during development

    // We're also currently assuming that the frontend passes strings like
    // "string" rather than string.
    const { userId, title, description } = req.query;
    const { location, timeStart, timeEnd } = req.query;

    // TODO: Gotta figure out a more cleaner way to do our queries ..
    const query = `INSERT INTO Request(requesterId,title,location,description,` +
                  `timeStart,timeEnd) VALUES(${userId},${title},` +
                  `${location},${description},${timeStart},${timeEnd})`;

    db.query(query, (error, results) => {
        if (error) {
            console.log(error.message);
        } else {
            console.log("SUCCESS!");
            console.log(results);
        }
    });
});

// Example call:
// http://localhost:3000/v1/request/1/delete?userId="test"
app.post('/v1/request/:request_id/delete', (req, res) => {
    const requestId = req.params.request_id;
    const { userId } = req.query;

    const query = `DELETE FROM Request `
                + `WHERE requestId=${requestId} AND requesterId=${userId}`;
    console.log(query)
    
    db.query(query, (error, results) => {
        if (error) {
            console.log(error.message);
        } else {
            console.log("SUCCESS!");
            console.log(results);
        }
    });
});

server.listen(PORT, () => {
    db.connect();
    console.log(`Listening on ${PORT}`);
});

export default server;
