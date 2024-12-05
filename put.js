const express = require("express");
const dbconnection = require("./mongo");
const app = express();
const port = 5000;
app.use(express.json());

app.put("/:name", async (req, res) => {
  let data = await dbconnection();
  //data = await data.updateOne({ name: "Varun" }, { $set: { age: 34 } });//single line code update
  data = await data.updateOne({ name: req.params.name }, { $set: req.body });
  console.log(req.body);
  res.send(req.body);
});
app.listen(port, (req, res) => {
  console.log("Server will be start");
});
