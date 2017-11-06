import express from "express";
import http from "http";
import mysql from "mysql";

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cs130_project',
});

const app = express();
const server = http.Server(app);
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Test GET request");
});

server.listen(PORT, () => {
    connection.connect();
    console.log(`Listening on ${PORT}`);

    connection.query('SELECT * FROM Test', (err, rows) => {
        if (err)
            throw err;

        console.log(rows);
    });
});

export default server;
