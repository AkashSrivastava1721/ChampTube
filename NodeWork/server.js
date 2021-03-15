const express = require('express');
const cors = require("cors");
const mongodb = require("mongodb");
const MongodbClient = mongodb.MongoClient;
const app = express();
const bcryptjs = require('bcryptjs');
const json = require('jsonwebtoken');
app.use(cors());
app.use(express.json());
const Database = "ChamDB";
const logdb = [];
const url = "mongodb+srv://sm1:admin@cluster0.w2ual.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
app.post("/signup",async (req,res) =>
{
    try 
    {
        let connection = await MongodbClient.connect(url);
        let db = connection.db(Database);
        let salt = await bcryptjs.genSalt(10);
        let hash = await bcryptjs.hash(req.body.Passcode,salt);
        console.log(salt);
        console.log(hash);
        req.body.Passcode=hash;
        let insertiondb = await db.collection("Log").insertOne(req.body);
        connection.close();
        res.status(200).json({alert:"registered"});
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).json({alert:"error"});  
    }
    
});
app.post("/signin",async (req,res) =>
{
    try 
    {
        let connection = await MongodbClient.connect(url);
        let db = connection.db(Database);
        let user = await db.collection("Log").findOne({Email:req.body.Email});
        if(user)
        {
            let result = await bcryptjs.compare(req.body.Passcode,user.Passcode);
            if(result)
            {
                logdb.push(req.body.Email);
                let token = json.sign({_id : user._id},'alphabetagamatheta');    
                console.log(token);            
                res.status(200).json({alert:"Login Successfully",token});
            }
            else
            {
                res.status(401).json({alert:"Wrong Passcode"});
            }
        }
        else
        {
            res.status(404).json({alert:"User not Found: Kindly Register First"});
        }   
        connection.close();
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).json({alert:"error"});  
    }
    
});
async function authenticate(req,res,next) 
{
    let auth= req.headers.authorization;
    console.log(auth);
    if (auth) 
    {
        let result = await json.verify(req.headers.authorization,'alphabetagamatheta');
        console.log(result);
        if(result)
        {
            next();
        }
        else 
        {
            res.status(401).json({alert:"not authorised"});
        }   
    } 
    else 
    {
        res.status(401).json({alert:"not authorised"});
    }
}
app.post("/uploadvideo", async (req,res) =>
{
    try 
    {
        let connection = await MongodbClient.connect(url);
        let db = connection.db(Database);
        let insertiondb = await db.collection("Uploads").insertOne(req.body);
        connection.close();
        res.status(200).json({alert:"uploaded"});
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).json({alert:"error"});  
    }
});
app.get("/upload", async (req,res) =>
{
    try
    {
        let connection = await MongodbClient.connect(url);
        let db = connection.db(Database);
        let collection = db.collection("Uploads");
        collection.find({}).toArray((error, result) => 
        {
            if(error) 
            {
                return res.status(500).send(error);
            }
            res.send(result);
        });
        connection.close();
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({alert:"error"});
    }
});
app.get("/userDashboard", async (req,res) =>
{
    var email = logdb[logdb.length-1];
    var urls=[];
    try
    {
        let connection = await MongodbClient.connect(url);
        let db = connection.db(Database);
        let collection = db.collection("Uploads");
        collection.find({}).toArray((error, result) => 
        {
            if(error) 
            {
                return res.status(500).send(error);
            }
            for(var i=0;i<result.length;i++)
            {
                if(result[i].Email==email)
                    urls.push(result[i].Link);
            }   
            res.send(urls); 
        });
        connection.close();
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({alert:"error"});
    }
});
app.get("/g1", async (req,res) =>
{
    var urls=[];
    try
    {
        let connection = await MongodbClient.connect(url);
        let db = connection.db(Database);
        let collection = db.collection("Uploads");
        collection.find({}).toArray((error, result) => 
        {
            if(error) 
            {
                return res.status(500).send(error);
            }
            for(var i=0;i<result.length;i++)
            {
                if(result[i].Hashtag=="music"||result[i].Hashtag=="dance")
                    urls.push(result[i].Link);
            }   
            res.send(urls); 
        });
        connection.close();
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({alert:"error"});
    }
});
app.get("/g2", async (req,res) =>
{
    var urls=[];
    try
    {
        let connection = await MongodbClient.connect(url);
        let db = connection.db(Database);
        let collection = db.collection("Uploads");
        collection.find({}).toArray((error, result) => 
        {
            if(error) 
            {
                return res.status(500).send(error);
            }
            for(var i=0;i<result.length;i++)
            {
                if(result[i].Hashtag=="acting"||result[i].Hashtag=="drama")
                    urls.push(result[i].Link);
            }   
            res.send(urls); 
        });
        connection.close();
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({alert:"error"});
    }
});
app.get("/g3", async (req,res) =>
{
    var urls=[];
    try
    {
        let connection = await MongodbClient.connect(url);
        let db = connection.db(Database);
        let collection = db.collection("Uploads");
        collection.find({}).toArray((error, result) => 
        {
            if(error) 
            {
                return res.status(500).send(error);
            }
            for(var i=0;i<result.length;i++)
            {
                if(result[i].Hashtag=="graphic"||result[i].Hashtag=="photography")
                    urls.push(result[i].Link);
            }   
            res.send(urls); 
        });
        connection.close();
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({alert:"error"});
    }
});
app.get("/g4", async (req,res) =>
{
    var urls=[];
    try
    {
        let connection = await MongodbClient.connect(url);
        let db = connection.db(Database);
        let collection = db.collection("Uploads");
        collection.find({}).toArray((error, result) => 
        {
            if(error) 
            {
                return res.status(500).send(error);
            }
            for(var i=0;i<result.length;i++)
            {
                if(result[i].Hashtag=="sketching"||result[i].Hashtag=="painting")
                    urls.push(result[i].Link);
            }   
            res.send(urls); 
        });
        connection.close();
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({alert:"error"});
    }
});
app.get("/g5", async (req,res) =>
{
    var urls=[];
    try
    {
        let connection = await MongodbClient.connect(url);
        let db = connection.db(Database);
        let collection = db.collection("Uploads");
        collection.find({}).toArray((error, result) => 
        {
            if(error) 
            {
                return res.status(500).send(error);
            }
            for(var i=0;i<result.length;i++)
            {
                if(result[i].Hashtag=="others")
                    urls.push(result[i].Link);
            }   
            res.send(urls); 
        });
        connection.close();
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({alert:"error"});
    }
});
app.listen(3000);