const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const content = require("./routes/content");
const auth = require("./routes/auth");
const database = require("./config/database");
const { host } = require("./config/config");
const app = express();

const logger =(req,res,next) => {
  console.log(`Logged || req.method = ${req.method} || req.url = ${req.url} `)
  next();
}

app.use(express.urlencoded({ extended: false }));
let options = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(options));
app.use(cookieParser());
app.use(express.json());
app.use(logger);

app.use(auth);
app.use(content);

database()
  .then(() => {
    app.listen(4000, host, () => {
      console.log(`listening at port 4000, host ${host}`);
    });
  })
  .catch((err) => console.log(err));

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
