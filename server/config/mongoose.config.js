const mongoose = require('mongoose');

const database = "mern_exam";

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/"+database)
.then(() => console.log("Connected to the rebel database " + database))
.catch(err => console.log("Something's wrong capt!", err));