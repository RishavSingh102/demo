// bar bar dbconnection nhi banna hai isliye ek bar dbConnect function banna lenge jo connect ho jayega fir ise use kr lenge
const { MongoClient } = require('mongodb');
const url = 'mongodb://0.0.0.0';
const database = 'e-comm';
const client = new MongoClient(url);


async function dbConnect()
{
    let result = await client.connect();
    let db=result.db(database);
    return db.collection('products');
     
}

module.exports = dbConnect;

