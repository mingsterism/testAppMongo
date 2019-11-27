const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";

const mongoClient = () => {
  return new Promise(resolve => {
    MongoClient.connect(url, function(e, client) {
      if (e) {
        console.log(e);
        throw { error: "Database connection failed" };
      }

      let db = client.db("example-db");
      // collections.cities = db.collection("cities");
      resolve(db);
    });
  });
};
module.exports = mongoClient;
