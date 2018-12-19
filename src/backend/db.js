const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://kodflix:kodflix@127.0.0.1:27017/kodflix';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("kodflix");
    dbo.collection("shows").find({}).toArray(function(err, result)  {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});