const express = require("express");
const http = require("http");
const path = require("path");
const app = express();
const server = http.Server(app);


app.get("/", (req, res) 0=> {
  res.sendFile(path.resolve("Brawlhalla.html"));
})
app.use(express.static("static"));
port = process.env.PORT || 3000
server.listen(port, () => {
  console.log(port)
})
