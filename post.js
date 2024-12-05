const express = require("express");
const dbconnection = require("./mongo");
const app = express();
const port = 3000;
app.use(express.json());
app.post("/", async (req, res) => {
  let datastore = await dbconnection();
  datastore = await datastore.insertOne(req.body);
  res.send(req.body);
  console.log(req.body);
});
app.listen(port, (req, res) => {
  console.log("Server will be start");
});
