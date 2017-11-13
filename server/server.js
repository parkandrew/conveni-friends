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

// TODO: I think we could create our own function that handles the db queries
// so that we can define a way to handle errors

app.get('/', (req, res) => {
    res.send("Test GET request");
});

app.post('/v1/request/:requestId/complete', (req, res) => {
    const { username, time } = req.query;
    const { requestId } = req.params;

    const query = `UPDATE Request SET completed=${time} `
                + `WHERE requestId=${requestId}`;

    db.query(query, (error, results) => console.log(error || "Success"));
});

app.get('/v1/request/create', (req, res) => {
    // In practice, will use req.params, but easier to modify the URL
    // query params during development

    // We're also currently assuming that the frontend passes strings like
    // "string" rather than string.
    const { username, title, description } = req.query;
    const { location, timeStart, timeEnd } = req.query;

    // TODO: Gotta figure out a more cleaner way to do our queries ..
    const query = `INSERT INTO Request(requesterId,title,location,description,`
                + `timeStart,timeEnd) VALUES(${username},${title},`
                + `${location},${description},${timeStart},${timeEnd})`;

    db.query(query, (error, results) => console.log(error || "Success"));
});

server.listen(PORT, () => {
    db.connect();
    console.log(`Listening on ${PORT}`);
});

export default server;
