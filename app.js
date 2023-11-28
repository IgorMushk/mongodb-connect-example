// admin - adminadmin2
const mongoose = require("mongoose");

const DB_HOST = "mongodb+srv://admin:adminadmin2@cluster0.stlzv9d.mongodb.net/books_reader?retryWrites=true&w=majority";

// mongoose.set('strictQuery',true);

mongoose.connect(DB_HOST)
    .then(() => console.log("Database connect success"))
    .catch(error => console.log(error.message));