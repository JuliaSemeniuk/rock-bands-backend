const express = require("express");
const { rockBands } = require("./rock-bands-data");
var cors = require("cors");

const app = express();
app.use(cors());

const port = 3000;

app.get("/", (req, res) => {
  res.send(rockBands);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
