const { MongoClient } = require("mongodb");
const mongoUrl = "mongodb://127.0.0.1:27017";
const Client = new MongoClient(mongoUrl);
const Database = "University";

async function dbconnect() {
  let result = await Client.connect();
  let db = result.db(Database);
  return db.collection("student");
}
console.log("Mongo DB is connected");
module.exports = dbconnect;
