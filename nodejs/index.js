const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const url = `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:27017`;
console.log(url);

var app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/api/products", (req, res) => {
  MongoClient.connect(url, (err, client) => {


    if (err) throw err;
    console.log("Database connected!");

    const db = client.db("users");
    db.collection("products")
      .find()
      .toArray((err, result) => {
        if (err) throw err;
        res.send(result);
        client.close();
      });
  });
});

app.listen(8000, () => {
  console.log("Server Runing On PORT 8000");
});
