//Require NPM packages and models
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// require("./seeders/seed");

//Set Port
const PORT = process.env.PORT || 3000;

//Set Express
const app = express();

//Data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Public folder is static
app.use(express.static("public"));

//Use Logger
app.use(logger("dev"));

//Mongoose connect
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

//Require Routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

//Listening on PORT
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});