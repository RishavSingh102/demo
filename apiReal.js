const express = require('express')
const dbConnect = require('./mongodb')
const mongodb=require('mongodb')

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data)
})

// req.body is a method
// method to insert data into mongodb database through api post method
app.post('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    res.send(result)
})

// put method is used to update data in database using api
app.put("/", async (req, res) => {
    let data = await dbConnect();
    let result = data.updateOne(
        {name: req.body.name},{$set: req.body}
    )
    res.send({result: "updated"})
})

app.delete('/:id', async (req, res) => {
    console.log(req.params.id)
    const data = await dbConnect();
    const result=await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.send(result)
})
 
app.listen(5000);


