const mongoose = require('mongoose');


const connectToMongo = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/noteDB")
        .then(() => { console.log("MongoDB Connected successfully!") })
        .catch((err) => console.error("Connection Failed!"))
}

module.exports = connectToMongo;