const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`express App on port ${port}!`);
  console.log(`http://localhost:${port}/`);
});