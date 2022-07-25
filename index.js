const express = require("express");
var cors = require("cors");

const app = express();
app.use(cors());

const port = 3000;
const rockBands = [
  { id: 1, name: "nofx" },
  { id: 2, name: "ramones" },
];

app.get("/", (req, res) => {
  res.send(rockBands);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
