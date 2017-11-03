import express from "express";

const server = express();
const PORT = 3000;

server.get('/', (req, res) => {
    res.send("Test GET request");
});

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

export default server;
