const fs=require('fs')
// fs.readFile("home.html","utf-8",(err,data)=>{
//     if(err) throw err
//     // console.log(data) // data should be binary format
//     console.log(data.toString())
// })
// let readdata=fs.readFileSync("home.html","utf-8")
// console.log(readdata)
// console.log("last")

// fs.writeFile("contact.html","<h2>contact us page</h2>",(err)=>{
//     if(err) throw err
//     console.log("Data inserted successfully")
// })

// fs.appendFile("contact.html","<h2>pune</h2>",(err)=>{
//     if(err) throw err
//     console.log("Data added successfully")
// })

fs.unlink("home.txt",(err)=>{
    if(err) throw err
    console.log("File deleted successfully")
})

fs.rename("contact.html","contactus.html",(err)=>{
    if(err) throw err
    console.log("File rename successfully")
})





