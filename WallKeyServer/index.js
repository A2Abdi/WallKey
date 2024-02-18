const {MongoClient}=   require('mongodb')

require('dotenv/config')

const express = require('express')

const app = express();

const cors = require('cors');

app.use(express.json());

app.use(cors());

let dbCollections

const uri = process.env.MONGO;

const PORT = process.env.PORT || 3000;

const client = new MongoClient(uri);

app.listen(PORT, () => console.log("listening to port 3000") )

async function connectoDB() {
    try{

        await client.connect(uri);

        let db = client.db('Test');

        dbCollections = db.collection('Ali');

        console.log("Connected");

    }

    catch(err) {

        console.log(err);

        process.exit(1)
    }   
}

connectoDB();

app.get('/data', async (req,res) => {

    try{

        const find =  await dbCollections.find().toArray();

        res.status(200).json(find)

        console.log(res);

    }

    catch (err){

        res.status(500).json();

        console.log(err);

    }

})

app.post('/send', async (req,res) => {
    try{
        await dbCollections.insertOne(req.body);
        res.status(200).json({operation: "complete"});
    }
    catch (err){
        res.status(500).json();
        console.log(err);
    }
})

app.delete('/delete', async (req,res) =>{
    try{
        const result = await dbCollections.deleteOne(req.body);  
        if (result.deletedCount === 1) {
            res.status(200).json({ operation: "complete" });
        } else {
            res.status(404).json({ error: "Document not found" });
        }
    }
    catch (err){
        res.status(500).json();
        console.log(err);
    }
})