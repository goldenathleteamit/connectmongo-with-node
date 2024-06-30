//cmd to install mongo package- npm install mongodb
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const database = 'e-comm'
const client = new MongoClient(url);             //nodejs is client here and mongodb is server.

async function getData()
{
    let result = await client.connect();
    let db=result.db(database);                  //telling name of our database
    let collection = db.collection('products');   //collection name
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();


