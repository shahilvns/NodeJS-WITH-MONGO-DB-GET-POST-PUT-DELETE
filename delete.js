const express = require("express");
const mongodb = require("mongodb");
const app = express();
const dbconnect = require("./mongo");
const port = 5000;
app.use(express.json());
app.delete("/:id", async (req, res) => {
  let data = await dbconnect();
  let result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  console.log(req.params.id);
  res.send(result);
});
app.listen(port, (req, res) => {
  console.log("Server will be start");
});
