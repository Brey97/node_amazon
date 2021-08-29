const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Vivre un peu");
});

app.get("/", (req, res) => {
  res.send("Soliterrien");
});
