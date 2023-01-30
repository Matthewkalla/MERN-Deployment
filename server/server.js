const express = require("express");
const cors = require("cors");

const port = 8000;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./config/mongoose.config.js');


require("./routes/pets.routes")(app);

app.listen(port, () => console.log("connected on port " + port));