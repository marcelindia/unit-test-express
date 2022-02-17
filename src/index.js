const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

const port = 8001;

// app.listen(port, () => {
//   console.log(`Listening on port, ${port}`);
// });

module.exports = app;
