const express = require("express");
const dbconnection = require("./mongo");
const app = express();
const port = 5000;

app.use(express.json());

app.get("/", async (req, res) => {
  let data = await dbconnection();
  data = await data.find({}).toArray();
  res.send(data);
});
app.post("/", async (req, res) => {
  let data = await dbconnection();
  data = await data.insertOne(req.body);
  res.send(req.body);
  console.log(req.body);
});
app.listen(port, (req, res) => {
  console.log("Server will be start");
});
