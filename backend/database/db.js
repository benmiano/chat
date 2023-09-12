const mongoose = require("mongoose");

// import models

const connectDB = async () => {
    try {
        // establish db connection
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log(`Database connected successfully`);
        // import models
        require("../models/users");
        require("../models/message");
        require("../models/chats");
    } catch (err) {
        // incase of db connection error
        console.error(`Error: ${err.message}`);

    }
}

module.exports = connectDB;