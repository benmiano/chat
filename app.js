//setup for express app module
require("dotenv").config();
const http = require("http");
const express = require("express");

const cors = require("cors");

const app = express();
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
const server = http.createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"]
    }
});
// const io = socketio(server);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use(cors());

//exported modules
exports.app = app;
exports.server = server;
exports.io = io;