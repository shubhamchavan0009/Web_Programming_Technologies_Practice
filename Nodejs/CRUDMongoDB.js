const mongodb=require("mongodb").MongoClient
const url="mongodb://0.0.0.0:27017/"
mongodb.connect(url,(err)=>{
    if(err) throw err
    console.log("Connected!!")
})

// mongodb.connect(url,(err,db)=>{
//     if(err) throw err
//     let dbo=db.db("nodejscrud")
//     dbo.createCollection("users",(err)=>{
//         if(err) throw err
//         console.log("Collection created")
//     })
// })


// mongodb.connect(url,(err,db)=>{
//     if(err) throw err
//     let dbo=db.db("nodejscrud")
//     let data={name:"Ram",age:20}
//     dbo.collection("users").insertOne(data,(err)=>{
//         if(err) throw err
//         console.log("Record inserted successfully")
//     })
// })


// mongodb.connect(url,(err,db)=>{
//     if(err) throw err
//     let dbo=db.db("nodejscrud")
//     dbo.collection("users").findOne({},(err,data)=>{
//         if(err) throw err
//         console.log(data)
//     })
// })


// mongodb.connect(url,(err,db)=>{
//     if(err) throw err
//     let dbo=db.db("nodejscrud")
//     dbo.collection("users").find({},{projection:{}}).toArray((err,data)=>{
//         if(err) throw err
//         console.log(data)
//     })
// })
