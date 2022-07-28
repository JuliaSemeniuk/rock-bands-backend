const express = require("express");
const { rockBands } = require("./rock-bands-data");
var cors = require("cors");

const app = express();
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

const port = 3001;

app.get("/", (req, res) => {
  res.send(rockBands);
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.put;
app.delete;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
