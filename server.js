const connectDB = require("./backend/database/db");
const application = require("./app");
const app = application.app;
const server = application.server;
const io = application.io;

// const User = require("./backend/models/users");
// const Message = require("./backend/models/message");
// const Chatroom = require("./backend/models/chats");
// import controllers
const { addUser, removeUser, getUser, getUsersInRoom } = require('./backend/controllers/userController');

connectDB();
//run when client connects
io.on("connection", (socket) => {
    // on someone joining ie. join event from frontend
    socket.on("join", ({ name, room }, callback) => {
        const {error, user} = addUser({  id : socket.id, name, room});

        if (error) return callback(error);

        socket.emit('message', {user: 'admin', text: `${user.name}, welcome to the room ${user.room}`});
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text : `${user.name} has joined!`});

        socket.join(user.room);

        io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)});

        callback();
        
    });
    // on sending message from frontend
    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        io.to(user.room).emit('message', {user: user.name, text: message});
        io.to(user.room).emit('roomData', {room: user.room, users: getUsersInRoom(user.room)});
        callback();
    })
    // on disconnect
    socket.on("disconnect", () => {
        const user = removeUser(socket.id);

        if(user){
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left.`});
        }
    })
})



let port = process.env.PORT;
if (port == null || port == "") {
    port = 5000;
}

server.listen(port, () => {
    console.log(`server stared successfully on port ${port}`);
})