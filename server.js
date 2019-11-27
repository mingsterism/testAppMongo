const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

const app = express();
const port = 3000;
const client = require("./mongoConn");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

function mongoConn(req, res) {
  const city = req.body.data;
  client().then(db => {
    console.log("DB INSERT");
    db.collection(city).insertOne({ test: "randal" });
  });
  res.sendStatus(200);
}

app.post("/submitCity", mongoConn);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
