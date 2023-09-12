const mongoose = require("mongoose");
// Message model
const messageSchema = new mongoose.Schema({
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Chatroom"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    message: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)
const Message = mongoose.model("Message", messageSchema);
module.exports = Message;