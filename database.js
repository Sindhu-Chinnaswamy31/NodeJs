const { MongoClient, ObjectId } = require("mongodb");
//go to mongodb website
// Create a free MD Cluster
//Create a User
//Get the connection string


//instal mangoDB compass
//Create new Connection

//WIDvHhmL38FR2VSS -> password
//sindhucswamy -> username
//49.207.232.143/32 -> IP address
const URI = "mongodb+srv://sindhucswamy:WIDvHhmL38FR2VSS@cluster0.vf5zi2b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

const dbName = "FirstDatabase";

async function mongoDBConnection(){
        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db(dbName);
        const collection = db.collection("User");

        //find read
        const result = await collection.find({}).toArray();
        console.log("Found the following records", result);

        //insert write
        //const data = {firstName: "Gurshreetha", lastName: "Chinnaswamy", age: 23, "city" : "mysore"};
        // const insertResult = await collection.insertOne(data);
        //console.log("Inserted a document", insertResult);

        //update write
        // const updateResult = await collection.updateOne({_id: new ObjectId("6896b9ae336c7bb79d8bf290")}, {$set: {firstName: "Supriya", lastName: "Charitha", age: 23, "city" : "Mandya"}});
        // console.log("Updated a document", updateResult);

        //delete write
        // const deleteResult = await collection.deleteOne({_id: new ObjectId("6896b9ae336c7bb79d8bf290")});
        // console.log("Deleted a document", deleteResult);

        //filter using name gurshreetha
        const filter = {firstName: "Gurshreetha"};
        const filterResult = await collection.find(filter).toArray();
        console.log("Filtered the following records", filterResult);

        //count of filter data
        const count = await collection.countDocuments(filter);
        console.log("Count of filtered records:", count);

        //count 
        // const countResult = await collection.countDocuments({});
        // console.log("Count of documents", countResult);

        return "done";
}

mongoDBConnection()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
