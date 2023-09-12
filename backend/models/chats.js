const mongoose = require("mongoose");
// Chatroom model
const chatroomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
}
)
const Chatroom = mongoose.model("Chatroom", chatroomSchema);
module.exports = Chatroom;