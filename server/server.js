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

app.get('/v1/request/create', (req, res) => {
    // In practice, will use req.params, but easier to modify the URL
    // query params during development
    const { username, title, description } = req.query;
    const { location, timeStart, timeEnd } = req.query;

    db.query(`INSERT INTO TABLE `)

    res.send(username);
});

server.listen(PORT, () => {
    db.connect();
    console.log(`Listening on ${PORT}`);
});

export default server;
