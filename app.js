const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");

const router = express.Router();

//Body Parser
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/", require("./routes/user"));
app.use("/post", require("./routes/post"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
